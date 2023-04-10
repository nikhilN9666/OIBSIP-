// Selecting the DOM elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinCheckbox = document.getElementById("kelvin");
const resultElement = document.getElementById("result");

// Adding an event listener to the convert button
document.getElementById("convertBtn").addEventListener("click", () => {
    // Reading the input values and converting them to numbers
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);

    // Checking if the input values are valid numbers
    if (isNaN(celsius) && isNaN(fahrenheit)) {
        resultElement.textContent = "Please enter a valid temperature";
        return;
    }

    // Converting the temperature from Celsius to Fahrenheit or vice versa
    let convertedTemperature;
    if (!isNaN(celsius)) {
        convertedTemperature = celsius * 9 / 5 + 32;
    } else {
        convertedTemperature = (fahrenheit - 32) * 5 / 9;
    }

    // Checking if the checkbox to convert to Kelvin is checked
    if (kelvinCheckbox.checked) {
        convertedTemperature += 273.15;
        resultElement.textContent = convertedTemperature.toFixed(2) + " K";
    } else {
        resultElement.textContent = convertedTemperature.toFixed(2) + " °" + (isNaN(celsius) ? "C" : "F");
    }
});
