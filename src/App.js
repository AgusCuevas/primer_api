import { Fragment, useState } from 'react';
import Equipo from './components/Equipo';
import Jugador from './components/Jugador';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import './app.css'

  const Contenedor  = styled.div` 
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-color: #474747;
`;


function App() {
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  const [equipo, setEquipo] = useState({});
  const [jugadores, setJugadores] = useState ([]);

  let key = 'fafbda535b1c178689a4ca5d6a6090b135adf86a97456d2446b3682d5e6f3c37'
  const consultarAPI = async () => {
    let idEquipo = Math.floor(Math.random()*(0,3000))
    try{
      const api = await fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`);
      const equipo = await api.json();
      setEquipo(equipo.result[0]);
      } catch (error) {
        console.log(error);
    }
    try{
      const api = await fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`);
      const jugadores = await api.json();
      if(jugadores.result[0].players.length > 0){
        setJugadores(jugadores.result[0].players)
      }
      else{
        setJugadores([])
      }
      } catch (error) {
        console.log(error);
      }
  };

  return (
  <Contenedor>
    < Header titulo= 'Equipos de Futbol' />
    <p></p>
    <button class = 'boton' type="button" class="btn btn-success" 
    variant="light"
    onClick={consultarAPI}
    >Buscar equipo Aleatorio
    </button>
    <p></p>
    <Equipo
    equipo = {equipo}
    />
    <Jugador
    jugadores = {jugadores}
    />
    <p>.</p>
  </Contenedor>
  );
  
}

export default App;