function isValidpassword(password){
    const length = password.length >= 8;
    const hasdigit = /\d/.test(password); 

    return length && hasdigit;
}

module.exports = isValidpassword;




