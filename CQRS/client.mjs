import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import {ACCOUNT_LIST} from "./database.mjs";

console.log("cli");
accountCommand.addAccount("Paul","Seckinger");
accountCommand.addAccount("jon","jones");
accountCommand.addAccount("jack","son");
const accountList = accountQuery.getAccountList("creationDate");

console.log(accountList);

const savedAccount = accountCommand.saveAccount(ACCOUNT_LIST[0].id, "Gerard", "Langlet");

console.log(savedAccount);