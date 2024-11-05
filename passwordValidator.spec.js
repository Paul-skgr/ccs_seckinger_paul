const isValidpassword= require('./passwordValidator.js');

test ('Password length 8', ()=>{
    const passwrd="azertyuiop1";
    const isValid =isValidpassword(passwrd);
    expect(isValid).toBe(true);
});

test ('Password has at least 1 digit', ()=>{
    const passwrd1="azerty1uiop";
    const passwrd="azertyuiop";
    const isValid =isValidpassword(passwrd1);
    expect(isValid).toBe(true);
    const isValid1 =isValidpassword(passwrd);
    expect(isValid1).toBe(false);
});


test ('Password has at least 1 letter', ()=>{
    const passwrd1="azerty1uiop";
    const passwrd="1582687";
    const isValid =isValidpassword(passwrd1);
    expect(isValid).toBe(true);
    const isValid1 =isValidpassword(passwrd);
    expect(isValid1).toBe(false);
});