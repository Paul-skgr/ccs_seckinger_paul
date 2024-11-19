import { Account } from "./account.mjs";
import { commandDAO } from "./accountCommandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { Event } from "./event.mjs";
import { eventStore } from "./eventStore.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    const accountAdded= new Event("accountAdded", account.id, account, null);
    eventStore.addEvent(accountAdded);
    accountCache[account.id] = {
        id: account.id,
        name: `${firstName} ${lastName}`,
    };
}



function saveAccount(id,  lastName, firstName){
    const newAccountData = accountQuery.getAccount(id);
    const accountAdded= new Event("accountUpdated", newAccountData.id, newAccountData, null);
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