const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [],
			Planets : [],
			Ships : [],
			Favorite : [],
			countFavorite : 0
		},
		actions: {
			// Use getActions to call a function within a fuction
		PlanetsGet : () =>{
			fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json())
			.then(data => {
				// Array para almacenar las promesas de las solicitudes individuales de cada planeta
				const planetPromises = data.results.map(planet => {
					// Realizar una solicitud para obtener detalles sobre el planeta
					return fetch(planet.url)
						.then(response => response.json())
						.then(details => {
							// Agregar los detalles obtenidos al objeto del planeta
							planet.details = details.result;
							return planet;
						});
				});
	
				// Esperar a que todas las promesas se completen antes de actualizar el estado
				Promise.all(planetPromises)
					.then(planetsWithDetails => {
						setStore({ Planets: planetsWithDetails });
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.error(error));
		},

		CharactersGet : () =>{
			fetch("https://www.swapi.tech/api/people/")
			.then(response => response.json())
			.then(data => {
				// Array para almacenar las promesas de las solicitudes individuales de cada personaje
				const characterPromises = data.results.map(personaje => {
					// Realizar una solicitud para obtener detalles sobre el personaje
					return fetch(personaje.url)
						.then(response => response.json())
						.then(details => {
							// Agregar los detalles obtenidos al objeto del personaje
							personaje.details = details.result;
							return personaje;
						});
				});
	
				// Esperar a que todas las promesas se completen antes de actualizar el estado
				Promise.all(characterPromises)
					.then(charactersWithDetails => {
						console.log(charactersWithDetails)
						setStore({ Character: charactersWithDetails });
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.error(error));
		},

		ShipsGet : () =>{
			fetch("https://www.swapi.tech/api/vehicles/")
        .then(response => response.json())
        .then(data => {
            // Array para almacenar las promesas de las solicitudes individuales de cada nave
            const shipPromises = data.results.map(ship => {
                // Realizar una solicitud para obtener detalles sobre la nave
                return fetch(ship.url)
                    .then(response => response.json())
                    .then(details => {
                        // Agregar los detalles obtenidos al objeto de la nave
                        ship.details = details.result;
                        return ship;
                    });
            });

            // Esperar a que todas las promesas se completen antes de actualizar el estado
            Promise.all(shipPromises)
                .then(shipsWithDetails => {
                    setStore({ Ships: shipsWithDetails });
                })
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
		},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
