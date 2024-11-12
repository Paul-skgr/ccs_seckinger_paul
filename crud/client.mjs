import { accountService } from "./accountService.mjs";
import { accountDAO } from "./accountDAO.mjs";


const account = accountService.addAccount("paul", "seckinger");
console.log(accountService.getAccountList());
