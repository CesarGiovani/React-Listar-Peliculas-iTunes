import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class FormaSaludo extends Component {
    nuevoNombre = e =>{
        let datos = {};
        const nombre = e.target.nombre.value
        const mensaje = e.target.mensaje.value
        datos.nombre = nombre
        datos.mensaje = mensaje
        e.preventDefault();

        e.target.nombre.value="";
        e.target.mensaje.value="";
        this.props.nuevoNombre(datos);
    }
    render() {
        return (
            <form onSubmit={this.nuevoNombre}>
                <FormGroup>
                    <ControlLabel>Nombre</ControlLabel>
                    <FormControl type="text" id="nombre" name="name" required />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Mensaje</ControlLabel>
                    <FormControl componentClass="textarea" id="mensaje" name="mensaje" required />
                </FormGroup>
                <Button type="submit">Saludar</Button>
            </form>
        );
    }
}

export default FormaSaludo