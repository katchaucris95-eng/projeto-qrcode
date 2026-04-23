import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE ou (2- PASSWORD e (3-Taxas"
    ),
    pattern: /^[1-2-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2 e 3"),
    required: true,
  },
];

export default promptSchemaMain;
