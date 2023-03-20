import Clock from './Clock';

let name = "Mundo";
let cumprimento = "Saudações"

const HelloWorld = () => {
    return(
        <div className="App"> 
            <h1>{cumprimento}, {name}!</h1>
            <h2>Welcome to my "first" react app :P</h2>
            <Clock/>
        </div>
    )
    
};

export default HelloWorld;