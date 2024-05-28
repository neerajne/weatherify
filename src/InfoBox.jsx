import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL = "https://media.istockphoto.com/id/491701259/photo/blue-sky-with-sun.jpg?s=1024x1024&w=is&k=20&c=25PGqBoS0T8lNfSJNxXcK48aSR62iSWw69CBxVBM4jw="
    const RAIN_URL = "https://cdn.pixabay.com/photo/2021/08/14/05/33/raindrop-6544618_1280.jpg";
    const HOT_URL="https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg";
    const COLD_URL="https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=600";
    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80?
          RAIN_URL : info.temp>18?
          HOT_URL:COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity > 80?
            <IconButton aria-label="settings">
            <ThunderstormIcon/>
          </IconButton> 
          : info.temp>18?
          <IconButton aria-label="settings">
            <WbSunnyIcon/>
          </IconButton>
          :<IconButton aria-label="settings">
            <AcUnitIcon />
          </IconButton>
          }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels Like = {info.feelsAlike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>       </div>
    )
}