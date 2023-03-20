const Temperatura = (props) => {
    
    const celsiusParaFahrenheit = (c) => {
        return (((9 * c) + 160) / 5);
    }

    const fahrenheitParaCelsius = (f) => {
        return ((f - 32) * 5) / 9;
    }

    const kelvin = (k) => {
        let kToCelsius = k -273.15;
        let kToFahrenheit = ((k - 273.15) * (9/5)) + 32;  
        return {
            kToCelsius,
            kToFahrenheit
        };
    }

    return(
        <div className="q1">
            <h1>Celsius para Fahrenheit: {props.c} --> {celsiusParaFahrenheit(Number(props.c)).toFixed(2)}</h1>
            <h1>Fahrenheit para Celsius: {props.f} --> {fahrenheitParaCelsius(Number(props.f)).toFixed(2)}</h1>
            <h1>Kelvin para Celsius: {props.k} --> {kelvin(Number(props.k)).kToCelsius.toFixed(2)}</h1>
            <h1>Kelvin para Fahrenheit: {props.k} --> {kelvin(Number(props.k)).kToFahrenheit.toFixed(2)}</h1>
        </div>
    )
}

export default Temperatura;