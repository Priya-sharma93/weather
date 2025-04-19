import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getWheather } from '../assets/ApiComp/GetWeatherApi';
import WeatherView from '../ApiView/WeatherView';
import Design from '../component/Design';

export default function Weather() {
    const [data,setData] = useState(null);
    const [path,setPath] = useState("https://openweathermap.org/img/wn/10d@2x.png");

    const changePhotoPath=(image)=>{
        let b=path;
        return b.replace("10d",image)
    }

    useEffect(()=>{
        //getWheather("dehradun").then((user)=>console.log(user))
        getWheather("dehradun").then((user)=>setData(user))
        // getWheather("wind").then((user)=>setData(user))
        // getWheather("weather").then((user)=>setData(user))
    },[])
  
  return (
    <div> 
      <Design name={data?.name} deg={data?.wind.deg}
      description={data?.weather[0].description} 
      temp={data?.main.temp}
      speed={data?.wind.speed}
      photo={changePhotoPath(data?.weather[0].icon)}
      /> 
          </div>
  )
}


