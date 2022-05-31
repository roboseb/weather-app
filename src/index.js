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
    console.log(data['coord']);

    city.innerText = data['name'];
    temp.innerText = `${Math.round(data['main']['temp'])}°C`;
    wind.innerText = `${data['wind']['speed']} m/s`;
    time.innerText = data['dt'];

    return data['coord'];
}

async function getTime() {



    const coord = await getWeather();
    console.log(`${coord['lat']} that's the coords`);

    const response = await fetch(`https://timeapi.io/api/Time/current/coordinate?latitude=${coord['lat']}&longitude=${coord['lon']}`, {mode: 'cors'});
    const time = await response.json();
    console.log(time);
}

getWeather();

getTime();








