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
        <div className="container" id='cartas'>
            <div className="card">
                <div className="">
                    <div className="">
                        <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className='imagenes'  alt="..." />
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
  
                {personajeDetalle ? (
                    <div className="">
                        <div className="separadores">
                            <p>Nombre : {personajeDetalle.properties.name}</p>
                        </div>
                        <div className="separadores">
                            <p>Año de nacimiento : {personajeDetalle.properties.birth_year}</p>
                        </div>
                        <div className="separadores">
                            <p>Genero : {personajeDetalle.properties.gender}</p>
                        </div>
                        <div className="separadores">
                            <p>Altura : {personajeDetalle.properties.height}</p>
                        </div>
                        <div className="separadores">
                            <p>Peso: {personajeDetalle.properties.mass}</p>
                        </div>
                        <div className="separadores">
                            <p>Color de Ojos : {personajeDetalle.properties.eye_color}</p>
                        </div>
                        <div className="separadores">
                            <p>Color de Cabello : {personajeDetalle.properties.hair_color}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del personaje...</p>
                }
            </div>
            <div className="">
                <Link to="/">
                    <button className="btn btn-danger mt-2">Back Home</button>
                </Link>
            </div>
        </div>

);
};