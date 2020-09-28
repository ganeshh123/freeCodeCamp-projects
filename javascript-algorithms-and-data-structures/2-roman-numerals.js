function convertToRoman(num) {

    var result = "";
    var remainder = num;
    var i;

    var mCount = Math.floor(remainder / 1000);
    for (i = 0; i < mCount; i++) {
        result += "M";
    }
    remainder = remainder % 1000;

    var dCount = Math.floor(remainder / 500);
    for (i = 0; i < dCount; i++) {
        if (remainder >= 900) {
            result += "CM";
            remainder = remainder - 900;
            break;
        }
        result += "D";
    }
    remainder = remainder % 500;

    var cCount = Math.floor(remainder / 100);
    for (i = 0; i < cCount; i++) {
        if (remainder >= 400) {
            result += "CD";
            remainder = remainder - 400;
            break;
        }
        result += "C";
    }
    remainder = remainder % 100;

    var lCount = Math.floor(remainder / 50);
    for (i = 0; i < lCount; i++) {
        if (remainder >= 90) {
            result += "XC";
            remainder = remainder - 90;
            break;
        }
        result += "L";
    }
    remainder = remainder % 50;

    var xCount = Math.floor(remainder / 10);
    for (i = 0; i < xCount; i++) {
        if (remainder >= 40) {
            result += "XL";
            remainder = remainder - 40;
            break;
        }
        result += "X";
    }
    remainder = remainder % 10;

    var vCount = Math.floor(remainder / 5);
    for (i = 0; i < vCount; i++) {
        if (remainder >= 9) {
            result += "IX";
            remainder = remainder - 4;
            break;
        }
        result += "V";
    }
    remainder = remainder % 5;


    var iCount = Math.floor(remainder / 1);
    for (i = 0; i < iCount; i++) {
        if (iCount >= 4) {
            result += "IV";
            break;
        }
        result += "I";
    }


    return result;
}