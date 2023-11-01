//pakai nya const soalnya supaya si object nya itu ga berubah
//kalo misal gabisa pake const pakenya let
//var gamungkin dipake karena var dipake di browser lama
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const kelembaban = document.getElementById('kelembaban');
const kecepatan_angin = document.getElementById('kecepatan-angin');
const terasa_seperti = document.getElementById('terasa-seperti');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

//async itu buat nunggu si promises lebih mudah di tulis
//async itu bisa juga pakai promises
async function checkWeather(city){
    //api key di ambil dari openweathermap
    const api_key = "420005c16d215fb815e923f867a42a2b";
    //buat bikin ke bahasa indonesia ditambahin lang=id
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=id`;

    //ini buat ajax nya
    //await itu bisa dipake kalo misal pake async, kmrn wktu pake async tpi gapake await itu jadinya error
    //fetch itu buat ngambil API dari hhtp server web, klo udh pake fetch gausah pake XMLHttpRequests
    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Error");
        return;
    }

    //console.log itu buat nampilin kalimat run di konsol web
    console.log("run");
    //buat sembunyiin tampilan location_not_found
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";


    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`
    // console.log(weather_data);

    //innerhtml buat ganti elemen di dalamnya
    kelembaban.innerHTML = `${weather_data.main.humidity}%`;
    kecepatan_angin.innerHTML = `${weather_data.wind.speed}Km/H`;
    terasa_seperti.innerHTML = `${Math.round(weather_data.main.feels_like - 273.15)}°C`;


    //buat ganti gambar sesuai cuaca
    switch(weather_data.weather[0].main){
        case 'Clear':
            weather_img.src = "img2/sunny.png";
            break;
        
        case 'Rain':
            weather_img.src = "img2/rain.png";
            break;

        case 'Drizzle':
            weather_img.src = "img2/rain.png";
            break;

        case 'Thunderstorm':
            weather_img.src = "img2/badai-petir.png";
            break;
        
        case 'Snow':
            weather_img.src = "img2/snow.png";
            break;

         case 'Smoke':
            weather_img.src = "img2/asap.png";
            break;
        
        case 'Haze':
            weather_img.src = "img2/asap.png";
            break;

        case 'Sand':
            weather_img.src = "img2/tornado.png";
            break;

        case 'Tornado':
            weather_img.src = "img2/tornado.png";
            break;
        
        case 'Hurricane':
            weather_img.src = "img2/tornado.png";
            break;

        case 'Squall':
            weather_img.src = "img2/mist.png";
            break;
        
        case 'Tropical Storm':
            weather_img.src = "img2/tornado.png";
            break;

        case 'Dust and Sand Whirls':
            weather_img.src = "img2/tornado.png";
            break;

        case 'Hail':
            weather_img.src = "img2/hujan-es.png";
            break;
        
            case 'Mist':
                weather_img.src = "img2/asap.png";
                break; 
    }

    console.log(weather_data);

}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})