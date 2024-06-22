import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link, } from "react-router-dom";


export const Planets = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [planets, setplanets] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(response => response.json())
            .then(data => {
                setplanets(data.result);
                setDescripcion(data.result.description);
                actions.cargarFavoritos()
            })
            .catch(error => console.error('Error', error));
    }, [id]);

    return (
            <div className="container" id='cartas'>
                <div className="card">
                    <div className="">
                        <div className="">
                            <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="imagenes" alt="..." />
                        </div>
                        <div className="">
                            <div className="">
                                <h4>Descripcion</h4>
                            </div>
                            <div className="">
                                <p>{descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="">
                    {planets ? (
                        <div className="card-body-detalle">
                            <div className="separadores">
                                <p>Nombre : {planets.properties.name}</p>
                            </div>
                            <div className="separadores">
                                <p>Período de rotación : {planets.properties.rotation_period}</p>
                            </div>
                            <div className="separadores">
                                <p>Período orbital : {planets.properties.orbital_period}</p>
                            </div>
                            <div className="separadores">
                                <p>Clima : {planets.properties.climate}</p>
                            </div>
                            <div className="separadores">
                                <p>Diametro : {planets.properties.diameter}</p>
                            </div>
                            <div className="">
                                <p>Gravedad : {planets.properties.gravity}</p>
                            </div>
                            <div className="separadores">
                                <p>Poblacion : {planets.properties.population}</p>
                            </div>
                            <div className="separadores">
                                <p>Terreno : {planets.properties.terrain}</p>
                            </div>
                        </div>
                    ) :
                        <p>Cargando detalles del planeta...</p>
                    }
                </div>
                <div className="col text-center">
                    <Link to="/">
                        <button className="btn btn-danger mt-2">back home</button>
                    </Link>
                </div>
            </div>
    );
};