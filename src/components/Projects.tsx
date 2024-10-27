import React from "react";

const projects = [
  {
    name: "Government Document Management",
    description:
      "An Final Year Project, Created Website with MERN Stack using ReactJS as frontend and NodeJS as backend API. Also used Firebase services for mobile OTP, Storage and User Management, Email etc. Created Flutter Mobile Application that is used to verify Document generated for users in government document management Website with QR Code scanning.",
    image: "/path/to/government-document-management-image.png",
    link: "https://link-to-government-document-management.com",
  },
  {
    name: "RMC Donation",
    description:
      "This project focuses on RMC donation, helping underprivileged individuals by offering old clothing and items. It uses Entity Framework and an MSSQL database. Users can contribute items, and there's an admin panel. Each item can have 4 photos and additional details.",
    image: "/path/to/rmc-donation-image.png",
    link: "https://link-to-rmc-donation.com",
  },
  {
    name: "Student Interest Subject Choice ChatBot",
    description:
      "An AI project in NLP that helps students select elective subjects for the ICT department with their description and interest.",
    image: "/path/to/student-interest-chatbot-image.png",
    link: "https://link-to-student-interest-chatbot.com",
  },
  {
    name: "GET-SET-WORK",
    description:
      "An app connecting job seekers and companies using Flutter and Firebase. It includes Google Ads, Firebase storage, OTP verification, and more.",
    image: "/path/to/get-set-work-image.png",
    link: "https://link-to-get-set-work.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center font-josefin">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-xs w-full" // Adjusted for width and max-width
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
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
