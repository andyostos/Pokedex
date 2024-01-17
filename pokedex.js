 // URL de la API de Pokémon (puedes cambiar el número en la URL para obtener datos de otro Pokémon)
 const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/150/';

 // Obtener datos de la API de Pokémon
 fetch(pokemonAPI)
     .then(response => response.json())
     .then(data => {
         // Manipular el DOM para mostrar la información
         document.getElementById('pokemonName').innerText = data.name;
         document.getElementById('pokemonID').innerText = data.id;
         document.getElementById('pokemonWeight').innerText = data.weight;

         // La URL de la imagen puede obtenerse de otra llamada a la API o construirse utilizando los datos
         
         const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
         document.getElementById('pokemonImage').src = imageUrl;
     })
     .catch(error => console.error('Error al obtener datos:', error));

     // Función para guardar información en localStorage
     function guardarEnLocalStorage() {
        // Obtener datos del Pokémon del DOM
        const pokemonData = {
            name: document.getElementById('pokemonName').innerText,
            id: document.getElementById('pokemonID').innerText,
            weight: document.getElementById('pokemonWeight').innerText
        };

        // Convertir a cadena y almacenar en localStorage
        localStorage.setItem('pokemonData', JSON.stringify(pokemonData));

        alert('Datos del Pokémon guardados en localStorage.');
    }