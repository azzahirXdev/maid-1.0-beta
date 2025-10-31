import { exec } from "child_process";

export function executeCode(code) {
  return new Promise((resolve, reject) => {
    exec(code, (err, stdout, stderr) => {
      if (err) return reject(stderr || err.message);
      resolve(stdout);
    });
  });
}
