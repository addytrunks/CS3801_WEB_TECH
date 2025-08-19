function TemperatureDisplay({ fahrToCelc, temperature }) {

    // Converting celsius to fahrenheit
    let var_temperature;
    if (fahrToCelc) {
        var_temperature = ((temperature * 9) / 5) + 32;
    } else {
        var_temperature = ((temperature - 32) * 5) / 9;
    }

    return (
        <>
            {fahrToCelc ? (
                <h2>Fahrenheit: {Number(var_temperature).toFixed(1)} F</h2>
            ) : (

                <h2>Celsius: {Number(var_temperature).toFixed(1)} C</h2>
            )}
        </>
    )
}

export default TemperatureDisplay;