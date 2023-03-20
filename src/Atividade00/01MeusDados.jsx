import React from "react";

//Function

// function MeusDados() {
//     return(
//         <div className="q1">
//             <h1>Nome: Lucas Maurício Braga</h1>
//             <h1>Curso: Sistemas de Informação</h1>
//             <h1>Universidade: UFC</h1>
//         </div>
//     )
// }

//Arrow Function com return

// const MeusDados = () => {
//     return(
//         <div className="q1">
//             <h1>Nome: Lucas Maurício Braga</h1>
//             <h1>Curso: Sistemas de Informação</h1>
//             <h1>Universidade: UFC</h1>
//         </div>
//     )
// }

//Arrow Function sem return

// const MeusDados = () => (
//         <div className="q1">
//             <h1>Nome: Lucas Maurício Braga</h1>
//             <h1>Curso: Sistemas de Informação</h1>
//             <h1>Universidade: UFC</h1>
//         </div>
// )

//Classe

class MeusDados extends React.Component{
    render() {
        return(
            <div className="q1">
                <h1>Nome: Lucas Maurício Braga</h1>
                <h1>Curso: Sistemas de Informação</h1>
                <h1>Universidade: UFC</h1>
            </div>
        )
    }
}

export default MeusDados;