import React from "react";
import { Context } from "../store/appContext";


export const CharacterCard = ({personaje}) =>{
    return (
 <div className="contenedoresCard">
        <div className="card mx-3" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item overflow-hidden">Gender: {personaje.details.properties.gender}</li>
                <li className="list-group-item overflow-hidden">Hair: {personaje.details.properties.hair_color}</li>
                <li className="list-group-item overflow-hidden">Eye Color: {personaje.details.properties.eye_color}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning float-end"><i className="far fa-heart"></i></button>
            </div>
        </div>
</div>
    );
};

export const StarShipCard = ({ship}) =>{
    return (
<div className="contenedoresCard">
        <div className="card mx-3" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ship.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item overflow-hidden">model : {ship.details.properties.model} </li>
                <li className="list-group-item overflow-hidden">Time :{ship.details.properties.consumables} </li>
                <li className="list-group-item overflow-hidden">Class : {ship.details.properties.vehicle_class}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning float-end"><i className="far fa-heart"></i></button>
            </div>
        </div>
</div>
    )
};

export const PlanetsCard = ({planet}) => {
    return (
<div className="contenedoresCard">
        <div className="card mx-3" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item overflow-hidden">gravity : {planet.details.properties.gravity} </li>
                <li className="list-group-item overflow-hidden">Time rotation : {planet.details.properties.rotation_period} </li>
                <li className="list-group-item overflow-hidden">terrain :{planet.details.properties.terrain} </li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-outline-primary">Learn More</button>
                <button type="button" className="btn btn-outline-warning float-end"><i className="far fa-heart"></i></button>
            </div>
        </div>
</div>
    )
}