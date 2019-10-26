function rot13(str) {

    var array = str.split("");

    var resultArray = [];

    array.forEach(function(character) {
        var charCode = character.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            if (charCode <= 77) {
                resultArray.push(String.fromCharCode(charCode + 13));
            } else {
                resultArray.push(String.fromCharCode(charCode + 13 - 26));
            }
        } else {
            resultArray.push(character);
        }
    })


    var result = resultArray.join("");

    return result;
}