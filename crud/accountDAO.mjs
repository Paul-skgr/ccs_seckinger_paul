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



export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount(account) {},
  retrieveAccount(id) {},
};

