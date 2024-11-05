function isValidpassword(password){
    const length = password.length >= 8;
    const hasdigit = /\d/.test(password);
    const hasletter = /[a-zA-Z]/.test(password); 

    return length && hasdigit && hasletter;
}

module.exports = isValidpassword;




