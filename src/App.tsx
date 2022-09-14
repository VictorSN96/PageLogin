import {useContext} from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Consulta } from './pages/Consulta';
import { RequireAuth } from './contexts/Auths/RequireAuth';
import { AuthContext } from './contexts/Auths/AuthContext';


const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () =>{
    await auth.signout();
    navigate('/');

  }
  
  return (
    <div className="App">
      <header>
        <h1>Satel HelpDesk </h1>
        <nav>
          <Link to= "/"> Home </Link>
          <Link to= "/consulta "> Consulta de Tickets </Link>
          {auth.user && <button onClick={handleLogout}> Sair </button >}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path= "/" element ={<Home />}/>     
        <Route path= "/consulta" element ={<RequireAuth><Consulta /></RequireAuth>}/>     
      </Routes>

    </div>
  );
}

export default App;
