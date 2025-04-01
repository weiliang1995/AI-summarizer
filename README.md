# AI Summarizer

## Summarize Articles with OpenAI GPT-4

Tired of reading long articles? Simplify your reading with AI Summarizer, an open-source article summarizer that transform lengthy articles into clear and concise summaries.

Try it at : [link]

### Tech Stack

Built by React, Redux Toolkit, Tailwind CSS, RapidAPI (Article Extractor and Summarizer)

### Features

Modern and Friendly User Interface
Summary Generation
History Saving with Local Storage
Copy URL to clipboard Functionality
Advanced RTK Query API Requests

### Wanna try it locally?

Follow these steps to set up the project locally on your machine.

**Prerequisites**
Make sure you have the following installed on your machines:

- Git
- Node.js
- npm

**Cloning the repository**

```bash
git clone
cd ai-summarizer
```

**Installation**
Install the project dependencies using npm:

```bash
npm install
```

**Set up Environment Variables**
Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_ARTICLE_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the [RapidAPI website] (https://rapidapi.com/restyler/api/article-extractor-and-summarizer)

**Running the Project**

```bash
npm run dev
```

Open https://localhost:5173 in your browser and start summarizing articles by pasting the article link!
