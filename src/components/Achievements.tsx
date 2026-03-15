import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const achievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "Feb 2026",
    expiry: "Feb 2029",
    downloadLink: null,
    verifyLink:
      "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F93836703-4772-42d2-b6d9-97477fc2a85b%2Flinked_in_profile&urlhash=Nm8f&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BwwGbc6FbSJKzWxT6u0jYaQ%3D%3D",
  },
  {
    title: "ISRO Space Start Program",
    issuer: "ISRO",
    year: "08/2023",
    expiry: null,
    downloadLink: "/achievements/ISRO-Certificate.png",
    verifyLink: null,
  },
  {
    title: "Fundamentals of MCP & MCP Automation in Production",
    issuer: "Hugging Face",
    year: "Mar 2026",
    expiry: null,
    downloadLink: null,
    verifyLink:
      "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fhuggingface.co%2Fdatasets%2Fmcp-course%2Fcertificates%2Fresolve%2Fmain%2Fcertificates%2Fharshj-1703%2F2026-03-04.png&urlhash=Gcs1&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BwwGbc6FbSJKzWxT6u0jYaQ%3D%3D",
  },
  {
    title: "Runner-up — Aazadi ka Amrit Mahotsav SSIP Hackathon",
    issuer: "SSIP Gujarat",
    year: "2022",
    expiry: null,
    downloadLink: "/achievements/SSIP_Hackathon_RunnerUp.png",
    verifyLink: null,
  },
  {
    title: "Google Cloud Ready Facilitator Program — 3rd Milestone",
    issuer: "Google",
    year: null,
    expiry: null,
    downloadLink: "/achievements/Google cloud 3rd milestone.png",
    verifyLink: null,
  },
  {
    title: "Machine Learning with Python",
    issuer: "Cognitive Class (IBM)",
    year: null,
    expiry: null,
    downloadLink: "/achievements/ML_Cognitive_Class.pdf",
    verifyLink: null,
  },
  {
    title:
      "Student Interest Group — Leadership, Goal Setting & Change Management",
    issuer: "SIG",
    year: null,
    expiry: null,
    downloadLink: "/achievements/SIG.png",
    verifyLink: null,
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center bg-black text-white py-10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-10 text-center font-josefin">
          Achievements &amp; Certificates
        </h2>

        <div className="flex flex-col gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-900 rounded-xl px-6 py-4 border border-gray-800 hover:border-blue-800 transition-colors duration-300 gap-4"
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  {item.issuer}
                  {item.year && (
                    <span className="ml-2 text-gray-600">· {item.year}</span>
                  )}
                  {item.expiry && (
                    <span className="ml-2 text-gray-600">
                      · Expires {item.expiry}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {item.verifyLink && (
                  <a
                    href={item.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 border border-blue-800 hover:border-blue-500 text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiExternalLink size={14} />
                    Verify
                  </a>
                )}
                {item.downloadLink && (
                  <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center gap-1.5 bg-[#00008B] hover:bg-blue-600 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiDownload size={14} />
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
