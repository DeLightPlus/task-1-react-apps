import React, { Component } from 'react';
import { useId, useState } from 'react';


import logo from '../logo.svg';

let imageSize = 90;
const user =
[ 
  {  userid: 1, name: 'Hedy Lamarr',  imageUrl: logo },
  {  userid: 2, name: 'HeNdy Lamarr',  imageUrl: logo }
]


export default function AboutPage(_name) 
{
  //const id = useId()
  
  const [url, setImgURl] = useState(logo);

  //let [id, setLogIn] = useState(0);

  const setProfile = () => 
  {
      <div className='about'>     
        <img className="avatar" 
        alt={ _name } 
        src={ url } 
        stye={{width: imageSize, height: imageSize }}
        />  
        <h3>{_name}</h3>
      </div>
  }

  return setProfile();
}


export function MyBtn() 
{
  return ( 
  <button className="MyBtn learnReact"> 
    <img src={logo} className="App-logo" alt="logo" /> 
    <a className="App-link" href="https://reactjs.org"  target="_blank" rel="noopener noreferrer">
    Learn React</a> 
  </button>
         );
}


/*
    

              <input type="text" placeholder='Email' 
                onChange={(event)=> setEmpl_email(event.target.value)} />   

              <input type="text" placeholder='Phone number' 
                onChange={(event)=> setEmpl_phone(event.target.value)} />


          */
