import { accountDAO } from "./accountDAO.mjs";
import { Account } from "./account.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    accountDAO.insertAccount(account);
};

export const accountService = {
  addAccount,
  getAccountList() {},
  saveAccount(id, lastName, firstName) {},
  getAccount(id) {},
};

