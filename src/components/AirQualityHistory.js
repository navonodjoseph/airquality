import React, { useState, useEffect } from 'react'
import axios from 'axios'; 


const AirQualityHistory = ({ zipCode }) => {
    const [historicalData, setHistoricalData] = useState([])
    const [formattedDate, setFormattedDate] = useState('')

    useEffect(() => {
        const currentDate = new Date();
        const previousDate = new Date(currentDate);
        previousDate.setDate(previousDate.getDate()-1)
        const formattedDate = previousDate.toISOString().slice(0,10).replace(/-/g, '')
        setFormattedDate(formattedDate)
    }, [])


    useEffect(() =>{
        const fetchHistoricalData = async()=>{
            try{
            const response = await axios.get(
                    `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=${zipCode}&date=${formattedDate}&distance=25&API_KEY=39ACF244-2294-440C-B274-361817EA1520`
                )
                setHistoricalData(response.data)
                console.log(response)
            }catch (error){
                console.error('Error fetching historical data: ', error)
            }
        }
        if (formattedDate && zipCode){
            fetchHistoricalData()
        }
    }, [formattedDate, zipCode])

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
            

    export default AirQualityHistory