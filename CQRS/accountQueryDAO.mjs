import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

function retrieveAccountList(deletedItem){
    if (deletedItem == "creationDate"){
        return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
    }
    else{
        return queryDatabase;
        
    }
}

function retrieveAccount(searchId) {
    if (accountCache[searchId]) {
        return accountCache[searchId];
    }
    const account = ACCOUNT_LIST.find(({ id }) => id === searchId);
    if (account) {
        return {
            id: account.id,
            name: `${account.firstName} ${account.lastName}`,
            creationDate: account.creationDate,
        };
    }
    return null;
}

export const queryDAO = {
    retrieveAccount,
    retrieveAccountList,
}