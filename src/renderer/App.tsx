/* eslint-disable prettier/prettier */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import ButtonReutilizable from './views/Home';

function App() {
  const titulo = 'Clase de POEC';

  return (
    <div className="App">
      <img src={icon} alt="icon" />
      <h1>{titulo}</h1>
      <ButtonReutilizable name='Classroom' link='https://classroom.google.com/u/2/c/Mjg0MDIzNjg3MTQ4' />
      <ButtonReutilizable name='GitHub' link='https://github.com/profeEsteban/music-player-electron-react' />
    </div>
  );
}

export default App;
