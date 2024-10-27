import React from "react";

function Technologies() {
  return (
    <section
      id="technologies"
      className="flex items-center justify-center min-h-screen bg-black text-white"
    >
      <div className="container justify-center mx-auto flex flex-col md:flex-row items-center px-4">
        Technologies Worked With Languages & Frameworks: JavaScript (JS),
        TypeScript (TS), React, Node.js, Tailwind CSS, Flutter Databases: SQL,
        NoSQL (DynamoDB, RDS) Cloud & AWS Services: Compute: EC2, Lambda Storage
        & Database: S3, DynamoDB, RDS Messaging: SQS, Amazon Connect, Pinpoint
        (for SMS & email), SES (for email) API Management: API Gateway Content
        Delivery: CloudFront Monitoring & Analytics: CloudWatch Other AWS
        Services: Amazon Location Service Other Skills: Manual configuration of
        AWS services, Amazon Connect, DevOps basics on AWS
      </div>
    </section>
  );
}

export default Technologies;
