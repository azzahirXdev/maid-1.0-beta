import readline from "readline";
import pLimit from "p-limit";
import { planTask } from "./models/planner.js";
import { writeCode } from "./models/coder.js";
import { reviewCode } from "./models/reviewer.js";
import { executeCode } from "./models/executor.js";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const limit = pLimit(1);

async function run() {
  rl.question("Perintahmu: ", async (input) => {
    try {
      const plan = await limit(() => planTask(input));
      console.log("\n[Planner Output]\n");
      sleep(6000)
      const code = await limit(() => writeCode(plan));
      console.log("\n[Generated Code]\n");
      sleep(12000)
      const review = await lit(() => reviewCode(code));
      console.log("\n[Reviewer Feedback]\n", review);

      const result = await executeCode(code);
      console.log("\n[Executiont);
    } catch (e) {
      console.error("\n[Error]\n", e);
    } finally {
      rl.close();
    }
  });
}


