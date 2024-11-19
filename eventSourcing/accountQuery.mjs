import { queryDAO } from "./accountQueryDAO.mjs";

function getAccountList(deletedItem){
    return queryDAO.retrieveAccountList(deletedItem);
}

function getAccount(id){
    return queryDAO.retrieveAccount(id);
}



export const accountQuery = {
    getAccountList,
    getAccount,
}

export default accountQuery