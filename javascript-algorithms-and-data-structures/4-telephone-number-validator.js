function telephoneCheck(str) {

    var result;

    var regEx = /^1?\s?((\(\d\d\d\))|(\d\d\d))\s?\-?\d\d\d-?\s?\d\d\d\d$/;


    return regEx.test(str);
}