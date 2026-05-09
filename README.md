# Verticard CMS

## Overview

This project is a backend CMS application built using Strapi v5.

The CMS provides dynamic content management for the frontend Next.js application using GraphQL APIs.

The backend manages:
- Homepage content
- Gallery page content
- Contact page content
- Contact form submissions

---

# Tech Stack

- Strapi v5
- TypeScript
- GraphQL
- SQLite Database

---

# Features

- Dynamic Homepage CMS
- Dynamic Gallery CMS
- Dynamic Contact Page CMS
- GraphQL API Integration
- Media Upload Management
- Contact Form Submission Storage
- CMS-driven Architecture

---

# Content Types

## Single Types

### Homepage

Fields:
- heroImage
- contentTitle
- sections (Dynamic Zone)

---

### Gallery Page

Fields:
- title
- description
- galleryItems

---

### Contact Page

Fields:
- title
- description
- overlayImage

---

### Global Setting

Fields:
- siteTitle
- siteSubtitle
- footerAuthor

---

## Collection Types

### Contact Submission

Fields:
- name
- email
- message

---

# Components

## shared.paragraph-section

Fields:
- content

---

## shared.gallery-item

Fields:
- title
- description
- image

---

# Dynamic Zones

Homepage uses Dynamic Zones for rendering unlimited paragraph sections dynamically.

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate to Project

```bash
cd verticard-cms
```

---

# Install Dependencies

```bash
npm install
```

---

# Run Development Server

```bash
npm run develop
```

Backend runs on:

```text
http://localhost:1337
```

---

# Admin Panel

Admin URL:

```text
http://localhost:1337/admin
```

---

# GraphQL Setup

## Install GraphQL Plugin

```bash
npm install @strapi/plugin-graphql
```

---

# GraphQL Playground

GraphQL Endpoint:

```text
http://localhost:1337/graphql
```

---

# Public Permissions Setup

Go to:

```text
Settings
→ Users & Permissions Plugin
→ Roles
→ Public
```

Enable:

## Homepage
- find

## Gallery Page
- find

## Contact Page
- find

## Global Setting
- find

## Contact Submission
- create

---

# Example GraphQL Queries

## Homepage Query

```graphql
query {
  homepage {
    contentTitle

    heroImage {
      url
    }

    sections {
      __typename

      ... on ComponentSharedParagraphSection {
        content
      }
    }
  }
}
```

---

## Gallery Page Query

```graphql
query {

  galleryPage {

    title

    description

    galleryItems {

      title

      description

      image {
        url
      }
    }
  }
}
```

---

## Contact Page Query

```graphql
query {

    contactPage {

      title

      description

      overlayImage {
        url
      }
    }
  }
```

---

# Contact Form API

## Endpoint

```text
POST /api/contact-submissions
```

---

## Request Body

```json
{
  "data": {
    "name": "John",
    "email": "john@test.com",
    "message": "Hello"
  }
}
```

---

# Environment

Default local backend URL:

```text
http://localhost:1337
```

---

# Build Commands

## Development

```bash
npm run develop
```

---

## Production Build

```bash
npm run build
```

---

## Start Production Server

```bash
npm run start
```

---

# Media Uploads

Uploaded media files are stored inside:

```text
/public/uploads
```

---

# Admin Credentials

Example:

```text
Email: admin@test.com
Password: Admin@123
```

Replace with actual credentials before submission.

---

# Important Notes

- Ensure frontend environment variable points to backend URL.
- Ensure GraphQL plugin is installed.
- Ensure content is published before testing frontend.
- Ensure public permissions are enabled.

---

# API Architecture

## Read Operations
GraphQL APIs are used for fetching CMS content.

## Write Operations
REST APIs are used for contact form submissions.

---

# Future Improvements

- Authentication
- Image optimization
- Email notifications
- Form validation
- SEO support
- Reusable CMS blocks
- Rich text rendering improvements

---

# Author

Developed using Strapi CMS architecture.