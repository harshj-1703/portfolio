import Image from "next/image";
import React from "react";

const projects = [
  {
    name: "Government Document Management",
    description:
      "An B.Tech Final Year Project, Created Website with MERN Stack using ReactJS as frontend and NodeJS as backend API. Also used Firebase services for mobile OTP, Storage and User Management, Email etc.",
    image: "/projects/gov_doc.png",
    link: "https://github.com/harshj-1703/Government-Docs-Manager",
  },
  {
    name: "Government Document Management App",
    description:
      "An B.Tech Final Year Project, Created Flutter Mobile Application that is used to verify Document generated for users in government document management Website with QR Code scanning.",
    image: "/projects/gov_doc.png",
    link: "https://github.com/harshj-1703/Government-Docs-Manager-Flutter-App",
  },
  {
    name: "HJ Donation",
    description:
      "This project focuses on HJ donation, helping underprivileged individuals by offering old clothing and items. It uses Entity Framework and an MSSQL database. Users can contribute items, and there's an admin panel. Each item can have 4 photos and additional details.",
    image: "/projects/hj_donation.png",
    link: "https://github.com/harshj-1703/HJ_Donation_.net",
  },
  {
    name: "Student Interest Subject Choice ChatBot",
    description:
      "An AI project in NLP that helps students select elective subjects for the ICT department with their description and interest.",
    image: "/projects/student_choice.png",
    link: "https://github.com/harshj-1703/Student-Elective_Subject-Web-FLASK-AI",
  },
  {
    name: "GET-SET-WORK",
    description:
      "An app connecting job seekers and companies using Flutter and Firebase. It includes Google Ads, Firebase storage, OTP verification, and more.",
    image: "/projects/getsetwork.png",
    link: "",
  },
  {
    name: "GitaGPT API",
    description:
      "This project allows users to input problems and receive suggestions from the Bhagavad Gita. Built using Flask, it provides a unique way to seek advice through ancient wisdom.",
    image: "/projects/shreemad_bhagvadgeeta_api.png",
    link: "https://github.com/harshj-1703/Gita_GPT-FLASK-API",
  },
  {
    name: "Shreemad Bhagavad Gita App",
    description:
      "A Flutter app available in both Hindi and English, providing users with access to the teachings of the Bhagavad Gita. This app is available on the Play Store.",
    image: "/projects/shreemad_bhagvadgeeta.png",
    link: "https://play.google.com/store/apps/details?id=com.shreemad_bhagvadgita.shreemad_bhagvadgita&hl=en",
  },
  {
    name: "Chanakya GPT",
    description:
      "This project provides suggestions and advice based on the teachings from the Chanakya Neeti book, helping users apply ancient wisdom to modern challenges.",
    image: "/projects/chankya_neeti.png",
    link: "https://github.com/harshj-1703/Chanakya-GPT",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-6 text-center font-josefin">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-xs w-full" // Adjusted for width and max-width
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
              </a>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">
                  {project.name}
                </h3>
                <p className="mt-1 text-center max-w-[300px]">
                  {project.description}
                </p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
