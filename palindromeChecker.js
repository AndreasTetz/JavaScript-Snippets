function palindrome(str) {
  var nettoStr = str.toLowerCase().replace(/\W|_/g,"");
  var reversedStr = nettoStr.split("").reverse().join("");
  if (nettoStr == reversedStr) {
    return true;
  } else {
    return false;
  }

}

palindrome("eye");
