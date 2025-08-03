import Image from "next/image";
import React from "react";

const techLogos = {
  js: "/logos/JavaScript.svg",
  ts: "/logos/TypeScript.svg",
  react: "/logos/React.svg",
  node: "/logos/Node.js.svg",
  tailwind: "/logos/Tailwind CSS.svg",
  flutter: "/logos/Flutter.svg",
  ec2: "/logos/EC2.svg",
  lambda: "/logos/Lambda.svg",
  s3: "/logos/Simple Storage Service.svg",
  dynamodb: "/logos/DynamoDB.svg",
  mongodb: "/logos/MongoDB.svg",
  rds: "/logos/RDS.svg",
  sqs: "/logos/Simple Queue Service.svg",
  connect: "/logos/Connect.svg",
  pinpoint: "/logos/Pinpoint.svg",
  ses: "/logos/Simple Email Service.svg",
  location: "/logos/Location Service.svg",
  php: "/logos/PHP.svg",
  cloudWatch: "/logos/CloudWatch.svg",
  bitbucket: "/logos/BitBucket.svg",
  git: "/logos/Git.svg",
  github: "/logos/GitHub.svg",
  gitlab: "/logos/GitLab.svg",
  sqlServer: "/logos/Microsoft SQL Server.svg",
  mysql: "/logos/MySQL.svg",
  postgreSQL: "/logos/PostgresSQL.svg",
  python: "/logos/Python.svg",
  sqlite: "/logos/SQLite.svg",
  html5: "/logos/HTML5.svg",
  css3: "/logos/CSS3.svg",
  firebase: "/logos/Firebase.svg",
  c: "/logos/C.svg",
  postman: "/logos/Postman.svg",
  apiGateway: "/logos/API Gateway.svg",
  bedrock: "/logos/Bedrock.svg",
  amazonLex: "/logos/Amazon Lex.svg",
  docker: "/logos/docker.svg",
  jira: "/logos/jira.svg",
  swagger: "/logos/swagger.svg",
  terraform: "/logos/terraform.svg",
};

const technologies = [
  {
    category: "Languages & Frameworks",
    items: [
      {
        name: "C Language",
        logo: techLogos.c,
        documentation: "https://en.cppreference.com/w/c",
      },
      {
        name: "HTML5",
        logo: techLogos.html5,
        documentation:
          "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      },
      {
        name: "CSS3",
        logo: techLogos.css3,
        documentation: "https://www.css3.info/",
      },
      {
        name: "JavaScript",
        logo: techLogos.js,
        documentation:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        logo: techLogos.ts,
        documentation: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "React",
        logo: techLogos.react,
        documentation: "https://reactjs.org/docs/getting-started.html",
      },
      {
        name: "Node.js",
        logo: techLogos.node,
        documentation: "https://nodejs.org/en/docs/",
      },
      {
        name: "Tailwind CSS",
        logo: techLogos.tailwind,
        documentation: "https://tailwindcss.com/docs",
      },
      {
        name: "Flutter",
        logo: techLogos.flutter,
        documentation: "https://flutter.dev/docs",
      },
      {
        name: "PHP",
        logo: techLogos.php,
        documentation: "https://www.php.net/",
      },
      {
        name: "Python",
        logo: techLogos.python,
        documentation: "https://www.python.org/doc/",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MySQL",
        logo: techLogos.mysql,
        documentation: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        logo: techLogos.postgreSQL,
        documentation: "https://www.postgresql.org/docs/",
      },
      {
        name: "Microsoft SQL Server",
        logo: techLogos.sqlServer,
        documentation: "https://docs.microsoft.com/en-us/sql/sql-server/",
      },
      {
        name: "SQLite",
        logo: techLogos.sqlite,
        documentation: "https://www.sqlite.org/docs.html",
      },
      {
        name: "MongoDB",
        logo: techLogos.mongodb,
        documentation: "https://www.mongodb.com/",
      },
    ],
  },
  {
    category: "AWS Services",
    items: [
      {
        name: "EC2",
        logo: techLogos.ec2,
        documentation: "https://aws.amazon.com/ec2/",
      },
      {
        name: "Lambda",
        logo: techLogos.lambda,
        documentation: "https://aws.amazon.com/lambda/",
      },
      {
        name: "S3",
        logo: techLogos.s3,
        documentation: "https://aws.amazon.com/s3/",
      },
      {
        name: "DynamoDB",
        logo: techLogos.dynamodb,
        documentation: "https://aws.amazon.com/dynamodb/",
      },
      {
        name: "RDS",
        logo: techLogos.rds,
        documentation: "https://aws.amazon.com/rds/",
      },
      {
        name: "SQS",
        logo: techLogos.sqs,
        documentation: "https://aws.amazon.com/sqs/",
      },
      {
        name: "Amazon Connect",
        logo: techLogos.connect,
        documentation: "https://aws.amazon.com/connect/",
      },
      {
        name: "Pinpoint",
        logo: techLogos.pinpoint,
        documentation: "https://aws.amazon.com/pinpoint/",
      },
      {
        name: "SES",
        logo: techLogos.ses,
        documentation: "https://aws.amazon.com/ses/",
      },
      {
        name: "Amazon Location Service",
        logo: techLogos.location,
        documentation: "https://aws.amazon.com/location/",
      },
      {
        name: "CloudWatch",
        logo: techLogos.cloudWatch,
        documentation: "https://aws.amazon.com/cloudwatch/",
      },
      {
        name: "Amazon API Gateway",
        logo: techLogos.apiGateway,
        documentation: "https://docs.aws.amazon.com/apigateway/",
      },
      {
        name: "Amazon Lex",
        logo: techLogos.amazonLex,
        documentation: "https://docs.aws.amazon.com/lex/",
      },
      {
        name: "Amazon Bedrock",
        logo: techLogos.bedrock,
        documentation: "https://docs.aws.amazon.com/bedrock/",
      },
    ],
  },
  {
    category: "Backend as a Services(Baas)",
    items: [
      {
        name: "Firebase",
        logo: techLogos.firebase,
        documentation: "https://firebase.google.com/docs",
      },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      {
        name: "Docker",
        logo: techLogos.docker,
        documentation: "https://docs.docker.com/get-started/",
        level: "Beginner",
      },
      {
        name: "Terraform (Beginner)",
        logo: techLogos.terraform,
        documentation: "https://developer.hashicorp.com/terraform/docs",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        name: "Git",
        logo: techLogos.git,
        documentation: "https://git-scm.com/doc",
      },
      {
        name: "GitHub",
        logo: techLogos.github,
        documentation: "https://github.com/docs",
      },
      {
        name: "GitLab",
        logo: techLogos.gitlab,
        documentation: "https://docs.gitlab.com/ee/",
      },
      {
        name: "Bitbucket",
        logo: techLogos.bitbucket,
        documentation:
          "https://support.atlassian.com/bitbucket-cloud/docs/overview/",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Postman",
        logo: techLogos.postman,
        documentation:
          "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        name: "Jira",
        logo: techLogos.jira,
        documentation:
          "https://support.atlassian.com/jira-software-cloud/docs/jira-software-documentation/",
      },
      {
        name: "Swagger",
        logo: techLogos.swagger,
        documentation: "https://swagger.io/docs/",
      },
    ],
  },
];

function Technologies() {
  return (
    <section
      id="technologies"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-6 text-center font-josefin">
          Technologies Worked With
        </h2>

        {technologies.map((techCategory, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {techCategory.category}
            </h3>
            <div className="flex flex-wrap justify-center">
              {techCategory.items.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center m-4">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-900 shadow-lg transition-transform transform hover:scale-105">
                    {tech.logo ? (
                      <a
                        href={tech.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12"
                        />
                      </a>
                    ) : (
                      <span className="text-gray-400">{tech.name}</span>
                    )}
                  </div>
                  <p className="mt-2 max-w-[80px] text-center whitespace-normal">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
