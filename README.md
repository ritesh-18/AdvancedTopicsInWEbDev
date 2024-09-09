
# Cloudflare Serverless Backend with PostgreSQL and Prisma using TypeScript

This project demonstrates how to set up a Cloudflare serverless backend using Node.js in TypeScript with PostgreSQL as the database. Prisma is used as the ORM (Object-Relational Mapping) for interacting with the database. The code is fully written in TypeScript.

## Project Structure

```
.
├── prisma/               # Prisma schema and migration files
├── src/
│   ├── db/               # Database connection setup
│   ├── models/           # TypeScript interfaces/models
│   ├── routes/           # API routes
│   ├── server.ts         # Main server entry point
├── package.json
├── tsconfig.json         # TypeScript configuration
├── .env                  # Environment variables (PostgreSQL credentials, Cloudflare keys, etc.)
└── README.md
```

## Features

- Cloudflare Workers as the serverless platform
- PostgreSQL database with Prisma as ORM
- TypeScript for type safety and cleaner code
- REST API routes for basic CRUD operations
- Cloudflare deployment configuration

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudflare CLI](https://developers.cloudflare.com/workers/wrangler/get-started/) (for Cloudflare Workers)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart) (for database migrations)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-repository>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your PostgreSQL credentials, Prisma settings, and Cloudflare credentials.

```bash
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<dbname>"
CLOUDFLARE_ACCOUNT_ID="<your-account-id>"
CLOUDFLARE_API_TOKEN="<your-api-token>"
```

### 4. Set up PostgreSQL Database

Make sure you have PostgreSQL running. You can start it locally or use a hosted service. Then, apply the Prisma migrations:

```bash
npx prisma migrate dev
```

### 5. Build the Project

Compile the TypeScript code using:

```bash
npm run build
```

### 6. Run the Server Locally

You can test the backend locally using the Wrangler CLI:

```bash
wrangler dev
```

### 7. Deploy to Cloudflare

Deploy the serverless function to Cloudflare:

```bash
wrangler publish
```

## API Endpoints

Here are the basic API endpoints for this backend:

- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve a specific user
- `PUT /api/users/:id` - Update a specific user
- `DELETE /api/users/:id` - Delete a specific user

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **TypeScript**: Strongly typed programming language
- **PostgreSQL**: Relational database
- **Prisma**: Next-generation ORM for TypeScript and Node.js
- **Cloudflare Workers**: Serverless platform for deploying backend functions

## License

This project is licensed under the MIT License.
