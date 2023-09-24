import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Typescript Currency Converter Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome()


const conversion = {
    "PKR": {
        "USD": 0.0034,
        "EURO": 0.0031,
        "RIYAL": 0.013,
        "DINAR": 0.0010,
        "PKR": 1
    },
    "USD": {
        "PKR": 300,
        "EURO": 0.93,
        "RIYAL": 3.75,
        "DINAR": 0.31,    
        "USD": 1
    },
    "EURO": {
        "PKR": 320.54,
        "USD": 1.107,
        "RIYAL": 4.03,
        "DINAR": 0.33, 
        "EURO": 1     
    },
    "RIYAL": {
        "PKR": 79.55,
        "USD": 0.27,
        "EURO": 0.25,
        "DINAR": 0.082,
        "RIYAL": 1     
    },
    "DINAR": {
        "PKR": 966.71,
        "USD": 3.24,
        "EURO": 3.02,
        "RIYAL": 12.15,  
        "DINAR": 1    
    },
}

const answer: {
    from: "PKR"|"USD"|"EURO"|"RIYAL"|"DINAR",
    to:   "PKR"|"USD"|"EURO"|"RIYAL"|"DINAR",
    amount: number

} = await inquirer.prompt ([
    {
        type: "list",
        name: "from",
        choices: ["PKR","USD","EURO","RIYAL", "DINAR"],
        message: "Please Select your Currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR","USD","EURO","RIYAL", "DINAR"],
        message: "Please Select your conversion Currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Please Enter your Amount:"
    }


]);

const {from, to, amount} = answer;

if (from && to && amount) {let result = conversion [from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
} else {console.log("Invalid Outputs")}
