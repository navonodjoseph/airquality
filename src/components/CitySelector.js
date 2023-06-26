import React, { useState } from 'react';
import AirQuality from "./AirQuality"
import AirQualityHistory from './AirQualityHistory'

const CitySelector = () => {
    const [zipCode, setZipCode] = useState('')
    
    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value)
    };
    return(
        <div>
           <h2> Select a city</h2>
           <select value={zipCode} onChange={handleZipCodeChange}>
            <option value=''>-- Select a city --</option>
            <option value='55409'>Minneapolis</option>
            <option value='20036'>Washington, D.C.</option>
            <option value='94709'>Berkeley</option>
         </select> 
         {zipCode && <AirQuality zipCode={zipCode} />}
         {<AirQualityHistory />}
        </div>
    )
}

export default CitySelector