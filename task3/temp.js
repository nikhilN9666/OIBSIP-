// get the input elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinCheckbox = document.getElementById("kelvin");
const convertBtn = document.getElementById("convertBtn");
const resultOutput = document.getElementById("result");

// add an event listener to the convert button
convertBtn.addEventListener("click", function() {
  // check if the celsius input is not empty
  if (celsiusInput.value !== "") {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsius * 1.8 + 32;
    const kelvin = celsius + 273.15;
    if (kelvinCheckbox.checked) {
      // convert to kelvin
      resultOutput.innerHTML = `${celsius} &#8451; = ${kelvin.toFixed(2)} K`;
    } else {
      // convert to fahrenheit
      resultOutput.innerHTML = `${celsius} &#8451; = ${fahrenheit.toFixed(2)} &#8457;`;
    }
  } else if (fahrenheitInput.value !== "") {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) / 1.8;
    const kelvin = (fahrenheit + 459.67) * 5 / 9;
    if (kelvinCheckbox.checked) {
      // convert to kelvin
      resultOutput.innerHTML = `${fahrenheit} &#8457; = ${kelvin.toFixed(2)} K`;
    } else {
      // convert to celsius
      resultOutput.innerHTML = `${fahrenheit} &#8457; = ${celsius.toFixed(2)} &#8451;`;
    }
  } else {
    // show an error message if both inputs are empty
    resultOutput.innerHTML = "Please enter a value";
  }
});
