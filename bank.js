const {bankDAO} =require('./bankDAO.js');

function getBalance(idAccount){
    return bankDAO.retrieveBalance(idAccount);
};
const bank ={
    getBalance,
};
module.exports={bank};