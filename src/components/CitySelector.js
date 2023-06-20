import React, { useState } from 'react';
import AirQuality from "./AirQuality"

const CitySelector = () => {
    const [city, setCity] = useState('')
    
    const handleCityChange = (e) => {
        setCity(e.target.value)
    };
    return(
        <div>
           <h2> Select a city</h2>
           <select value={city} onChange={handleCityChange}>
            <option value=''>-- Select a city --</option>
            <option value='55409'>Minneapolis</option>
            <option value='20036'>Washington, D.C.</option>
            <option value='94709'>Berkeley</option>
         </select> 
         {city && <AirQuality city={city} />}
        </div>
    )
}

export default CitySelector