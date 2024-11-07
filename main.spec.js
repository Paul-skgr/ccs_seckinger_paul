const {bankDAO} = require ('./bankDAO.js');

const {bank}= require ('./bank.js');

test("Should be called but not executed", () => {
    const idAccount=123;
    const expectedBalance=100;
    
    jest.spyOn(bankDAO, "retrieveBalance").mockReturnValue(expectedBalance);
    
    const balance = bank.getBalance(idAccount);

    expect(jest.spyOn(bankDAO, "retrieveBalance")).toHaveBeenCalledWith(idAccount);
    
    expect(balance).toBe(expectedBalance);
});