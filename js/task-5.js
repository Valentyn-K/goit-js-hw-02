const checkForSpam = function (str) {
    let strToLowerCase = str.toLowerCase();
    // console.log(strToLowerCase);
    let isInTheText = ["spam", "sale"];
    // console.log(isInTheText);
    return strToLowerCase.includes(isInTheText[0]) || strToLowerCase.includes(isInTheText[1]);
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true