
(function () {
        "use strict";

let input = document.getElementById("input");
let output = document.getElementById("output");
let myBtn = document.getElementsByClassName("button-convert");
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

myBtn[0].addEventListener("click", convert);
})();