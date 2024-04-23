import { Context } from "../store/appContext";
import React, { useContext, useEffect, useState } from "react";
import { CharacterCard, StarShipCard, PlanetsCard } from "../component/Card.jsx"; //`https://playground.4geeks.com/contact/agendas/Ronalse/contacts/${id}`
export const StarView = () => {
    const { store, actions } = useContext(Context);
  
    useEffect(() => {
        actions.CharactersGet();
        actions.PlanetsGet();
        actions.ShipsGet();
    }, []);



    return (
        <div className="container-fluid">
            <div className="Top">
                <h1>STAR GUARS</h1>
            </div>
                <div className="Personajes">
                    <h2>CHARACTERS</h2>
                </div>
                <div className="scroll-container">
                    {store.Character.map((personaje,index) => (
                        <div className="Cardsx" key={index}>
                            <CharacterCard
                                personaje={personaje}
                            />
                        </div>
                    ))}
                </div>
                <div className="Ships">
                    <h2>STARSHIPS</h2>
                </div>
                <div className="scroll-container">
                    {store.Ships.map((ship,index) => (
                        <div className="Shipsxd" key={index}>
                            <StarShipCard
                                ship = {ship}
                            />
                        </div>
                    ))}
                </div>
                <div className="Planets">
                    <h2>PLANETS</h2>
                </div>
                <div className="scroll-container">
                    {store.Planets.map((planet,index) =>(
                        <div className="Planetasxd" key={index}>
                            <PlanetsCard
                                planet = {planet}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
};