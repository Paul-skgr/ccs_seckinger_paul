const {bankDAO} =require('./bankDAO.js');
const {bankTransfer}=require('./bankTransfer.js');


function getBalance(idAccount){
    return bankDAO.retrieveBalance(idAccount);
};

async function transferMoney(accountId, amount){
    bankTransfer.transfer(accountId, amount).then(()=>{
        bankDAO.debitAccount(accountId,amount);
        console.log("transfering ${amount} to ${accountId}");
    })
    console.error("not transferred");
    //return bankTransfer.transfer(accountId, amount);
}
const bank ={
    getBalance,
    transferMoney,
};
module.exports={bank};