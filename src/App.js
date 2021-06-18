import { Fragment, useState } from 'react';
import Equipo from './components/Equipo';
import Jugador from './components/Jugador';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import './app.css'

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
      setJugadores(jugadores.result[0].players[0]);
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <Fragment>
    <Container>
      <Row>
        <Col>
        </Col>
        <Col>
          <h3 class = 'titulo'>Equipos de Futbol</h3>
        </Col>
        <Col>
        </Col>
      </Row>
          <div
            style={
              {
                paddingTop:"100px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }
          }>
      <Row>
      <Col>
      <button class = 'boton' type="button" class="btn btn-success"
      variant="light"
      onClick={consultarAPI}
      >Buscar equipo Aleatorio
      </button>
      </Col>
      </Row>
      <Row>
        <Col>
        <h6 class = 'subtitulo'>Equipo:</h6>
        <Equipo
        equipo = {equipo}
        />
        </Col>
      <Col>
      </Col>
      <Col> 
      <h6 class = 'subtitulo'>Un jugador del equipo:</h6>
        <Jugador
          jugadores = {jugadores}
        />
      </Col>
      </Row>
      <Row>
      </Row>
    </div>
    </Container>
    </Fragment>
  
  );
  
}

export default App;