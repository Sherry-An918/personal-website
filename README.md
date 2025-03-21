﻿# nisirui.com

## Overview
This repository hosts the code and infrastructure for my personal website, nisirui.com. The site serves as a portfolio and blog, providing insights into my work, projects, and interests. The architecture includes a static site deployed via a CDN, a visitor counter managed through AWS Lambda, and automated deployment using GitHub Actions.

## Architecture
![image](https://github.com/user-attachments/assets/8d981523-17ca-4a4b-ad1d-7cf7d268cc1a)

### Frontend (Static Site)

- Files: HTML, CSS, and JavaScript
- Hosting: Deployed to a content delivery network (CDN) for fast and reliable access
- Updates: Automatically updated on GitHub push events

### Backend (Visitor Counter)

- API: `api.nisirui.com`
- Lambda Function: Handles visitor count updates
- DynamoDB: Stores visitor count data

### Deployment & Automation

- GitHub Actions: Automates deployment of website and backend code
- CI/CD: Ensures updates are deployed efficiently

### How It Works

1. A visitor accesses `nisirui.com`, which is served via a CDN.
2. The static files (HTML, CSS, JS) are retrieved from the CDN.
3. A request is made to `api.nisirui.com` to increment the visitor count.
4. The API invokes an AWS Lambda function to update the visitor count in the database.

GitHub Actions automatically deploys new changes to both the static site and backend when a commit is pushed.
