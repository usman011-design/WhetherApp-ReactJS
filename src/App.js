import React,{useState}  from 'react';
import './App.css';


const api = {
  key : "9dbb3137663ca4f10d5c2302edb49667",
  base : "https://api.openweathermap.org/data/2.5"
}

function App() {
 const [query , setquery] = useState('');
  const [weather , setweather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setweather(result)
        setquery('');
        console.log(result);
      });
    }
  }
  
  return (
    <div className="App">
       <main>
         
          <div className="search-box">
            
             <input
             type="text"
             className="search-bar"
             placeholder="search...."
             onChange={e => setquery(e.target.value)}
             value = {query}
             onKeyPress={search}
             />

          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
          <div className="location-box">
            <div className="location">{weather.name} , {weather.sys.country}</div>
            <div className="date"></div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)} °c
            </div>
            <div className="wth">{weather.weather[0].main}</div>
          </div>
          </div>
          ):(' ') }
       </main>
    
    </div>
    
  );
}

export default App;
