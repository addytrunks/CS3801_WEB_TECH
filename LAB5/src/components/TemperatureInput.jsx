function TemperatureInput({temperature,onTemperatureChange,fahrToCelc}){
    console.log(temperature)
    return (
        <>
            <input type="number" disabled={true} placeholder="Enter the temperature in celsius" value={Number(temperature).toFixed(1)} onChange={onTemperatureChange}/>
            <span><b>{fahrToCelc ? "C" : "F"}</b></span>
        </>
    )
}

export default TemperatureInput;