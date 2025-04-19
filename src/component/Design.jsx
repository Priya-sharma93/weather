import React from 'react'
import img1 from 'C:/Users/asus/Desktop/React JS/project42/src/images/sun.jpg'

export default function Design(props) {
  return (
    <div className='container'>
      <div className='row m-2'>
        <h3>Air Conditions</h3>
       
        <h1> city:{props.name} </h1>
        <p>Chance of Rain:{props.description}</p>
        <img src={props.photo} style={{"width":"50%","height":"50%","margin":"auto"}}/>
        <h2 style={{"margin":"10px"}}>temp:{props.temp}</h2>
      </div>
      <div className='row  justify-content-around'>
        <div className='col-md-4 '>
          <p>Speed<br/> {props.speed}</p>
        </div>
        <div className='col-md-4'>
          <p>WIND: <br/> {props.deg}</p>
        </div>
      </div>
    </div>
  )
}
