# 🎢 WonderWorld AI Chatbot

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

---

## Introduction

An intelligent, context-aware chatbot built using OpenAI APIs, designed to simulate a real-world **theme park customer support assistant**. This project demonstrates advanced **prompt engineering**, structured outputs, and seamless frontend-backend integration with a polished user experience.

---

## 🚀 Features

- 🤖 AI-powered chatbot using OpenAI
- 🧠 Context-aware responses (theme park knowledge)
- 🎯 Prompt engineering (instruction, context, format)
- 📄 Dynamic knowledge injection from Markdown files
- 🚫 Hallucination control and scope restriction
- ⚙️ Structured responses for application use
- 🔊 Audio feedback (send & receive sounds)
- 💬 Clean chat UI with responsive message layout
- 🛡️ Input validation and edge case handling

---

## 🧱 Tech Stack

### Frontend
- React (with TypeScript)
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express

### AI Integration
- OpenAI API (GPT-based models)

### Utilities
- File System (`fs`)
- Path handling (`path`)
- Optional: Zod (for validation)

---

## 📁 Project Structure

```
project-root/
│
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── assets/
│   │   │   └── sound/      # Audio files (pop.mp3, notification.mp3)
│   │   ├── components/
│   │   ├── services/
│   │   └── ...
│
├── server/                 # Backend API
│   ├── prompts/
│   │   ├── chatbot.txt     # Prompt template
│   │   └── wonderworld.md  # Theme park knowledge base
│   ├── services/
│   └── ...
│
└── README.md
```

---

## 🧠 Prompt Engineering Highlights

This project applies core prompt engineering principles:

### 1. Instruction
Defines what the model should do  
> Example: "Summarize customer queries"

### 2. Context
Provides domain-specific knowledge  
> Injected dynamically from `wonderworld.md`

### 3. Output Format
Controls structure (text, list, JSON)

### 4. Constraints
- Restrict answers to theme park domain
- Avoid hallucinations
- Handle invalid input gracefully

---

## 🔄 How It Works

1. User sends a message from the UI  
2. Backend loads:
   - Prompt template (`chatbot.txt`)
   - Park data (`wonderworld.md`)
3. Injects data into prompt:
   ```js
   template.replace("{{PARK_INFO}}", parkInfo)
   ```
4. Sends structured prompt to OpenAI  
5. Returns response to frontend  
6. UI displays message + plays sound  

---

## 🔊 Audio Feedback

- `pop.mp3` → plays when user sends message  
- `notification.mp3` → plays when bot responds  

Adds a modern, interactive feel to the chat experience.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/RTevatia/wonder-world-chatbot.git
cd wonderworld-chatbot
```

### 2. Setup Backend
```bash
cd server
bun install
```

Create `.env`:
```
OPENAI_API_KEY=your_api_key_here
```

Start server:
```bash
bun run dev
```

---

### 3. Setup Frontend
```bash
cd client
bun install
bun run dev
```

---

## 🧪 Example Questions

Try asking:

- What time does the park close?
- Do you have a hotel?
- What rides are best for toddlers?

Out-of-scope example:
- What is the capital of France?

Response:
> "I'm here to help with park-related questions."

---

## 🛡️ Error Handling & Reliability

- Handles:
  - Empty input  
  - Gibberish  
  - Vague queries  
- Can ask clarifying questions  
- Prevents hallucinations with:
  - Grounding (Markdown data)
  - Scope restriction
  - Explicit instructions

---

## 📈 Future Improvements

- Add streaming responses  
- Implement conversation memory  
- Add multilingual support  
- Integrate vector database (RAG)  
- Improve UI animations and accessibility  

---

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request.

---

