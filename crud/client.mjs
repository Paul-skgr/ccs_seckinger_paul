import { accountService } from "./accountService.mjs";
import { accountDAO } from "./accountDAO.mjs";

import { ACCOUNT_LIST } from "./database.mjs";

const account = accountService.addAccount("paul", "seckinger");
console.log(accountService.getAccountList());

console.log(accountService.saveAccount(account.id, "lastName", "firstName"));