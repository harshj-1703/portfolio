"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const isDark = theme === "dark";

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(isDark ? 0x000000 : 0xffffff, 20, 50);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.PlaneGeometry(100, 100, 60, 60);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.MeshBasicMaterial({
      color: isDark ? 0x3b82f6 : 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
      animationId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0005;
      const pos = mesh.geometry.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getZ(i);
        const z =
          Math.sin(x * 0.1 + time) * 1.5 +
          Math.cos(y * 0.1 + time * 0.5) * 1.5 +
          Math.sin((x + y) * 0.05 + time * 0.8) * 1.0;
        pos.setY(i, z);
      }
      pos.needsUpdate = true;

      camera.position.x += (mouseX * 0.02 - camera.position.x) * 0.05;
      camera.position.y +=
        (-(mouseY * 0.02 - 15) - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
