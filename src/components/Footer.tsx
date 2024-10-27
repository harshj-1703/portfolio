import Image from "next/image";
import React from "react";

const socialMediaLinks = [
  {
    name: "Email",
    url: "mailto:harshj6680@google.com",
    logo: "/logos/Email.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-jolapara-a63b99205/",
    logo: "/logos/LinkedIn.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/harshj-1703",
    logo: "/logos/GitHub.svg",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/19262833/harsh-jolapara",
    logo: "/logos/Stack Overflow.svg",
  },
];

function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-row items-center justify-between bg-black text-white py-4 px-10"
    >
      <div className="font-josefin">Developed By: Harsh Jolapara</div>
      <div className="">
        <div className="flex justify-center space-x-4">
          {socialMediaLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={link.logo}
                alt={link.name}
                className="w-9 h-9 cursor-pointer transition-transform transform hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
