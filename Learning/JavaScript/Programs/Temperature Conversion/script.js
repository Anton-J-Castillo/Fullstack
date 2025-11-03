const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

function convert(){
    
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp *9 / 5 + 32;
        result.textContent = `Temperature in Fahrenheit: ${temp.toFixed(1)} °F`;
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `Temperature in Celsius: ${temp.toFixed(1)} °C`;
    }
    else{
        result.textContent = "Please select a conversion option.";
    }

}