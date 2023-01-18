import "./App.css";
import { useEffect, useState} from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherServices"

function App() {
const [query, setQuary]= useState({q: 'berlin'})
const [unit, setUnits]=useState('metric');
const [weather,setWeather] = useState(null)


useEffect(()=>{
  const fetchWeather = async()=>{
    const data = await getFormattedWeatherData({q:"london"})
    console.log(data)
   }
   
   fetchWeather()
},[])






  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 
      from-cyan-700 to-blue-700`}
    >
      <TopButton />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails/>
      <Forecast title= "Hourly forecast "/>
      <Forecast title= "Daily forecast "/>
    </div>
  );
}

export default App;
