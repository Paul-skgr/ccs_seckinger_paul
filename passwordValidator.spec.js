const isValidpassword= require('./passwordValidator.js');

test ('Password length 8', ()=>{
    const passwrd="azertyuiop1";
    const isValid =isValidpassword(passwrd);
    expect(isValid).toBe(true);
});

test ('Password length 8', ()=>{
    const passwrd="ffh";
    const isValid =isValidpassword(passwrd);
    expect(isValid).toBe(false);
});
