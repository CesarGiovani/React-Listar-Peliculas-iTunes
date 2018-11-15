import React, { Component } from 'react'
import { Grid, PageHeader, Row } from 'react-bootstrap';
import BuscarPelicula from './BuscarPelicula';
import PeliculasEncontradas from './PeliculasEncontradas';

export class Pelicula extends Component {
    state = {
        peliculas: [],
        estaCargando: false
    };

    peliculaPorBuscar = async (e) => {
        const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
        e.preventDefault();
        const api_fetch = await fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=MX`);
        const peliculas = await api_fetch.json();
        this.setState({ estaCargando: true });
        this.setState({ peliculas: peliculas.results, estaCargando: false });
        console.log(this.state.peliculas);
    }
    render() {
        if (this.state.estaCargando) {
            return <p>Cargando...</p>
        }
        return (
            <Grid>
                <Row>
                    <PageHeader>Lista de peliculas</PageHeader>
                    <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
                </Row>
                <Row>
                    <br />
                    <PeliculasEncontradas peliculas={this.state.peliculas} />
                </Row>
            </Grid>
        );
    }
}

export default Pelicula