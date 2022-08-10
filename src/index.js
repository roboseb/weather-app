import './styles.css';

let cityName = 'joinville';

//Set animation timing for JS and CSS.
const aniTime = 5000;
const root = document.querySelector(':root');
root.style.setProperty('--ani-time', `${aniTime/1000}s`);


//Cloud object with methods for showing clouds based on weather.
const Clouds = (() => {

    const cloudBox = document.getElementById('cloudbox');
    let cloudArray = [];

    const getClouds = () => {
        return cloudArray;
    }

    //Show clouds based on percipitation and cloudiness.
    const makeClouds = (percentage, weather) => {
        
        //Reset cloudArray and delete dom clouds.
        cloudArray.forEach(cloud => {
            cloud.style.transform = 'translateX(120vw)';
            setTimeout(() => {
                cloud.remove();
            }, 1500);
            
        });
        cloudArray = [];
        console.log(cloudArray, weather);

        for (let i = 0; i < 7; i++) {
            makeCloud(weather);
        }


        //Reset cloud position to hidden.
        cloudArray.forEach(cloud => {
            cloud.style.transform = 'translateX(120vw) translateY(0px)';
            
            setTimeout(() => {
                cloud.classList.add('hiddencloud');
            }, 1000);
        });


        //Set the amount of clouds based on the cloudiness percentage.
        const cloudAmount = Math.floor(percentage * 7 / 100);

        

        setTimeout(() => {
            //Move clouds equal to cloudAmount into frame.
            for (let i = 0; i < cloudAmount; i++) {
                //Skip trying to add an eighth cloud.
                if (i === 7) continue;

                //Show cloud.
                cloudArray[i].classList.remove('hiddencloud');

                //Evenly place clouds, then adjust them slightly.
                const flip = Math.floor(Math.random() * 2);
                
                let offsetX;
                if (flip === 0) {
                    offsetX = Math.floor(Math.random() * 100);
                } else {
                    offsetX = Math.floor(Math.random() * -100);
                }

                const offsetY = Math.floor(Math.random() * 50);
                setTimeout(() => {
                    cloudArray[i].style.marginRight = `${offsetX}px`;
                    cloudArray[i].style.transform = `translateY(${offsetY}px) translateX(0px)`;
                }, 200);
            }
        }, 1000);

    }

    const makeCloud = (weather) => {

        let rain;

        if (weather === 'Rain' || weather === 'Drizzle') {
            rain = 'rain'
        } else {
            rain = '';
        }



        const cloud = document.createElement('img');
        
        //Set cloud src image to a random choice of the two.
        const flip = Math.floor(Math.random() * 2) + 1;
        cloud.src = require(`/src/images/cloud${flip}${rain}.png`);
      

        //Set cloud size randomly;
        const size = Math.floor(Math.random() * 40) + 65;
        cloud.style.height = `${size}px`;

        cloudBox.appendChild(cloud);
        cloudArray.push(cloud);
        cloud.classList.add('hiddencloud');
    }

    

    return {makeClouds, cloudArray, getClouds}
})();

let units = 'C';
let buttonActivated = false;

//Fetch weather data and return coordinates of selected location.
async function getWeather() {
    
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const clouds = document.getElementById('clouds');

    //Fetch weather data
    let response;
    try {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc9c1848951905d082dbd9b3eec385f6`, {mode: 'cors'});
    } catch (err) {
        alert(err);
    }
    
    const data = await response.json();

    //Display error if city is not found.
    if (data['cod'] === '404') {
        city.innerText = 'Location not found'
        return;
    }

    //Set weather display based 
    city.innerText = data['name'];
    if (units === 'C') {
        temp.innerText = `${Math.round(data['main']['temp'])}°C`;
    } else {
        let newTemp = data['main']['temp'];
        newTemp = Math.round((newTemp * 9/5) + 32);
        temp.innerText = `${newTemp}°F`;
    }

    clouds.innerText = `Clouds: ${data['clouds']['all']} %`;

    //Find whether or not it's raining.
    const mainWeather = data['weather'][0]['main'];

    //Animate clouds based on cloudiness.
    const cloudiness = data['clouds']['all'];
    Clouds.makeClouds(cloudiness, mainWeather);

    //Remove raindrops from the DOM.
    const drops = Array.from(document.querySelectorAll('#raindrop'));
    drops.forEach(drop => {
        drop.remove();
    });

    //Add raindrops to the DOM.
    if (mainWeather === 'Rain' || mainWeather === 'Drizzle') {
        setTimeout(() => {
            const rainBox = document.getElementById('rainbox');
            if (mainWeather === 'Rain' || mainWeather === 'Drizzle') {

                //Add raindrops based on cloud amount.
                Clouds.getClouds().forEach(cloud => {
                    if (cloud.classList[0] === 'hiddencloud') {
                        return;
                    }
                    
                    
                    const raindrop = document.createElement('img');
    
                    //Randomize raindrop delay.
                    const randDelay = Math.random() * 2;
                    raindrop.style.animation = `rain 2s infinite ${randDelay}s`;
    
                    setTimeout(() => {
                        //Display the raindrop.
                        raindrop.src = require('/src/images/raindrop.png');
                        raindrop.id = 'raindrop';
                    }, randDelay * 1000);
    
                    
    
                    //Add the drop to the DOM based on cloud position.
                    const rect = cloud.getBoundingClientRect();
                    raindrop.style.top = `${rect.top - 75}px`;
                    raindrop.style.left = `${rect.left + 75}px`;
                    rainBox.appendChild(raindrop);
                });
            }
        }, 3000);
    }

    //Make the unit conversion button convert temperature units.
    //Defaults to celsius.
    const unitButton = document.getElementById('unitbtn');
    if (!buttonActivated) {
        unitButton.addEventListener('click', () => {
            let newTemp = data['main']['temp'];
            
            //Convert units based on current selected units.
            if (units === 'C') {
                newTemp = Math.round((newTemp * 9/5) + 32);
                temp.innerText = `${newTemp}°F`;
                unitButton.innerText = 'C';
                unitButton.style.backgroundColor = 'rgb(131, 251, 245)';
                units = 'F';
            } else if (units === 'F') {
                temp.innerText = `${Math.round(data['main']['temp'])}°C`;
                unitButton.innerText = 'F';
                unitButton.style.backgroundColor = 'rgb(214, 77, 77)';
                units = 'C';
            }
        });
        buttonActivated = true;
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
    
    //Stop function if return data is undefined.
    if (coord === undefined) return;

    const response = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=eaa147c505244f71a90ccccdd5f78acc&lat=${coord['lat']}&long=${coord['lon']}`, {mode: 'cors'});
    const time = await response.json();

    //Remove seconds from the time displayed.
    let cleanTime = time['time_12'].slice(0, -6) + time['time_12'].slice(-3, time['time_12'].length);
    console.log(cleanTime);

    //Update time display based on API fetch.
    timeDisplay.innerText = cleanTime;
    
    //Remove leading 0s.
    if (timeDisplay.innerText[0] === '0') {
        timeDisplay.innerText = cleanTime.slice(1)
    }

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

    //Apply time as a fraction to cloud brightnes.
    Clouds.cloudArray.forEach(cloud => {
        cloud.style.filter = `brightness(${newFraction})`;
    });
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








