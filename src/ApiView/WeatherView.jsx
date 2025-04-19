import React from 'react'

// export default function WeatherView(props) {
//   return (
//     <div>
        
//         <p> city : {props.city} </p>
//         <p>Chance of rain: {props.rain}</p>
      
//     </div>
//   )
// }


export default function WeatherView({ city, chanceOfRain }) {
    return (
      <div>
        <h3>City: {city}</h3>
        <p>Chance of Rain: {chanceOfRain}</p>
      </div>
    );
  }
  