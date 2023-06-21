import React, { useState, useEffect } from 'react'
import axios from 'axios'; 


const HistoricalObservation = ({ zipCode }) => {
    const [historicalData, setHistoricalData] = useState([])

    useEffect(() =>{
        const fetchHistoricalData = async () => {
            try{
                const response = await axios.get(
                    `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=55409&date=2023-06-20T00-0000&distance=25&API_KEY=39ACF244-2294-440C-B274-361817EA1520`
                ) 
                setHistoricalData(response.data)
                console.log(response.data)
            } catch (error){
                console.error('Error fetching historical data:', error)
            }
        }
        fetchHistoricalData();
    }, [zipCode])
    
    return(
        <div>
            <h2>Historical Air Quality for {zipCode}</h2>
            {historicalData.length > 0 ? (
                <ul>
                 {historicalData.map((data)=> (
                    <li key={data.DateObserved}>
                        Date: {data.DateObserved}, AQI: {data.AQI}, {data.Category.Name}
                    </li>
                 ))}
                </ul>
            ):(
                <p>Loading historical data... </p>
            )}
            </div>
            )
        }
            

    export default HistoricalObservation