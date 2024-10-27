import React from "react";

const achievements = [
  {
    title: "ISRO Space Start Program",
    year: "08/2023",
    link: "/achievements/ISRO-Certificate.png",
  },
  {
    title: "Runner-up in Aazadi ka Amrit Mahotsav SSIP Hackathon",
    year: 2022,
    link: "/achievements/SSIP_Hackathon_RunnerUp.png",
  },
  {
    title: "Google Cloud Ready Facilitator Program 3rd Milestone",
    year: null,
    link: "/achievements/Google cloud 3rd milestone.png",
  },
  {
    title:
      "Student Interest Group (Leadership, Goal Setting, and Change Management)",
    year: null,
    link: "/achievements/SIG.png",
  },
  {
    title: "Machine Learning with Python (Cognitive Class)",
    year: null,
    link: "/achievements/ML_Cognitive_Class.pdf",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center bg-black text-white py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-11 text-center font-josefin">
          Achievements & Certificates
        </h2>
        <ul className="list-disc px-5">
          {achievements.map((achievement, index) => (
            <li key={index} className="mb-4 flex justify-between items-center">
              <span>
                {achievement.title}{" "}
                {achievement.year && `(${achievement.year})`}
              </span>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="ml-4 bg-[#00008B] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
