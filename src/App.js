import { Fragment, useState } from 'react';
import Equipo from './components/Equipo';
import Jugador from './components/Jugador';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import './app.css';

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
    <div class = 'slider'>
      <ul>
        <li>
          <img src = 'https://i.pinimg.com/originals/37/f7/13/37f713d52fe2fd8d4507c6d232e1d4e6.jpg'/>
        </li>
        <li>
          <img src = 'https://media.revistagq.com/photos/5ca5f238d71dd901aa957762/1:1/w_900,h_900,c_limit/escudos_equipos_de_futbol_979215093.jpg'/>
        </li>
        <li>
          <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlMUM1hKc82xAHgpc7K3dxLuMDHh6Mg3Gew&usqp=CAU' />
        </li>
        <li>
          <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CA_river_plate_logo.svg/1200px-CA_river_plate_logo.svg.png' />
        </li>
        <li>
          <img src = 'https://e.rpp-noticias.io/large/2016/10/01/256690foto4jpg.jpg' />
        </li>
        <li>
          <img src = 'https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_640,c_limit/v1536164765/xsdl8cbut1hso0jvt8rt.png' />
        </li>
        <li>
          <img src = 'https://i.pinimg.com/originals/d3/ce/e6/d3cee6505434459f9c5d617a7e5a0042.jpg' />
        </li>
        <li>
          <img src = 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/35.png' />
        </li>
        <li>
          <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg/1200px-Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg.png'/>
        </li>
        <li>
          <img src = 'https://2.bp.blogspot.com/-y4Fcd9Hps1M/WkASwif5TSI/AAAAAAAAHIk/7l69puPogUgP4mWyF4i4udMhZoeZOki_QCEwYBhgL/s1600/escudo_Arsenal_sarandi.png'/>
        </li>
        <li>
          <img src = 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4315.png'/>
        </li>
        <li>
          <img src = 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/54.png'/>
        </li>
      </ul>
    </div>
  </Contenedor>
  );
  
}

export default App;