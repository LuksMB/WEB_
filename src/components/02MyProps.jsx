const MyProps = (props) => {

    const renderizar = (nome) => {
        return(
            <span>{nome}</span>
        )
    }

    return (
        <div>
            <h1>O meu nome é {renderizar(props.name)}, tenho {props.age} anos e curso {props.course}</h1>
        </div>
    )
}

export default MyProps;