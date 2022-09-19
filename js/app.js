// pintar cards characters al cargar la web

document.addEventListener('DOMContentLoaded', () => {
    fetchPersonajes()
})

const fetchPersonajes = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    renderPersonajes(data.results);
    console.log(data.results)
}

const renderPersonajes = (personajes) => {
    const personajesContainer = document.getElementById('personajes-container');
    for(const personaje of personajes) {
        personajesContainer.innerHTML += `
        <div class="character">
            <img src="${personaje.image}" class="character-img" alt="...">
            <div class="character-body">
            <div class="border-label">
                <p class="character-label">Nombre: ${personaje.name}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Genero: ${personaje.gender}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Especie: ${personaje.species}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Status: ${personaje.status}</p>
            </div>
            </div>
        </div>
        `
    }
}
