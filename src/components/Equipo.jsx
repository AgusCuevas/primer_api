import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Opacity } from '@material-ui/icons';

const Equipo = ({ equipo }) => {
    return ( 
        <div align="center" class="card border-success mb-3" style="max-width: 18rem;" style= {
            {
                margin: "2rem",
                padding: "3rem",
                borderRadius: ".9rem",
                backgroundColor: '#E5E8E8' ,
                maxWidth: "800px",
                color: "black",
            }
        }>  
            <img  src={equipo.team_logo} />
            <p> <h6 class = 'oracionEquipo'>Nombre: </h6> {equipo.team_name} </p>
        </div>
     );
}
 
export default Equipo;