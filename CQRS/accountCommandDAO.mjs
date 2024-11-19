import { ACCOUNT_LIST } from "./database.mjs";
import { accountCache } from "./cache.mjs";

function insertAccount(account){
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
    
}

function updateAccount(searchId, newAccountData){
    return ACCOUNT_LIST.map(({ id }) => {
        if (id === searchId) {
            return { id: { ...id, ...newAccountData } };
        }
        return {newAccountData};
    });
}


function getAccountById(searchId) {
    return ACCOUNT_LIST.find(({ id }) => id === searchId);
}


export const commandDAO = {
    insertAccount,
    updateAccount,
    getAccountById,
}