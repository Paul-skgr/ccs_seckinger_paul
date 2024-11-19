import { Account } from "./account.mjs";
import { commandDAO } from "./accountCommandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";


function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    commandDAO.insertAccount(account, ACCOUNT_LIST);
    const queryAccount = { lastName, firstName };
    commandDAO.insertAccount(queryAccount, queryDatabase);
    accountCache[account.id] = {
        id: account.id,
        name: `${firstName} ${lastName}`,
    };
}



function saveAccount(id,  lastName, firstName){
    const newAccountData = accountQuery.getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    const queryAccount = { lastName, firstName };
    console.log("yo", newAccountData);
    accountCache[id] = {
        id: id,
        name: `${firstName} ${lastName}`,
    };
    return commandDAO.updateAccount(id , newAccountData, ACCOUNT_LIST), commandDAO.updateAccount(id, queryAccount, queryDatabase);
    
}



export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand