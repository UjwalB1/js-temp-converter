const textBox = document.getElementById("textBox");
const toCelcius = document.getElementById("toCelcius");
const toFarenheit = document.getElementById("toFarenheit");
const convertedTemp = document.getElementById("convertedTemp");
let temp;

function convert() {
    if(toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9);
        convertedTemp.textContent = `${temp.toFixed(1)} ° C`

    }
    else if(toFarenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9/5) +32;
        convertedTemp.textContent = `${temp.toFixed(1)} ° F`
    }
    else{
        convertedTemp.textContent = "Select a unit";
    }
}
