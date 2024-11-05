function isValidpassword(password){
    const isLengthValid = password.length >= 8;
    return isLengthValid
}

module.exports = isValidpassword;