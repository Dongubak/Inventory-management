import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function ask(question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer)));
}

export async function print(message = '') {
  await new Promise((resolve) => {
    process.stdout.write(`${message}\n`, () => resolve());
  });
}

export async function printLines(lines = []) {
  for (const line of lines) {
    await print(line);
  }
}

export async function close() {
  rl.close();
}
