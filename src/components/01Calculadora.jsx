const Calculadora = () => {
    
    const somar = (x, y) => {
        return x + y;
    }

    const subtrair = (x, y) => {
        return x - y;
    }

    const multiplicar = (x, y) => {
        return x * y;
    }

    const dividir = (x, y) => {
        return x / y;
    }
    
    return (
        <div>
            <h3>O resultado da soma é: {somar(6, "&onibus")}</h3>
            <h3>O resultado da subtração é: {subtrair(6, 2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(6, subtrair(6, 2))}</h3>
            <h3>O resultado da divisão é: {dividir(6, 3)}</h3>
        </div>
    )
}

export default Calculadora;