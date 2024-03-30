import inquirer from "inquirer";
let pinCode = 1234;
let Balance = 10000;
console.log("Welcome to Farhan Saeed ATM");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === pinCode) {
    console.log("Your Pin is Currect, Successfully Login");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select One Option",
            choices: ["Withdraw Amount", "Check Amount"],
        },
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let AmountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your Amount",
            },
        ]);
        if (AmountAns.amount > Balance) {
            console.log("Insefficient Balance");
        }
        else {
            Balance -= AmountAns.amount;
            console.log(`${AmountAns.amount} Successfully Withdraw`);
            console.log(`Your Remaining Balance is ${Balance}`);
        }
    }
    else if (operationAns.operation === "Check Amount") {
        console.log(`Your Account Balance is ${Balance}`);
    }
}
else {
    console.log("Incorrect Password Please Try Again");
}
