import { accountDAO } from "./accountDAO.mjs";
import { Account } from "./account.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    accountDAO.insertAccount(account);
    return account;
};


function getAccountList(){
    return accountDAO.retrieveAccountList(false);
};

function saveAccount(id, lastName, firstName){
    const account = accountDAO.retrieveAccountList(true).find(acc => acc.id === id);
    account.lastName=lastName;
    account.firstName=firstName;
    accountDAO.updateAccount(account);
};


function getAccount(id) {
    return accountDAO.retrieveAccount(id); 
};

export const accountService = {
  addAccount,
  getAccountList,
  saveAccount,
  getAccount,
};
