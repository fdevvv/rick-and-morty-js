const listCharacters = document.getElementById('personajes-container');
const buttons = document.getElementById('buttons');
let urlCharacters = 'https://rickandmortyapi.com/api/character';
let btnNext;
let btnPrevious;
let templateHtml;

const getCharacters = async (url) => {
    try {
    const response = await fetch(url);
    const results = await response.json();
    dataCharacters(results.results);
    btnNext=results.info.next ? `<button class="btn" data-url=${results.info.next}>Next</button>` : '';
    btnPrevious = results.info.prev ? `<button class="btn" data-url=${results.info.prev}>Prev</button>` : '';
    buttons.innerHTML= `${btnPrevious} ${btnNext}`
    } catch (error) {
        console.log(error)
    }
}

getCharacters(urlCharacters)


const dataCharacters = async (data) => {
    listCharacters.innerHTML = '';
    try {
        for(let index of data) {
        const resp = await fetch(index.url);
        const resul = await resp.json();
        templateHtml =  `
        <div class="character">
            <img src="${resul.image}" class="character-img" alt="...">
            <div class="character-body">
            <div class="border-label">
                <p class="character-label">Nombre: ${resul.name}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Genero: ${resul.gender}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Especie: ${resul.species}</p>
            </div>
            <div class="border-label">
                <p class="character-label">Status: ${resul.status}</p>
            </div>
            </div>
        </div>
        `
        listCharacters.innerHTML += templateHtml;
    }
    } catch (error) {
        console.log(error);
    }
}

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        let value = e.target.dataset.url;
        console.log(value)
        getCharacters(value);
    }
})

