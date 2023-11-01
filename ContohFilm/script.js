const API_Key = `44b32e1b`;
// const url = 'http://www.omdbapi.com/?t=MovieTitle&apikey=YourAPIKey';
const image_path = `http://img.omdbapi.com/?apikey=44b32e1b&`;


//kalau pakai getElementById milih element berdasarakan dengan id yang unik dan hnya dpt memilih satu element saja
//kalau queryselector lebih fleksibel karena memilih berdasar pada name tag, kelas, atau atribut
//input=inputBox
const inputBox = document.getElementById('input-box');
//btn == searchbtn
const searchBtn = document.getElementById('searchBtn');
const main_grid_title = document.getElementById('favorites h1');
const main_grid = document.getElementById('favorites .movies-grid');

const trending_el = document.querySelector('.favorites .movies-grid');
const popup_container = document.querySelector('.popup-container')



async function cariFilm(search_term){
    const url = `http://www.omdbapi.com/?s=${search_term}&page=1&apikey=44b32e1b`;
    const movie_data = await fetch(`${url}`).then(response => response.json());
    console.log("run");
    console.log(movie_data);
}

cariFilm('ice');

function findMovie(){
    let search_term = (inputBox.value);

    if(search_term.length > 0){

    }
}

searchBtn.addEventListener('click',()=>{
    cariFilm(inputBox.value);
})

searchBtn.addEventListener('click', addToDom);

async function addToDom(){
    const movie_data = await cariFilm(inputBox.value)
    console.log(movie_data);

    main_grid.innerText = 'Search Results...'
    main_grid.innerHTML = movie_data.map(e=>{
        console.log(e.title);
    })
}

