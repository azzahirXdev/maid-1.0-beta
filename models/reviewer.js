import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY3 });

export async function reviewCode(code) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Kamu adalah AI reviewer. Periksa bug, keamanan, dan optimasi singkat." },
      { role: "user", content: code }
    ]
  });
  return res.choices[0].message.content.trim();
}
