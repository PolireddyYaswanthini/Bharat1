const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertCtoFBtn = document.getElementById("convertCtoF");
const convertFtoCBtn = document.getElementById("convertFtoC");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const celsiusResult = document.getElementById("celsiusResult");

convertCtoFBtn.addEventListener("click", convertCtoF);
convertFtoCBtn.addEventListener("click", convertFtoC);

function convertCtoF() {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitConverted = (celsiusValue * 9/5) + 32;
        fahrenheitResult.textContent = fahrenheitConverted.toFixed(2) + " °F";
    } else {
        fahrenheitResult.textContent = "Invalid input";
    }
}

function convertFtoC() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusConverted = (fahrenheitValue - 32) * 5/9;
        celsiusResult.textContent = celsiusConverted.toFixed(2) + " °C";
    } else {
        celsiusResult.textContent = "Invalid input";
    }
}
