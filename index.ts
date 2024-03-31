#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let pinCode = 1234;
let Balance = 10000;

console.log(chalk.blue("\n \tWelcome to Farhan Saeed ATM\n"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.yellow("Enter your pin"),
  },
]);

if (pinAnswer.pin === pinCode) {
  console.log(chalk.green("\nYour Pin is Currect, Successfully Login\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select One Option",
      choices: ["Withdraw Amount", "Check Amount"],
    },
  ]);

  if (operationAns.operation === "Withdraw Amount") {
    let WithdrawAnswer = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdraw method:",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (WithdrawAnswer.withdrawMethod === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: "Select Amount:",
          choices: [1000, 2000, 5000, 10000, 20000],
        },
      ]);
      if (fastCashAns.fastCash > Balance) {
        console.log(chalk.red("Insufficient Balance"));
      } else {
        Balance -= fastCashAns.fastCash;
        console.log(chalk.green(`${fastCashAns.fastCash} Withdraw Successfully`));
        console.log(chalk.blue(`Your Remaining Balance is ${Balance}`));
      }
    } else if (WithdrawAnswer.withdrawMethod === "Enter Amount") {
      let AmountAns = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: "Enter your Amount",
        },
      ]);

      if (AmountAns.amount > Balance) {
        console.log(chalk.red("Insefficient Balance"));
      } else {
        Balance -= AmountAns.amount;
        console.log(chalk.green(`${AmountAns.amount} Successfully Withdraw`));
        console.log(chalk.blue(`Your Remaining Balance is ${Balance}`));
      }
    }
  } else if (operationAns.operation === "Check Amount") {
    console.log(chalk.blue(`Your Account Balance is ${Balance}`));
  }
} else {
  console.log(chalk.red("Incorrect Password Please Try Again"));
}
