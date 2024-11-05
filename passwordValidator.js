function isValidpassword(password){
    const isLengthValid = password.length >= 8;
    const hasdigit = /\d/.test(password);
    const hasletter = /[a-zA-Z]/.test(password); 

    return isLengthValid && hasdigit && hasletter;
}

module.exports = isValidpassword;