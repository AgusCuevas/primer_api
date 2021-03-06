import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Equipo from './Equipo';

const Jugador = ({ jugadores}) => {

    // Utilizamos la funcion para hacer un map de todos los jugadores del equipo.
    // De ellos utilizamos el numero, nombre y la posicion en la que juega
    // Con el map, para cada jugador, creamos un parrafo con la informacion mencionada anteriormente
    // Si el equipo no tiene jugadores se muestra un parrafo que lo indica.
    function armarLista(jugadores){
        if (jugadores == []){
        return (<p>No se encuentran jugadores</p>)
        }
        else{
            return (jugadores.map(jugador => <p>{jugador.player_number} - {jugador.player_name} - {jugador.player_type}</p>))
        }
        }
    return ( 
    <Fragment>
        <div align="center"  class="card border-success mb-3" style="max-width: 88rem;" style= {
            {
                margin: "2rem",
                backgroundColor: '#E5E8E8' ,
                color: "black",
                borderTopWidth: '3px',
                borderRightWidth:'3px',
                borderLeftWidth: '3px',
                borderBottomWidth: '3px',
            }
        }>
            <div className = 'contenedorSecundario'> Lista de jugadores </div>
            <p></p>
            {
                jugadores.length == 0
                ?
                <div>
                    <p></p>
                    No se encuentran jugadores
                    <p></p>
                </div>
                :
                <div>
                    <p>{armarLista(jugadores)}</p>
                </div>
            }  
        </div>
        </Fragment>
     );
}
 
export default Jugador;