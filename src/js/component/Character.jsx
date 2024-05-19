import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link, } from "react-router-dom";

export const Character = () => {

    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [personajeDetalle, setPersonajeDetalle] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/people/${id}`) 
        .then(response => response.json())
        .then(data => {
            setPersonajeDetalle(data.result); 
            setDescripcion(data.result.description); 

        },[id])
        .catch(error => console.error('Error', error));
    })

return (
    <div className="container">
        <div className="container">
            <div className="card">
                <div className="">
                    <div className="">
                        <img src=""  alt="..." />
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
  
            <div className="">
                <div>
                    <h5 className="">Detalles del Personaje</h5>
                </div>
                {personajeDetalle ? (
                    <div className="">
                        <div className="">
                            <p>Nombre</p>
                            <p>{personajeDetalle.properties.name}</p>
                        </div>
                        <div className="">
                            <p>Año de nacimiento</p>
                            <p>{personajeDetalle.properties.birth_year}</p>
                        </div>
                        <div className="">
                            <p>Genero</p>
                            <p>{personajeDetalle.properties.gender}</p>
                        </div>
                        <div className="">
                            <p>Altura</p>
                            <p>{personajeDetalle.properties.height}</p>
                        </div>
                        <div className="">
                            <p>Peso</p>
                            <p>{personajeDetalle.properties.mass}</p>
                        </div>
                        <div className="">
                            <p>Color de Ojos</p>
                            <p>{personajeDetalle.properties.eye_color}</p>
                        </div>
                        <div className="">
                            <p>Color de Cabello</p>
                            <p>{personajeDetalle.properties.hair_color}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del personaje...</p>
                }
            </div>
            <div className="">
                <Link to="/">
                    <button className="btn btn-danger mt-5">Back Home</button>
                </Link>
            </div>
        </div>
    </div>
);
};