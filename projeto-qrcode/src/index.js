import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await calculateFee();
    
  });

  prompt.start();
}

main();

async function calculateFee() {
  prompt.get(
    [
      {
        name: "amount",
        description: "Digite o valor base",
        type: "number",
        required: true,
      },
      {
        name: "feePercent",
        description: "Digite a taxa (%)",
        type: "number",
        required: true,
      },
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      const amount = result.amount;
      const feePercent = result.feePercent;

      const fee = (amount * feePercent) / 100;
      const total = amount + fee;

      console.log(`\nValor base: R$ ${amount}`);
      console.log(`Taxa (${feePercent}%): R$ ${fee}`);
      console.log(`Total com taxa: R$ ${total}\n`);
    }
  );
}

export default calculateFee;

