import React, { Component } from "react";
import { Grid } from 'react-bootstrap';
import { MensajeSaludo } from './Saludo/MensajeSaludo';
import { FormaSaludo } from './Saludo/FormaSaludo';

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre,
    mensaje : this.props.mensaje
  };
  manejarNuevoNombre = datos =>{
    this.setState(datos);
  };
  render() {
    const { nombre, mensaje } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje}/>
        <FormaSaludo nuevoNombre={this.manejarNuevoNombre}/>
      </Grid>
    );
  }
}
Saludo.defaultProps={
  nombre: "React",
  text: "Mensaje en default"
}

export default Saludo;
