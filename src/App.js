import './App.css';
import PlayerListTable from './Components/PlayerList/PlayerListTable';
import players from './data/players';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Fantasy Liga Uruguaya</h1>
      <div className='list_container'>
        <PlayerListTable players={players} title="Top Value"/>
        <PlayerListTable players={players} title="Top Price"/>
      </div>
    </div>
  );
}

export default App;
