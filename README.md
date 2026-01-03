# a Scalable RAG solution using Knowledge Bases for Amazon Bedrock

## Solution Architecture Diagrams

Chatbot
![](./images/Bedrock-Rag-App-Architecture.jpg)

Add new websites for web datasource
![](./images/Update_SeedURLs_Bedrock.jpg)


## Deploy Steps

### Prerequisite

- Install and configure [AWS CLI](https://aws.amazon.com/cli/)
- Install and bootstrap [AWS CDK](https://aws.amazon.com/cdk/)
- Pick a region from the Amazon Bedrock [Supported Regions](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html)

### Backend

- Clone this repository to your local computer.
- From the backend folder, run "npm install" to install all dependencies. Use "npm audit" to check for known vulnerabilites on the dependent packages.
- Use CDK to deploy the backend to AWS. For example,

```
cdk deploy --context allowedip="xxx.xxx.xxx.xxx/32"
```

Provide an client IP address that is allowed to access the API Gateway in CIDR format as part of the 'allowedip' context variable.

When the deployment completes,

- Make note of the API Gateway URL shown at BackendStack.APIGatewayUrl output.
- Make note of the S3 bucket name shown at BackendStack.DocsBucketName output.

### Amazon Bedrock foundational model

### Upload content to S3 bucket

Get a recent publicly available Amazon's annual report and copy it to the S3 bucket name noted previously. For a quick test, you can copy the [Amazon's 2022 annual report](https://s2.q4cdn.com/299287126/files/doc_financials/2023/ar/Amazon-2022-Annual-Report.pdf) using the [AWS S3 Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html). The content from the S3 bucket will be automatically synchronized with the knowledgebase because the solution deployment watches for new content in the S3 bucket and triggers an ingestion workflow.

### Synchronize web content

The deployed solution initializes the web data source called "WebCrawlerDataSource" with the url `https://www.aboutamazon.com/news/amazon-offices`. You need to synchronize this Web Crawler data source with the knowledgebase from the AWS console manually to search against the website content because the website ingestion is scheduled to happen in the future time. Select this data source from the Knowledge based on Amazon Bedrock console and initiate a "Sync" operation. See [Sync your data source with your Amazon Bedrock knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html) for details. Note that the website content will be available to the Q&A chatbot only after the synchronization is completed. Please use this [guidance](https://docs.aws.amazon.com/bedrock/latest/userguide/webcrawl-data-source-connector.html) when setting up websites as a datasource.

### Frontend

- From the frontend folder, run "npm install" to install the packages.
- Optionally, you can run "npm audit --omit=dev" to check on vulnerabilities.
- Run "npm run start" to launch the frontend application from the browser.
- Use the user interface shown in the browser.
- For Step 1, enter the API Gateway endpoint URL noted previously.
- For Step 2, select the model you want to use for RAG. The default model is **Anthropic Claude Instant**.
- For Step 3, you can enter a question of the form "Which cities have offices?" and press the enter key to see the generated answer including a citation.


## Cleanup

Use "cdk destroy" to delete the stack of cloud resources created in this solution deployment.

## Security checks

- npm audit is used to confirm there are no vulnerabilities.
- SonarQube is used in VS Code to confirm there are no problems detected in the codebase.
- [Amazon Q Developer](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-scans.html) project scan is run to confirm there are no vulnerabilities in the codebase.
- S3 bucket created in this project is setup to enforce ssl requests only and encrypt data at rest.
- S3 bucket is setup to block public access.
- API Gateway is setup with AWS Web Application Firewall to allow requests from a specific IP address only.

