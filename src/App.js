import React, { useState } from 'react';
const api = {
  key: "ac29e2ce73da49d7fd286283f5757d08",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');

  const [weather, setWeather] = useState({});

  

  const search = evt => {

    if (evt.key === "Enter") {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

        .then(res => res.json())

        .then(result => {

          setWeather(result);

          setQuery('');

          console.log(result);

        });

    }

  }





 let date = String(new window.Date())
date = date.slice(3, 15)



  return (

    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app'}>

      <main>

        <div className="search-box">

          <input 

            type="text"

            className="search-bar"

            placeholder="Search any City for the weather"

            onChange={e => setQuery(e.target.value)}

            value={query}

            onKeyPress={search}

          />

        </div>

        {(typeof weather.main != "undefined") ? (

        <div>

          <div className="location-box">

            <div className="location">{weather.name}, {weather.sys.country}</div>

            <div className="date">{date}</div>

          </div>

          <div className="weather-box">

            <div className="temp">

              {Math.round(weather.main.temp)}°c

            </div>
            
            <div className="weather">{weather.weather[0].description}</div>
            <div className="hum">humidity: {weather.main.humidity}</div>
            <div className="lat">latitude: {weather.coord.lat}</div>
            <div className="lon">longitude: {weather.coord.lon}</div>
            

          </div>

        </div>

        ) : ('')}

      </main>

    </div>

  );

}



export default App;