$(document).ready(function() {
    setUp();
});

var setUp = function() {
    $(".number").on('click', displayNumber);
    $(".operator").on('click', displayOperator);
    $("#equals").on('click', doMath);

    function displayNumber(e) {
        // TODO : implement function
    }

    function displayOperator(e) {
        // TODO : implement function
    }

    function doMath() {
        var accumulator;
        displayArr = $("#display").text().split(" ");
        displayArr.forEach(function(current,i,arr){
            if (!accumulator) {
                accumulator = current;
            } else {
                switch (current) {
                    case "C":
                        // TODO : clear display value (reset to empty string)
                        break;
                    case "-":
                        // TODO : assign accumulator correct value
                        break;
                    case "+":
                        // TODO : assign accumulator correct value
                        break;
                    case "/":
                        // TODO : assign accumulator correct value
                        break;
                    case "X":
                        // TODO : assign accumulator correct value
                        break;
                    default :
                        break;
                }
            }
        })
        /*
         Assigns accumulated value to the display (e.g. displays result of 
         operation)
        */
        $("#display").text(accumulator)
    }
    
    function wipeAll() {
        $("#display").text("");
    };

    function subtraction(number, result) {
        return result - parseFloat(number);
    };
    function addition(number, result) {
        return result + parseFloat(number);
    };
    function division(number, result) {
        return result / parseFloat(number);
    };
    function multiplication(number, result) {
        return result * parseFloat(number);
    };

};
