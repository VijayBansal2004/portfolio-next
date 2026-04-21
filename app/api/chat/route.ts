import OpenAI from "openai";
import { NextResponse } from "next/server";

// 🔹 OpenRouter client
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// 🔹 Predefined answers (instant + smart)
const predefinedAnswers: Record<string, string> = {
  "who are you":
    "I'm Vijay's AI assistant. I can tell you about his work, skills, and projects.",

  "who is vijay":
    "Vijay is a Frontend Developer specializing in React and Next.js. He builds fast, interactive web apps with a strong focus on UI and user experience.",

  "what do you do":
    "Vijay builds scalable web applications using React and Next.js, focusing on clean UI and smooth interactions.",

  skills:
    "Vijay works with React, Next.js, TypeScript, Tailwind CSS, and modern frontend tools.",

  projects:
    "He has built interactive UI components, AI-powered features like this chatbot, and scalable frontend applications.",

  experience:
    "Vijay is currently working and continuously improving his skills in frontend development and AI integrations.",

  contact:
    "You can contact Vijay through the contact section on this portfolio.",

  ai: "Vijay is currently exploring AI integrations to build smarter and more interactive web applications.",
};

// 🔹 Match predefined answers
function getPredefinedAnswer(message: string) {
  const lower = message.toLowerCase();

  for (const key in predefinedAnswers) {
    if (lower.includes(key)) {
      return predefinedAnswers[key];
    }
  }

  return null;
}

// 🔹 System prompt (AI personality)
const SYSTEM_PROMPT = `
You are Vijay's AI assistant.

About Vijay:
- Frontend Developer
- Specializes in React and Next.js
- Builds scalable and interactive web applications
- Focuses on UI, animations, and user experience
- Exploring AI integrations

Rules:
- Keep answers short and friendly
- Answer as if you represent Vijay
- If question is unrelated, politely redirect to Vijay's work
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 },
      );
    }

    const userMessage = messages[messages.length - 1].content;

    // ✅ 1. Predefined answer check
    const predefined = getPredefinedAnswer(userMessage);

    if (predefined) {
      return NextResponse.json({
        reply: { content: predefined },
      });
    }

    // ✅ 2. AI fallback (OpenRouter)
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
    });

    return NextResponse.json({
      reply: {
        content: completion.choices[0].message.content,
      },
    });
  } catch (err: any) {
    console.error("ERROR:", err?.message || err);

    return NextResponse.json(
      { error: err?.message || "Something went wrong" },
      { status: 500 },
    );
  }
}
