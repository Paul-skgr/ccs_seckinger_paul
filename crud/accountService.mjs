import { accountDAO } from "./accountDAO.mjs";
import { Account } from "./account.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    accountDAO.insertAccount(account);
};


function getAccountList(){
    return accountDAO.retrieveAccountList(false);
};

export const accountService = {
  addAccount,
  getAccountList,
  saveAccount(id, lastName, firstName) {},
  getAccount(id) {},
};
