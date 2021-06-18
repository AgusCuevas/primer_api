import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Equipo from './Equipo';

const Jugador = ({ jugadores}) => {
    return ( 
    <Fragment>
        <div align="center"  class="card border-success mb-3" style="max-width: 88rem;" style= {
            {
                margin: "2rem",
                padding: "3rem",
                borderRadius: ".9rem",
                backgroundColor: '#E5E8E8' ,
                maxWidth: "800px",
                color: "black",
                
            }
        }>
            {
                jugadores.length === 0
                ?
                <p>No se encuentran jugadores</p>
                :
                <h6> <h6 class = 'oracionJugador'>• Nombre: </h6> {jugadores.player_name} <h6 class = 'oracionJugador'>Numero:</h6> {jugadores.player_number}</h6>
            } 
        </div>
        </Fragment>
     );
}
 
export default Jugador;