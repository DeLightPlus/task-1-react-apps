//import logo from '/Users/Training Room/Desktop/React101/employee-app/src/logo.svg'
//import React, { Component } from 'react';
import  { useState } from 'react';
import logo from '../logo.svg';

export function Welcome(props)
{
  const [employee, setEmployee] = useState("");

  const [empl_ID, setEmpl_ID] = useState("");
  const [empl_name, setEmpl_name] = useState("");
  const [empl_surname, setEmpl_surname] = useState("");
  const [empl_email, setEmpl_email] = useState("");
  const [empl_phone, setEmpl_phone] = useState("");


  function signup_Empl()
  {
    props.signup_Empl(empl_ID, empl_name, empl_surname)
  }

  
    return (
      <>        
        <div className='Form-Container'>
          <form>
              <input type="text" placeholder='Name' 
                onChange={(event)=> setEmpl_name(event.target.value)} />          
              
              <input type="text" placeholder='Surname' 
                onChange={(event)=> setEmpl_surname(event.target.value)} />

              <label> Please Upload Your Photo</label>
              <input className='file' type="file" accept='./image' />   

              <select>
                <option>Information Technology</option>
                <option>Human Resources</option>
              </select>   

              <input type="text" placeholder='Employee ID' onChange={(event)=> setEmpl_ID(event.target.value)} /> 

              <button className="MyBtn One" onClick={signup_Empl()}> 
                Sign-Up </button>
          </form>
        </div>

        <div className="Form-Container registerer">          
          <form className='Form-Actual registerer'>
            <h2>Register</h2> 
            <div>
              <input placeholder='Search'/>
              <button className='MyBtn One'>Search</button>
            </div>

            <table>
              <tr className='T_Header'> 
                <td className='DP'></td>                
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Department</td>                
              </tr>
            </table>

         
                         
            <table>
              <tr>
                <td className='DP'>
                  <img src={logo} alt="INITIALS"/> 
                </td>                
                <td>KP Matlakala</td>
                <td>kay@eg.md</td>
                <td>07222222222</td>
                <td>Information Technology</td>                 
              </tr>
            </table>
            <table>
                <tr className='ClockIn'>
                   <td>Empl_ID: 123456 | Time-in: 2024/07/04 , 08:00:00AM | 
                      <button className='MyBtn'>update</button> 
                      <button className='MyBtn'>remove</button>
                    </td>                                     
                </tr>
            </table>

            <table>
              <tr>
                <td className='DP'>
                  <img src={logo} alt="INITIALS"/> 
                </td>                
                <td>KP Matlakala</td>
                <td>kay@eg.md</td>
                <td>07222222222</td>
                <td>Information Technology</td>                 
              </tr>
            </table>
            <table>
                <tr className='ClockIn'>
                   <td>Empl_ID: 123456 | Time-in: 2024/07/04 , 08:00:00AM | 
                      <button className='MyBtn'>update</button> 
                      <button className='MyBtn'>remove</button>
                    </td>                                     
                </tr>
            </table>
            
        
          </form>

        </div>
      </>
    )
  
}
