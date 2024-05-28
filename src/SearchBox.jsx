import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9e004427a619e135999a1a0c7fb66075";
    const [city, setCity] = useState("");
    let[error , setError] = useState(false)

    let getWeatherInfo = async () => {
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsAlike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
      catch(err){
        throw(err);
      }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setCity("");
            setError(false);
            let newInfo =  await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
      
    }

    return (
        
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField   id="city" label="City name" variant="outlined" value={city} onChange={handleChange} required />
                <br />
                <br />
                <Button variant="outlined" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>no such place found</p>}
            </form>
        </div>
    );
}
