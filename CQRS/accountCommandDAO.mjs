import { ACCOUNT_LIST } from "./database.mjs";

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

export const commandDAO = {
    insertAccount,
    updateAccount
}