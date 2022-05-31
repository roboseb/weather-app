import './styles.css';

let cityName = 'Miami';

async function getWeather() {
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const wind = document.getElementById('wind');
    const time = document.getElementById('time');

    


    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc9c1848951905d082dbd9b3eec385f6`, {mode: 'cors'});
    const data = await response.json();
    
    
    
    console.log(data);
    console.log(data['name']);

    city.innerText = data['name'];
    temp.innerText = `${Math.round(data['main']['temp'])}°C`;
    wind.innerText = `${data['wind']['speed']} m/s`;
    time.innerText = data['dt'];

    return data['name'];
}

async function getTime() {
    const response = await fetch(``)
}

getWeather();








