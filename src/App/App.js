import './App.css';
import PlayerListTable from '../Components/PlayerList/PlayerListTable';
import players from '../data/players';
import Root from '../Components/Root/Root';
import {Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path='/players-list' element={<PlayerListTable players={players} title="Top Value"/>}/>
  </Route>
));


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
