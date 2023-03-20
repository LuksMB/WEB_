const MeusDados = (props) => {
    return(
        <div className="q1">
            <h1>{props.nome}</h1>
            <h1>{props.curso}</h1>
            <h1>{props.universidade}</h1>
        </div>
    )
}

export default MeusDados;