function retrieveBalance() {
    console.log("retrieveBalance");
}

function debitAccount (accountId, amount){
    console.log("debit de ${amount} à ${accountId}");
}


const bankDAO ={
    retrieveBalance,
    debitAccount,
};

module.exports={bankDAO};
