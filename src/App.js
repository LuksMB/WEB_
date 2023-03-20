import './App.css';

// import MeusDados from './Atividade00/02MeusDados';
// function App() {
//   return (
//     <div className='a'>
//       <MeusDados 
//       nome="Lucas Maurício Braga"
//       curso="Sistemas de Informação"
//       universidade="UFC - Campus Quixadá"
//       />
//     </div>
//   );
// }

import Temperatura from './Atividade00/03Temperatura';
function App() {
  return (
    <div className='a'>
      <Temperatura 
      c="83"
      f="62"
      k="25"
      />
    </div>
  );
}

export default App;
