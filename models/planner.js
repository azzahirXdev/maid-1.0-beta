import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY1 });

export async function planTask(prompt) {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Kamu adalah AI planner. Rencanakan langkah coding logis." },
      { role: "user", content: prompt }
    ]
  });
  return res.choices[0].message.content;
}
