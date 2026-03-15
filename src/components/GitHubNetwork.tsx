"use client";
import React, { useEffect, useRef, useState } from "react";

const USERNAME = "harshj-1703";

interface GitHubUser {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

interface Node {
  id: string;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  label: string;
  color: string;
  glow: string;
  img: HTMLImageElement | null;
  isCenter: boolean;
  url: string;
}

function neonColor(i: number, total: number): string {
  const hue = (i / Math.max(total, 1)) * 360;
  return `hsl(${hue}, 100%, 65%)`;
}

function glowColor(i: number, total: number): string {
  const hue = (i / Math.max(total, 1)) * 360;
  return `hsla(${hue}, 100%, 65%, 0.25)`;
}

function loadAvatar(
  url: string,
  cache: Record<string, HTMLImageElement>,
): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (cache[url]) return resolve(cache[url]);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      cache[url] = img;
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

export default function GitHubNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState("Loading followers...");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let dragging: Node | null = null;
    let hovered: Node | null = null;
    let animFrame: number;
    let W = 0,
      H = 0;
    const avatarCache: Record<string, HTMLImageElement> = {};

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas!.parentElement!;
      W = Math.min(parent.clientWidth || 680, 700);
      H = Math.min(Math.max(W * 0.72, 380), 500);
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.scale(dpr, dpr);
    }

    async function buildNodes(followers: GitHubUser[], centerUser: GitHubUser) {
      resize();
      const cx = W / 2,
        cy = H / 2;
      const rOuter = Math.min(W, H) * 0.35;
      nodes = [];

      const centerImg = await loadAvatar(
        `https://avatars.githubusercontent.com/u/${centerUser.id}?size=80`,
        avatarCache,
      );
      nodes.push({
        id: "center",
        x: cx,
        y: cy,
        r: 36,
        vx: 0,
        vy: 0,
        label: centerUser.login,
        color: "#00e5ff",
        glow: "rgba(0,229,255,0.3)",
        img: centerImg,
        isCenter: true,
        url: centerUser.html_url,
      });

      const toLoad = followers.slice(0, 30);
      const imgs = await Promise.all(
        toLoad.map((f) =>
          loadAvatar(
            `https://avatars.githubusercontent.com/u/${f.id}?size=60`,
            avatarCache,
          ),
        ),
      );

      toLoad.forEach((f, i) => {
        const angle = (i / toLoad.length) * Math.PI * 2 - Math.PI / 2;
        const jitter = (Math.random() - 0.5) * rOuter * 0.3;
        const dist = rOuter + jitter;
        nodes.push({
          id: f.login,
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          r: 22,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          label: f.login,
          color: neonColor(i, toLoad.length),
          glow: glowColor(i, toLoad.length),
          img: imgs[i],
          isCenter: false,
          url: f.html_url,
        });
      });
    }

    function drawNode(n: Node, t: number) {
      const isHov = hovered === n;
      const r = n.r;
      const pulse = 1 + 0.08 * Math.sin(t * 0.002 + n.x * 0.01);
      const glowR = r * (isHov ? 2.5 : 1.8) * pulse;

      const grad = ctx!.createRadialGradient(
        n.x,
        n.y,
        r * 0.3,
        n.x,
        n.y,
        glowR,
      );
      grad.addColorStop(0, n.glow.replace("0.25", isHov ? "0.55" : "0.3"));
      grad.addColorStop(1, "transparent");
      ctx!.beginPath();
      ctx!.arc(n.x, n.y, glowR, 0, Math.PI * 2);
      ctx!.fillStyle = grad;
      ctx!.fill();

      ctx!.beginPath();
      ctx!.arc(n.x, n.y, r + (isHov ? 3 : 0), 0, Math.PI * 2);
      ctx!.strokeStyle = n.color;
      ctx!.lineWidth = isHov ? 2.5 : 1.5;
      ctx!.shadowBlur = isHov ? 20 : 10;
      ctx!.shadowColor = n.color;
      ctx!.stroke();
      ctx!.shadowBlur = 0;

      ctx!.save();
      ctx!.beginPath();
      ctx!.arc(n.x, n.y, r - 2, 0, Math.PI * 2);
      ctx!.clip();
      if (n.img) {
        ctx!.drawImage(
          n.img,
          n.x - r + 2,
          n.y - r + 2,
          (r - 2) * 2,
          (r - 2) * 2,
        );
      } else {
        ctx!.fillStyle = "#111";
        ctx!.fillRect(n.x - r, n.y - r, r * 2, r * 2);
        ctx!.fillStyle = n.color;
        ctx!.font = `bold ${r * 0.6}px Arial`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(n.label[0].toUpperCase(), n.x, n.y);
      }
      ctx!.restore();

      if (isHov || n.isCenter) {
        ctx!.fillStyle = "#fff";
        ctx!.font = n.isCenter ? "bold 13px Arial" : "11px Arial";
        ctx!.textAlign = "center";
        ctx!.textBaseline = "top";
        ctx!.shadowBlur = 6;
        ctx!.shadowColor = n.color;
        ctx!.fillText(n.label, n.x, n.y + r + 4);
        ctx!.shadowBlur = 0;
      }
    }

    function drawEdge(center: Node, node: Node, t: number) {
      const dx = node.x - center.x,
        dy = node.y - center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pulse = 0.4 + 0.3 * Math.sin(t * 0.0015 + dist * 0.01);
      const grad = ctx!.createLinearGradient(
        center.x,
        center.y,
        node.x,
        node.y,
      );
      grad.addColorStop(0, `rgba(0,229,255,${pulse * 0.7})`);

      const match = node.color.match(/hsl\((\d+),\s*100%,\s*65%\)/);
      const hue = match ? match[1] : "200";
      grad.addColorStop(1, `hsla(${hue},100%,65%,${pulse * 0.5})`);

      ctx!.beginPath();
      ctx!.moveTo(center.x, center.y);
      ctx!.lineTo(node.x, node.y);
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = hovered === node ? 1.5 : 0.6;
      ctx!.stroke();
    }

    function physics() {
      const cx = W / 2,
        cy = H / 2;
      nodes.forEach((n, i) => {
        if (n === dragging || n.isCenter) return;
        const dx = n.x - cx,
          dy = n.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const targetDist = Math.min(W, H) * 0.37;
        const radialF = (dist - targetDist) * 0.002;
        n.vx -= (dx / dist) * radialF;
        n.vy -= (dy / dist) * radialF;

        nodes.forEach((m, j) => {
          if (i === j) return;
          const ex = n.x - m.x,
            ey = n.y - m.y;
          const ed = Math.sqrt(ex * ex + ey * ey) || 1;
          if (ed < 90) {
            const f = ((90 - ed) * 0.015) / ed;
            n.vx += ex * f;
            n.vy += ey * f;
          }
        });

        n.vx *= 0.92;
        n.vy *= 0.92;
        n.x += n.vx;
        n.y += n.vy;
        n.x = Math.max(n.r + 4, Math.min(W - n.r - 4, n.x));
        n.y = Math.max(n.r + 4, Math.min(H - n.r - 4, n.y));
      });
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H);
      const center = nodes.find((n) => n.isCenter);
      if (!center) return;
      nodes.forEach((n) => {
        if (!n.isCenter) drawEdge(center, n, t);
      });
      nodes.forEach((n) => drawNode(n, t));
      physics();
      animFrame = requestAnimationFrame(draw);
    }

    function getPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
      const rect = canvas!.getBoundingClientRect();
      const touch = "touches" in e ? e.touches[0] : e;
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }

    function findNode(pos: { x: number; y: number }): Node | null {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const dx = pos.x - n.x,
          dy = pos.y - n.y;
        if (dx * dx + dy * dy < (n.r + 8) * (n.r + 8)) return n;
      }
      return null;
    }

    const onMouseDown = (e: MouseEvent) => {
      dragging = findNode(getPos(e));
      canvas!.style.cursor = dragging ? "grabbing" : "grab";
    };
    const onMouseMove = (e: MouseEvent) => {
      const pos = getPos(e);
      if (dragging) {
        dragging.x = pos.x;
        dragging.y = pos.y;
        dragging.vx = 0;
        dragging.vy = 0;
      } else {
        hovered = findNode(pos);
        canvas!.style.cursor = hovered ? "pointer" : "grab";
      }
    };
    const onMouseUp = () => {
      if (dragging) {
        dragging.vx = 0;
        dragging.vy = 0;
      }
      dragging = null;
      canvas!.style.cursor = "grab";
    };
    const onMouseLeave = () => {
      dragging = null;
      hovered = null;
    };
    // const onClick = (e: MouseEvent) => {
    //   const n = findNode(getPos(e));
    //   if (n?.url) window.open(n.url, "_blank");
    // };
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      dragging = findNode(getPos(e));
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (dragging) {
        const p = getPos(e);
        dragging.x = p.x;
        dragging.y = p.y;
        dragging.vx = 0;
        dragging.vy = 0;
      }
    };
    const onTouchEnd = () => {
      dragging = null;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    // canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    const onResize = () => {
      resize();
      const center = nodes.find((n) => n.isCenter);
      if (center) {
        center.x = W / 2;
        center.y = H / 2;
      }
    };
    window.addEventListener("resize", onResize);

    async function init() {
      try {
        setStatus("Fetching GitHub followers...");
        const [userRes, followersRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/followers?per_page=30`,
          ),
        ]);
        if (!userRes.ok || !followersRes.ok) throw new Error("API error");
        const user: GitHubUser = await userRes.json();
        const followers: GitHubUser[] = await followersRes.json();
        setStatus(`${user.login} · ${followers.length} followers shown`);
        resize();
        await buildNodes(followers, user);
        cancelAnimationFrame(animFrame);
        requestAnimationFrame(draw);
      } catch {
        setStatus("Could not load GitHub data.");
        setHasError(true);
      }
    }

    init();

    return () => {
      cancelAnimationFrame(animFrame);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      //   canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return !hasError ? (
    <section
      id="github-network"
      className="flex flex-col items-center justify-center bg-black text-white py-10"
    >
      <div className="container mx-auto px-4 w-full">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-3 text-center font-josefin">
          GitHub Network
        </h2>
        <p className="text-center text-gray-400 text-sm mb-4">{status}</p>

        {!hasError && (
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <canvas
              ref={canvasRef}
              style={{
                display: "block",
                width: "100%",
                cursor: "grab",
                borderRadius: "12px",
                background: "#050510",
              }}
            />
          </div>
        )}
      </div>
    </section>
  ) : (
    <></>
  );
}
