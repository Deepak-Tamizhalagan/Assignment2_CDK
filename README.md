# Assignment 2 – AWS CDK Deployment

This project uses AWS CDK (TypeScript) to provision cloud infrastructure as part of Assignment 2 for PROG8860 CI/CD. The stack creates an S3 bucket, a Lambda function, and a DynamoDB table using Infrastructure as Code (IaC).

 The CDK stack was synthesized to a CloudFormation template using `cdk synth`, then deployed via CLI using:

 ```
aws cloudformation deploy --template-file template.json --stack-name
Assignment2CdkStack --capabilities CAPABILITY_IAM
 ```

 
All resources were successfully created:
- S3 bucket → `assignment2-s3-8983627`
  <img width="1032" height="337" alt="image" src="https://github.com/user-attachments/assets/649c82a3-9410-4c72-8dd2-0718db0d6fd1" />

- Lambda function → returns success message
  <img width="1027" height="648" alt="image" src="https://github.com/user-attachments/assets/ee984762-d94d-4134-be27-cc3dd397b856" />

- DynamoDB table → `assignment2-dynamodb-8983627`
  <img width="1062" height="432" alt="image" src="https://github.com/user-attachments/assets/7f3cc133-5091-497a-901c-be1434e52fe6" />


The project demonstrates CDK-based automation and troubleshooting skills using CloudShell and GitHub.

**Submitted by:** Deepak Tamizhalagan (ID: 8983627)

