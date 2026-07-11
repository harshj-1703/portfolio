import type {
  Project,
  TechCategory,
  Achievement,
  ExperienceItem,
  IndustrialProject,
  Patent,
  SocialMediaLink,
} from "./interfaces";

export const GITHUB_USERNAME = "harshj-1703";

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Email",
    url: "mailto:harshjolapara1703@google.com",
    logo: "/logos/Email.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshjolapara/",
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
  {
    name: "Medium",
    url: "https://medium.com/@harshj-1703",
    logo: "/logos/Medium.svg",
  },
];

export const projects: Project[] = [
  {
    name: "BhagvadgitaGPT",
    description:
      "A full-stack AI application that answers spiritual and life questions using the Bhagavad Gita as a knowledge base. Backend is Flask API; frontend is React/TypeScript SPA built with Vite.",
    image: "/projects/shreemad_bhagvadgeeta_api.png",
    link: "http://bhagvadgitagpt-by-hj.netlify.app/",
  },
  {
    name: "Government Document Management",
    description:
      "B.Tech Final Year Project — MERN Stack website using ReactJS frontend and NodeJS backend API. Firebase for mobile OTP, Storage, User Management and Email.",
    image: "/projects/gov_doc.png",
    link: "https://github.com/harshj-1703/Government-Docs-Manager",
  },
  {
    name: "Government Document Management App",
    description:
      "B.Tech Final Year Project — Flutter mobile app to verify documents generated in the Government Document Management website via QR Code scanning.",
    image: "/projects/gov_doc.png",
    link: "https://github.com/harshj-1703/Government-Docs-Manager-Flutter-App",
  },
  {
    name: "HJ Donation",
    description:
      "HJ Donation helps underprivileged individuals by offering old clothing and items. Uses Entity Framework and MSSQL. Includes admin panel; each item supports 4 photos.",
    image: "/projects/hj_donation.png",
    link: "https://github.com/harshj-1703/HJ_Donation_.net",
  },
  {
    name: "Student Interest Subject Choice ChatBot",
    description:
      "NLP AI project that helps students select elective subjects for the ICT department based on their description and interest.",
    image: "/projects/student_choice.png",
    link: "https://github.com/harshj-1703/Student-Elective_Subject-Web-FLASK-AI",
  },
  {
    name: "GET-SET-WORK",
    description:
      "App connecting job seekers and companies using Flutter and Firebase. Includes Google Ads, Firebase storage, OTP verification, and more.",
    image: "/projects/getsetwork.png",
    link: "",
  },
  {
    name: "Shreemad Bhagavad Gita App",
    description:
      "Flutter app available in Hindi and English with Bhagavad Gita teachings. Available on the Play Store.",
    image: "/projects/shreemad_bhagvadgeeta.png",
    link: "https://play.google.com/store/apps/details?id=com.shreemad_bhagvadgita.shreemad_bhagvadgita&hl=en",
  },
];

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
};

export const technologies: TechCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "C", logo: techLogos.c, doc: "https://en.cppreference.com/w/c" },
      {
        name: "HTML5",
        logo: techLogos.html5,
        doc: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      },
      { name: "CSS3", logo: techLogos.css3, doc: "https://www.css3.info/" },
      {
        name: "JavaScript",
        logo: techLogos.js,
        doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        logo: techLogos.ts,
        doc: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "React",
        logo: techLogos.react,
        doc: "https://reactjs.org/docs/getting-started.html",
      },
      {
        name: "Node.js",
        logo: techLogos.node,
        doc: "https://nodejs.org/en/docs/",
      },
      {
        name: "Tailwind",
        logo: techLogos.tailwind,
        doc: "https://tailwindcss.com/docs",
      },
      {
        name: "Flutter",
        logo: techLogos.flutter,
        doc: "https://flutter.dev/docs",
      },
      { name: "PHP", logo: techLogos.php, doc: "https://www.php.net/" },
      {
        name: "Python",
        logo: techLogos.python,
        doc: "https://www.python.org/doc/",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: techLogos.mysql, doc: "https://www.mysql.com/" },
      {
        name: "PostgreSQL",
        logo: techLogos.postgreSQL,
        doc: "https://www.postgresql.org/docs/",
      },
      {
        name: "MS SQL",
        logo: techLogos.sqlServer,
        doc: "https://docs.microsoft.com/en-us/sql/sql-server/",
      },
      {
        name: "SQLite",
        logo: techLogos.sqlite,
        doc: "https://www.sqlite.org/docs.html",
      },
      {
        name: "MongoDB",
        logo: techLogos.mongodb,
        doc: "https://www.mongodb.com/",
      },
    ],
  },
  {
    category: "AWS Services",
    items: [
      { name: "EC2", logo: techLogos.ec2, doc: "https://aws.amazon.com/ec2/" },
      {
        name: "Lambda",
        logo: techLogos.lambda,
        doc: "https://aws.amazon.com/lambda/",
      },
      { name: "S3", logo: techLogos.s3, doc: "https://aws.amazon.com/s3/" },
      {
        name: "DynamoDB",
        logo: techLogos.dynamodb,
        doc: "https://aws.amazon.com/dynamodb/",
      },
      { name: "RDS", logo: techLogos.rds, doc: "https://aws.amazon.com/rds/" },
      { name: "SQS", logo: techLogos.sqs, doc: "https://aws.amazon.com/sqs/" },
      {
        name: "Connect",
        logo: techLogos.connect,
        doc: "https://aws.amazon.com/connect/",
      },
      {
        name: "Pinpoint",
        logo: techLogos.pinpoint,
        doc: "https://aws.amazon.com/pinpoint/",
      },
      { name: "SES", logo: techLogos.ses, doc: "https://aws.amazon.com/ses/" },
      {
        name: "Location",
        logo: techLogos.location,
        doc: "https://aws.amazon.com/location/",
      },
      {
        name: "CloudWatch",
        logo: techLogos.cloudWatch,
        doc: "https://aws.amazon.com/cloudwatch/",
      },
      {
        name: "API GW",
        logo: techLogos.apiGateway,
        doc: "https://docs.aws.amazon.com/apigateway/",
      },
      {
        name: "Lex",
        logo: techLogos.amazonLex,
        doc: "https://docs.aws.amazon.com/lex/",
      },
      {
        name: "Bedrock",
        logo: techLogos.bedrock,
        doc: "https://docs.aws.amazon.com/bedrock/",
      },
    ],
  },
  {
    category: "BaaS",
    items: [
      {
        name: "Firebase",
        logo: techLogos.firebase,
        doc: "https://firebase.google.com/docs",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", logo: techLogos.git, doc: "https://git-scm.com/doc" },
      {
        name: "GitHub",
        logo: techLogos.github,
        doc: "https://github.com/docs",
      },
      {
        name: "GitLab",
        logo: techLogos.gitlab,
        doc: "https://docs.gitlab.com/ee/",
      },
      {
        name: "Bitbucket",
        logo: techLogos.bitbucket,
        doc: "https://support.atlassian.com/bitbucket-cloud/docs/overview/",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Postman",
        logo: techLogos.postman,
        doc: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        name: "Jira",
        logo: techLogos.jira,
        doc: "https://support.atlassian.com/jira-software-cloud/docs/jira-software-documentation/",
      },
      {
        name: "Swagger",
        logo: techLogos.swagger,
        doc: "https://swagger.io/docs/",
      },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title:
      "AWS Knowledge: Amazon Connect Communications Specialist - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    year: "May 2026",
    expiry: null,
    downloadLink: null,
    verifyLink:
      "https://www.credly.com/badges/d5a636b4-2956-40a3-adf7-5eacd051064a",
  },
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

export const experiences: ExperienceItem[] = [
  {
    company: "Prominent Pixel / Digiclarity, LLC",
    role: "Software Developer — Full Stack + AWS",
    dateLabel: "Jan 2024",
    endLabel: "Present",
    location: "Rajkot, Gujarat",
    points: [
      "Working as a Full Stack Developer with cloud technologies on AWS. Worked with JavaScript, React, and Tailwind CSS for the frontend, NodeJS for the backend, and Python for Lambda micro services.",
      "For backend integration and deployments on AWS, worked with Lambda, EC2, S3, API Gateway, CloudFront, DynamoDB, RDS (PostgreSQL), Parameter Store, Secrets Manager, Lex, and IAM roles, policies, and permissions.",
      "Worked with CCaaS technologies on AWS, including Amazon Connect — designing IVR flows, managing queues, routing profiles, and integrating with Lambda, Lex bots, and chat/call services.",
    ],
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Amazon Connect",
      "Python",
      "DynamoDB",
      "PostgreSQL",
    ],
  },
  {
    company: "3G Tech Solutions",
    role: "PHP/Laravel Web Developer Intern",
    dateLabel: "Mar 2022",
    endLabel: "Jul 2022",
    location: "Rajkot, Gujarat",
    points: [
      "Worked as a PHP Laravel Developer Intern on a hospital management project.",
      "Gained hands-on experience in PHP Laravel, frontend and backend development, database fundamentals, and web development.",
    ],
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
  },
];

export const industrialProjects: IndustrialProject[] = [
  {
    name: "Airline Agent Desktop",
    period: "04/2024 – Present",
    points: [
      "Worked on a U.S. domestic airline project using ReactJS, NodeJS, and AWS to develop an agent platform for managing customer interactions.",
      "Implemented daily activity dashboard, real-time reports on queues, routing profiles, and agents.",
      "Integrated the Amazon Connect CCP panel for call handling and real-time data via Connect APIs.",
      "Gained extensive experience in AWS services, Amazon Connect, and Lex bot services.",
    ],
    tags: ["ReactJS", "NodeJS", "AWS", "Amazon Connect", "Amazon Lex"],
  },
  {
    name: "Call Categorization (AWS Bedrock)",
    period: "04/2024 – Present",
    points: [
      "Worked with AWS Bedrock for incoming contact center call analysis using prompt engineering with S3, Lambda, IAM, and other services.",
      "Used Claude and Nova models for call categorization using Bedrock. Worked with call-based voicebot.",
    ],
    tags: ["AWS Bedrock", "Lambda", "S3", "IAM", "Claude", "Nova"],
  },
  {
    name: "Hotel Agent Report Management",
    period: "02/2024 – 04/2024",
    points: [
      "Worked on a project for an international hotel management company, enabling agents to view daily customer reports.",
      "Gained deeper understanding of core functionalities and concepts in React and NodeJS.",
    ],
    tags: ["ReactJS", "NodeJS", "AWS"],
  },
];

export const patents: Patent[] = [
  {
    title: "GetSetWork Application",
    type: "Copyright",
    description:
      "A job-seeking platform connecting job seekers and companies using Flutter and Firebase, featuring OTP verification, Google Ads, and real-time listings.",
    number: null,
    link: null,
    download: "/copyright.pdf",
    downloadLabel: "Copyright Certificate",
  },
  {
    title: "Smart Dustbin",
    type: "Patent",
    description:
      "An IoT-based smart dustbin system that automates waste management and notifies authorities when full.",
    number: null,
    link: null,
    download: "/patent.jpg",
    downloadLabel: "Patent Certificate",
  },
];
