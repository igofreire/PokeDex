import React from 'react';
import './App.css';
import logo from './logo.png';
import Cards from './components/Cards';
import Pokeinfor from "./components/pokeInfor";


function App() {
    return (
        <div>
            <nav className="navBar">
                <img id="logo" src={logo} alt="" />
            </nav>
            <div className="App container">
                <div className="col-sm-12">
                    <input type="texs" className="buscaPokemon col-sm-6" id="buscaPokemon" placeholder="Digite o ID ou o nome do Pokemon:"></input>
                </div>
                <Cards />
                <Pokeinfor />
            </div>
        </div>
    );
}

export default App;