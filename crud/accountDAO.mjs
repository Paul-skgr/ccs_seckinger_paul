import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account){
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
};

function retrieveAccountList(deletedItem){
    if (deletedItem==true)
        return ACCOUNT_LIST.map(({creationDate, ...rest}) => rest);
    else
        return ACCOUNT_LIST;
};

function updateAccount(account){
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
    if (index !== -1) {
        ACCOUNT_LIST[index] = { ...ACCOUNT_LIST[index], ...account };
        console.log('Base de données après la mise à jour :', ACCOUNT_LIST);
    } else {
        console.error(`Compte avec id ${account.id} introuvable.`);
    }
};

function retrieveAccount(id) {
    const account = ACCOUNT_LIST.find(account => account.id === id);
    if (account) {
        const { firstName, lastName, ...rest } = account;
        const name = `${firstName} ${lastName}`;
        return { ...rest, name }; 
    }
    return null;
}

export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount,
  retrieveAccount,
};

