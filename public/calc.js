$(document).ready(function() { // needed if you want to place script just above the </head>
    console.log("loaded");
    setUp();
});

var setUp = function() {  // deleted a bunch of code, need to rework



    var numberFromCalculation = function() { //calculated result(number(s))

        var decimal = 0.0;
        var result = 0;
        var errorMessage = "Cannot compute";

        var showNumbers = $("#display").text().split(" ");
        showNumbers.forEach(function(value, index, array) {
            if (index === 0) {
                result = value;
            }
            if (index % 2 === 0) {
                return;
            } else {
                switch (value) {

                    case "-":
                        result = subtraction(total, array[index + 1]);
                        break;

                    case "+":
                        result = addition(total, array[index + 1]);
                        break;
                    case "/":
                        result = division(total, array[index + 1]);
                        break;
                    case "*": //check later
                        result = multiplication(total, array[index + 1]);
                        break;
                    default:
                    "Cannot compute"
                    break;
                }

            }
        })
        $("#display").text(result)
    };
    var wipeAll = function() {
        $("#display").text("");
    };


    var subtraction = function(number, result) {
        return result = result - parseFloat(number);
    };
    var addition = function(number, result) {
        return result = result + parseFloat(number);
    };
    var division = function(number, result) {
        return result = result / parseFloat(number);
    };
    var multiplication = function(number, result) {
        return result = result * parsefloat(number);
    };





};
