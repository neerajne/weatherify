import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const[weatherInfo , setweatherInfo] = useState({
        city:"Delhi",
        feels_like: 27.63,
        temp: 29.05,
        tempMin:29.05,
        tempMax:29.05,
        humidity: 24,
        weather:"haze"
    })
    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather info</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
        
    )
}