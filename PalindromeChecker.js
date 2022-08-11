function palindrome(str) {
    let cleanString = str.replace(/\W|_/g, "").toLowerCase();
    let reverseString = cleanString.split("").reverse().join("");
    // console.log(cleanString,reverseString);
    if (cleanString != reverseString) {
        return false;
    }
    return true;
}

palindrome("eye");