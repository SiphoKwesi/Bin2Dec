(function () {
        "use strict";

let input = document.getElementById("input");
let output = document.getElementById("output");
let myConvertBtn = document.getElementsByClassName("button-convert");
let myResetBtn = document.getElementsByClassName("button-reset");
let parsed;

function convert(){
        //calculate the decimal value
        parsed = parseInt(input.value, 2);
        //return parsed
        display(parsed);
} 

function display(x) {
        output.value = x;
        return output.value;
}

function reset(){
        input.value = "0";
        output.value = "0";
}

myConvertBtn[0].addEventListener("click", convert);
myResetBtn[0].addEventListener("click", reset);

})();
