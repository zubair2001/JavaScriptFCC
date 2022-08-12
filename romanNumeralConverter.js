function convertToRoman(num) {
    const numericals = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    let romanNum = "";
    const decimalKeys = Object.keys(numericals).reverse();

    decimalKeys.forEach(key => {
        while (key <= num) {
            romanNum += numericals[key];
            num -= key;
        }
    });
    //  console.log(romanNum);
    return romanNum;
}

convertToRoman(36);