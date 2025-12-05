import { GoogleGenAI } from "@google/genai";
import { OWNER_PROFILE, SKILLS, PROJECTS, BLOG_POSTS } from "../data/content";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

// Construct the system context for the AI
const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of an Android Developer named Alex.
You are embedded in Alex's personal portfolio website.

Here is Alex's profile data:
${OWNER_PROFILE}

Here are Alex's technical skills (0-100 scale):
${JSON.stringify(SKILLS)}

Here are Alex's key projects:
${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, stack: p.techStack })))}

Here are the titles of blog posts Alex has written:
${JSON.stringify(BLOG_POSTS.map(b => b.title))}

Your goal is to answer visitor questions *as if you are Alex*, or as a helpful assistant representing Alex.
- Be professional but friendly.
- Highlight Alex's expertise in Kotlin and Android.
- If asked about contact info, suggest looking at the contact section or LinkedIn.
- Keep responses concise (under 100 words usually) unless asked for a detailed technical explanation.
- If asked a question unrelated to Alex or Android development, politely steer the conversation back to Alex's work.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key missing. Please configure the environment variable to chat.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Transform history to the format expected by the SDK if needed, 
    // but for simple single-turn or managed history, we can just use generateContent with system instruction.
    // However, for a chat experience, maintaining history is better.
    // Since the new SDK manages history in chat sessions, we will recreate a session context roughly or just append history to prompt for simplicity in this stateless service wrapper, 
    // OR ideally, use the chat API. Let's use the Chat API.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: message,
    });

    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the brain right now. Please try again later.";
  }
};