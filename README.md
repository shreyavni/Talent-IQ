# ✨ Talent-IQ: Full-Stack Interview Platform

A full-stack technical interview platform that enables candidates and interviewers to conduct **1-on-1 video interviews with real-time coding, communication, and automated code evaluation**.

The platform combines video conferencing, collaborative interview workflows, an in-browser code editor, secure code execution, real-time chat, and automated test-case evaluation into a single application.

---

## 🚀 Features

### 👤 Authentication & User Management

* Secure authentication using **Clerk**
* User profiles and session management
* Protected application routes

### 🎥 1-on-1 Video Interviews

* Create and join interview rooms
* Real-time video and audio communication
* Mic and camera controls
* Screen sharing
* Interview recording
* Room locking to allow a maximum of two participants

### 💻 Online Code Editor

* VSCode-powered coding experience
* Write and execute code directly inside the interview
* Dedicated coding environment for technical interviews
* Practice problems for individual coding sessions

### ⚙️ Secure Code Execution

* Execute submitted code inside an isolated environment
* Evaluate solutions against predefined test cases
* Automatically determine whether a submission passes or fails
* Prevent unsafe execution from affecting the main application

### 🎯 Automated Evaluation

* Test-case based code evaluation
* Success/failure feedback after submission
* Visual feedback for successful submissions
* Notifications when submissions fail

### 💬 Real-Time Communication

* Real-time interview chat
* Video and audio communication
* Screen sharing
* Interactive interview experience

### 📊 Dashboard

* Centralized interview dashboard
* Live interview statistics
* Interview room management
* Track coding activity and interview sessions

### 🧠 Background Processing

* Background jobs powered by **Inngest**
* Asynchronous task processing
* Event-driven workflows

### ⚡ Data Management

* REST API built with **Node.js & Express**
* MongoDB for application data
* TanStack Query for data fetching and caching

### 🤖 Development Workflow

* CodeRabbit for pull-request analysis and code optimization
* Git and GitHub based development workflow
* Feature branches and pull requests
* Automated deployment using Render

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       Client        │
                    │   React + Vite      │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │   Node.js + Express │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌───────────┐    ┌───────────┐   ┌────────────┐
        │  MongoDB  │    │   Clerk   │   │  Inngest   │
        │ Database  │    │   Auth    │   │ Background │
        └───────────┘    └───────────┘   │   Jobs     │
                                         └────────────┘

              ┌────────────────────────────────┐
              │        Interview Services      │
              ├────────────────────────────────┤
              │ Video / Audio                  │
              │ Screen Sharing                 │
              │ Real-Time Chat                 │
              │ Code Execution                 │
              │ Test Case Evaluation           │
              └────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| React                 | Frontend UI                     |
| Vite                  | Development and build tooling   |
| TanStack Query        | Data fetching and caching       |
| Clerk                 | Authentication                  |
| Stream                | Video, audio, and communication |
| VSCode-powered Editor | Online coding experience        |

### Backend

| Technology | Purpose                                    |
| ---------- | ------------------------------------------ |
| Node.js    | Backend runtime                            |
| Express.js | REST API                                   |
| MongoDB    | Database                                   |
| Inngest    | Background jobs and event-driven workflows |
| Clerk      | Authentication and user management         |
| Stream     | Real-time communication                    |

### Development & Deployment

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| Git        | Version control              |
| GitHub     | Repository and collaboration |
| CodeRabbit | PR analysis and code review  |
| Render     | Deployment                   |

---

## 📂 Project Structure

```text
interview-platform/
│
├── frontend/
│   ├── public/
│   │   └── screenshot-for-readme.png
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

* **Node.js 18+**
* **npm**
* **MongoDB**
* A **Clerk** account
* A **Stream** account
* An **Inngest** account

---

## 📥 Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

---

# 🔐 Environment Variables

The project uses separate environment variables for the frontend and backend.

## Backend

Create:

```text
backend/.env
```

Add:

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

---

## Frontend

Create:

```text
frontend/.env
```

Add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

> ⚠️ Never commit `.env` files or API secrets to GitHub.

Make sure `.gitignore` contains:

```gitignore
.env
.env.local
node_modules/
dist/
```

---

# ▶️ Running the Project Locally

## 1. Start the Backend

Open a terminal:

```bash
cd backend
npm install
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

---

## 2. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🔄 Application Flow

The basic interview workflow is:

```text
User Authentication
        ↓
Dashboard
        ↓
Create / Join Interview Room
        ↓
1-on-1 Video Interview
        ↓
Open Coding Environment
        ↓
Write Code
        ↓
Submit Solution
        ↓
Secure Code Execution
        ↓
Run Test Cases
        ↓
┌─────────────────┐
│                 │
▼                 ▼
PASS             FAIL
│                 │
▼                 ▼
Success         Error /
Feedback        Notification
```

---

# 💻 Coding & Evaluation Flow

The coding component allows candidates to solve programming problems during an interview.

```text
Candidate writes code
        ↓
Code submission
        ↓
Validation
        ↓
Isolated execution environment
        ↓
Test cases executed
        ↓
Compare actual vs expected output
        ↓
Evaluation result
        ↓
Success / Failure feedback
```

The isolated execution architecture is designed to prevent submitted code from directly interacting with the main application environment.

---

# 🎥 Interview Room

Each interview room supports:

* Two participants
* Camera and microphone controls
* Screen sharing
* Recording
* Real-time chat
* Coding environment
* Interview-specific room state

### Room Locking

The application restricts rooms to a maximum of two participants:

```text
Interviewer ───────┐
                   │
              Interview Room
                   │
Candidate ─────────┘

Third participant
       ↓
Access denied
```

---

# 🧠 Background Jobs

**Inngest** is used for asynchronous and event-driven operations.

Instead of blocking the main request while a background task is running:

```text
API Request
     ↓
Create Event
     ↓
Inngest
     ↓
Background Job
     ↓
Task Completed
```

This helps separate long-running or asynchronous operations from normal API requests.

---

# 📡 API Architecture

The backend follows a REST-based architecture.

```text
Frontend
   │
   │ HTTP Request
   ▼
Express Router
   │
   ▼
Middleware
   │
   ▼
Controller
   │
   ▼
Service / Business Logic
   │
   ▼
MongoDB
```

The frontend uses **TanStack Query** to manage API requests, caching, and server state.

---

# 🔒 Security

The application includes several security-related measures:

* Authentication through Clerk
* Protected backend routes
* Environment variables for sensitive credentials
* Server-side validation
* Isolated code execution
* Room access restrictions
* Controlled API communication

> Security also depends on the configuration of the deployment environment and third-party services.

---

# 🚀 Deployment

The application can be deployed using **Render**.

Typical deployment structure:

```text
                 GitHub
                    │
             ┌──────┴──────┐
             ▼             ▼
        Frontend        Backend
          Render         Render
             │             │
             └──────┬──────┘
                    │
              External Services
                    │
       ┌────────────┼─────────────┐
       ▼            ▼             ▼
    MongoDB       Clerk         Stream
```

Make sure all required environment variables are configured in the deployment platform before starting the application.

---

# 🧪 Development Workflow

The project follows a Git-based development workflow:

```text
Feature Branch
      ↓
Development
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
CodeRabbit Analysis
      ↓
Review
      ↓
Merge
```

Example:

```bash
git checkout -b feature/new-interview-feature

git add .

git commit -m "Add new interview feature"

git push origin feature/new-interview-feature
```

Then create a Pull Request on GitHub.

---

# 📸 Screenshots

Add screenshots of the major application screens here.

### Dashboard

![Dashboard](./frontend/public/dashboard.png)

### Interview Room

![Interview Room](./frontend/public/interview-room.png)

### Coding Environment

![Code Editor](./frontend/public/code-editor.png)

### Practice Problems

![Practice Problems](./frontend/public/practice.png)

---

# 🔮 Future Improvements

Potential improvements include:

* AI-powered interview feedback
* AI-generated interview questions
* Interview performance analytics
* More programming languages
* Improved code sandboxing
* Automated interview summaries
* Interview history and reports
* Advanced candidate analytics
* Difficulty-based coding problem recommendations

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

# 📄 License

This project is open source and available under the license included in the repository.

---

## 👨‍💻 Author

**Avni Shukla**

B.Tech CSE — Artificial Intelligence & Machine Learning

---

## ⭐ Project Summary

**A full-stack technical interview platform combining real-time video interviews, collaborative coding, secure code execution, automated test-case evaluation, and real-time communication in a single application.**
