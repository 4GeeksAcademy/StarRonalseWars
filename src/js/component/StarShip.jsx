import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link, } from "react-router-dom";

export const StarShip = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [StarShip, setStarShip] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(response => response.json())
            .then(data => {
                setStarShip(data.result);
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
                            <h4>Descripcion : {descripcion}</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="">
            </div>
            <div className="">

                {StarShip ? (
                    <div className="card-body-detalle">
                        <div className="separadores">
                            <p> Nombre : {StarShip.properties.name}</p>
                        </div>
                        <div className="separadores">
                            <p> Modelo : {StarShip.properties.model}</p>
                        </div>
                        <div className="separadores">
                            <p>Fabricante : {StarShip.properties.manufacturer}</p>
                        </div>
                        <div className="separadores">
                            <p> Largo : {StarShip.properties.length}</p>
                        </div>
                        <div className="separadores">
                            <p> Capacidad de carga : {StarShip.properties.cargo_capacity}</p>
                        </div>
                        <div className="separadores">
                            <p> Costo en creditos : {StarShip.properties.cost_in_credits}</p>
                        </div>
                    </div>
                ) :
                    <p> Cargando detalles de StarShip...</p>
                }
            </div>
            <div className="text-center">
                <Link to="/">
                    <button className=" btn btn-danger mt-2">back home</button>
                </Link>
            </div>
        </div>
    );
};