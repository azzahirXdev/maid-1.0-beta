import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY2 });

export async function writeCode(plan) {
  const res = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Kamu adalah AI coder. Tulis kode Linux shell atau Node.js sesuai rencana." },
      { role: "user", content: plan }
    ]
  });
  return res.choices[0].message.content;
}
