import './App.css';
import PlayerListTable from './Components/PlayerList/PlayerListTable';
import players from './data/players';
import Header from './Components/Header/Header';

const fotoUsuario = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png';

function App() {
  return (
    <div className="App">
      <Header usuarioLogueado={true} fotoUsuario={fotoUsuario} nombreUsuario={'Morasito'}/>
      <div className='list_container'>
        <PlayerListTable players={players} title="Top Value"/>
      </div>
    </div>
  );
}

export default App;
