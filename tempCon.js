document.getElementById("btnConvert").addEventListener("click", function () {
    const celsiusConversion = () => (document.getElementById('tempInput').value - 32) * 5 / 9 ;
    const fahrenheitConversion = () => (document.getElementById('tempInput').value * 9 / 5 + 32) ;
    if (document.getElementById('tempCon1').value == "Fahrenheit" && document.getElementById('tempCon2').value == "Celsius") {
        document.getElementById('convertedTemp').innerHTML = celsiusConversion();
    } else if (document.getElementById('tempCon2').value == "Fahrenheit" && document.getElementById('tempCon1').value == "Celsius") {
        document.getElementById('convertedTemp').innerHTML = fahrenheitConversion();
    } else {
        console.log("Take Proper Conversion Option...!");
    }
});

