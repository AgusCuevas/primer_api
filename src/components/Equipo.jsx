import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Equipo = ({ equipo }) => {
    return ( 
        <div align="center" class="card border-success mb-3" style="max-width: 18rem;" style= {
            {
                margin: "2rem",
                backgroundColor: '#E5E8E8' ,
                maxWidth: "800px",
                color: "black",
                borderTopWidth: '3px',
                borderRightWidth:'3px',
                borderLeftWidth: '3px',
                borderBottomWidth: '3px',
            } 
        }>
            <div className = 'contenedorSecundario'> Equipo </div>  
            <p></p>
            <div align="center"><img class = 'logoEquipo' align="center" src={equipo.team_logo}/></div>
            <p> <h6 class = 'oracionEquipo'>Nombre: </h6> {equipo.team_name} </p>
        </div>
     );
}
 
export default Equipo;