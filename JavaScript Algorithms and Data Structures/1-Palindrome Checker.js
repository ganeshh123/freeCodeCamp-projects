function palindrome(str) {

    var array = str.split("");
    var alphaRegex = /[a-z]|[A-Z]|[0-9]/;

    var array2 = [];
    for (i = 0; i < array.length; i++) {
        if (alphaRegex.test(array[i])) {
            array2.push(array[i].toLowerCase());
        }
    }

    array = array2.map((x) => (x));

    array2.reverse();
    if (array.toString() === array2.toString() === true) {
        return true;
    } else {
        return false;
    }
}