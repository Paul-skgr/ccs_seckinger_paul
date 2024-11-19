import { Account } from "./account.mjs";
import { commandDAO } from "./accountCommandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    commandDAO.insertAccount(account);
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = accountQuery.getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    console.log("yo", newAccountData);
    return commandDAO.updateAccount(id , newAccountData);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand