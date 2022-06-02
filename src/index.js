import './styles.css';

let cityName = 'joinville';

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
        
        for (let i = 0; i < 7; i++) {
            makeCloud(weather);
        }


        //Reset cloud position to hidden.
        cloudArray.forEach(cloud => {
            cloud.style.right = '-1000px';
        });


        //Set the amount of clouds based on the cloudiness percentage.
        //const cloudAmount = Math.floor(percentage * 7 / 100);
        const cloudAmount = 7;

        

        setTimeout(() => {
            //Move clouds equal to cloudAmount into frame.
            for (let i = 0; i < cloudAmount; i++) {
                //Skip trying to add an eighth cloud.
                if (i === 7) continue;

                //Show cloud.
                cloudArray[i].classList.remove('hiddencloud');

                //Evenly but randomly place clouds.
                const flip = Math.floor(Math.random() * 2);
                console.log(flip);
                
                let offsetX;
                if (flip === 0) {
                    offsetX = Math.floor(Math.random() * 50);
                } else {
                    offsetX = Math.floor(Math.random() * -50);
                }

                console.log(offsetX);

                const offsetY = Math.floor(Math.random() * 50);
                setTimeout(() => {
                    //cloudArray[i].style.transform = `translateX(${offsetX}px)`;
                    cloudArray[i].style.transform = `translateY(${offsetY}px)`;
                }, 200);
                
                
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
        cloud.classList.add('hiddencloud');
    }

    

    return {makeClouds, cloudArray}
})();

//Fetch weather data and return coordinates of selected location.
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

    //Animate clouds based on cloudiness.
    const cloudiness = data['clouds']['all'];
    Clouds.makeClouds(cloudiness, 'rain');

    //Animate rain based on weather data.
    const mainWeather = data['weather'][0]['main'];

    //Remove raindrops from the DOM.
    const drops = Array.from(document.querySelectorAll('#raindrop'));
    drops.forEach(drop => {
        drop.remove();
    });

    if (mainWeather === 'Rain') {
        //Add raindrops to the DOM.
        setTimeout(() => {
            const rainBox = document.getElementById('rainbox');
            if (mainWeather === 'Rain') {
                
                //Add raindrops based on cloud amount.
                Clouds.cloudArray.forEach(cloud => {
                    if (cloud.classList[0] === 'hiddencloud') {
                        return;
                    }

                    const raindrop = document.createElement('img');
    
                    //Randomize raindrop delay.
                    const randDelay = Math.random() * 2;
                    raindrop.style.animation = `rain 2s infinite ${randDelay}s`;
    
                    setTimeout(() => {
                        //Display the raindrop.
                        raindrop.src = 'images/raindrop.png';
                        raindrop.id = 'raindrop';
                    }, randDelay * 1000);
    
    
                    //Add the drop to the DOM based on cloud position.
                    const rect = cloud.getBoundingClientRect();
                    raindrop.style.top = `${rect.top - 75}px`;
                    raindrop.style.left = `${rect.left + 75}px`;
                    rainBox.appendChild(raindrop);
                });
            } else {
    
            }
        }, 3000);
    }

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
    getTime();
}, 0);




const searchButton = document.getElementById('searchbtn');
const searchBar = document.getElementById('search');

searchButton.addEventListener('click', () => {
    cityName = searchBar.value;
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








