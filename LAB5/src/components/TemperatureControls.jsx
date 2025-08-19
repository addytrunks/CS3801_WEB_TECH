function TemperatureControls({onIncrease,onDecrease}) {
    return (
        <>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    )
}

export default TemperatureControls;