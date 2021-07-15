import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Equipo from './Equipo';
import { Opacity } from '@material-ui/icons';

const Jugador = ({ jugadores}) => {

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