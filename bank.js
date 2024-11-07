const {bankDAO} =require('./bankDAO.js');
const {bankTransfer}=require('./bankTransfer.js');


function getBalance(idAccount){
    return bankDAO.retrieveBalance(idAccount);
};

function transferMoney(accountId, amount){
    bankDAO.debitAccount(accountId,amount);
    return bankTransfer.transfer(accountId, amount);
}
const bank ={
    getBalance,
    transferMoney,
};
module.exports={bank};