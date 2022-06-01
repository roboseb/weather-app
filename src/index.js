import './styles.css';

let cityName = 'saskatoon';

//Set animation timing for JS and CSS.
const aniTime = 5000;
const root = document.querySelector(':root');
root.style.setProperty('--ani-time', `${aniTime/1000}s`);


//Cloud object with methods for showing clouds based on weather.
const Clouds = (() => {

    const cloudBox = document.getElementById('cloudbox');
    const cloudArray = [];


    //Show clouds based on percipitation and cloudiness.
    const makeClouds = (percentage, weather) => {
        
        //Reset cloud position to hidden.
        cloudArray.forEach(cloud => {
            cloud.style.right = '-1000px';
        });


        //Set the amount of clouds based on the cloudiness percentage.
        const cloudAmount = Math.floor(percentage * 7 / 100) + 1;
        //console.log(cloudAmount);

        setTimeout(() => {
            //Move clouds equal to cloudAmount into frame.
            for (let i = 0; i < cloudAmount; i++) {
                if (i === 7) continue;

        

                const offsetX = (Math.floor(Math.random() * 5)) + (i * (100 / cloudAmount));
                const offsetY = Math.floor(Math.random() * 50);


                cloudArray[i].style.right = `${offsetX}%`;
                cloudArray[i].style.top = `${offsetY}%`;
            }
        }, 1000);

    }

    const makeCloud = (weather) => {

        let rain;

        if (weather === 'rain') {
            rain = 'rain'
        } else {
            rain = '';
        }

        const cloud = document.createElement('img');
        
        //Set cloud src image to a random choice of the two.
        const flip = Math.floor(Math.random() * 2) + 1;
        cloud.src = `images/cloud${flip}${rain}.png`;

        //Set cloud size randomly;
        const size = Math.floor(Math.random() * 40) + 65;
        cloud.style.height = `${size}px`;

        cloudBox.appendChild(cloud);
        cloudArray.push(cloud);
    }

    for (let i = 0; i < 7; i++) {
        makeCloud('rain');
    }

    return {makeClouds}
})();


Clouds.makeClouds(1, 'rain');

setTimeout(() => {
    Clouds.makeClouds(100, 'rain');
}, 4000);


async function getWeather() {
    

    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const clouds = document.getElementById('clouds');

    
    
    //Fetch weather data
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc9c1848951905d082dbd9b3eec385f6`, {mode: 'cors'});
    const data = await response.json();

    //Set weather display based 
    city.innerText = data['name'];
    temp.innerText = `${Math.round(data['main']['temp'])}°C`;
    clouds.innerText = `Clouds: ${data['clouds']['all']} %`;

    return data['coord'];
}

async function getTime() {
    //Set initial position of sun and moon before adding transitions.
    const spaceBox = document.getElementById('sunmoonbox');
    spaceBox.style.transition = `all ${aniTime/1000}s`;

    const timeDisplay = document.getElementById('time');
    

    //Await weather response and use those coords to fetch time.
    const coord = await getWeather();
    const response = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=eaa147c505244f71a90ccccdd5f78acc&lat=${coord['lat']}&long=${coord['lon']}`, {mode: 'cors'});
    const time = await response.json();

    //Update time display based on API fetch.
    timeDisplay.innerText = (time['time_12']);

    //Convert selected time as a fraction of 360;
    let newTime = time['time_24'].split(':');
    let fraction = newTime[1]/60;
    let percentage = (Number(newTime[0]) + Number(fraction)) / 24;
    const rotation = percentage * 360;

    //Move sun and moon relative to selected time.
    const root = document.querySelector(':root');
    root.style.setProperty('--space-angle', `${rotation}deg`);

    
    const backdrop = document.getElementById('backdrop');
    const sky = document.getElementById('sky');

    //Apply time as a fraction to backdrop brightness.
    let newFraction;

    if (percentage > 0.5) {
        newFraction = 1 - percentage;
        newFraction = newFraction * 2;
    } else if (percentage <= 0.5) {
        newFraction = percentage * 2;
    }

    backdrop.style.filter = `brightness(${newFraction})`;
    sky.style.filter = `brightness(${newFraction})`;
}


setTimeout(() => {
    getWeather();
    getTime();
}, 0);




const searchButton = document.getElementById('searchbtn');
const searchBar = document.getElementById('search');

searchButton.addEventListener('click', () => {
    cityName = searchBar.value;
    getWeather();
    getTime();
});



// window.addEventListener('click', () => {
    
//     spaceBox.classList.remove('rotating');
//     void spaceBox.offsetWidth;
//     spaceBox.classList.add('rotating');

//     setTimeout(() => {
//         spaceBox.classList.remove('rotating');
//     }, 5000);
// });








