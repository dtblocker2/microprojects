function convertTemperature(value, from, to) {
    if (isNaN(value)) {
        return "Please enter a valid number.";
    }

    let tempInCelsius;
    switch (from) {
        case 'Celsius':
            tempInCelsius = value;
            break;
        case 'Kelvin':
            tempInCelsius = value - 273.15;
            break;
        case 'Fahrenheit':
            tempInCelsius = (value - 32) * (5 / 9);
            break;
        default:
            return "Invalid source unit.";
    }

    let result;
    switch (to) {
        case 'Celsius':
            result = tempInCelsius;
            break;
        case 'Kelvin':
            result = tempInCelsius + 273.15;
            break;
        case 'Fahrenheit':
            result = (tempInCelsius * 9 / 5) + 32;
            break;
        default:
            return "Invalid target unit.";
    }

    return result.toFixed(2);
}

function convert() {
    const value = parseFloat(document.getElementById('temp_input').value);
    const fromUnit = document.getElementById('convert_from').value;
    const toUnit = document.getElementById('convert_to').value;

    const result = convertTemperature(value, fromUnit, toUnit);
    alert(`Converted Temperature: ${result}`);
}

document.getElementById('convert_btn').addEventListener('click', convert);


/** NOTE:
 * if i use 
 *  document.getElementById('convert_btn').addEventListener('click',convert())
 * 
 * then the function convert() is automatically called on start of doc
 */