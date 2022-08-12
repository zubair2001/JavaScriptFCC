function rot13(str) {
    let finalResult = "";
    let alphabetStart = "abcdefghijklm".toUpperCase();
    let alphabetEnd = "nopqrstuvwxyz".toUpperCase();

    str.split("").forEach(function(letterToDecode) {
        let alphabetStartIndex = alphabetStart.indexOf(letterToDecode);
        let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode);

        if (alphabetStartIndex >= 0) {
            finalResult += alphabetEnd[alphabetStartIndex];
        } else if (alphabetEndIndex >= 0) {
            finalResult += alphabetStart[alphabetEndIndex];
        } else {
            finalResult += letterToDecode;
        }
    });
    return finalResult;
}

rot13("SERR PBQR PNZC");