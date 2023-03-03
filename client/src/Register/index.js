import React,{useState} from 'react';
import logo from '../images/logo.png'
import './register.css'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
const Register=()=>{
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[pwd,setpwd]=useState();
    const dipatch = useDispatch();
    const navigate = useNavigate();

    const Submit=async(e)=>{
        e.preventDefault();
        const payload={
            name,
            email,
            password:pwd
        }
        try {
            const response = await fetch('http://localhost:5000/user/register', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(payload)
             });
             const data = await response.json();
             console.log(data);
             dipatch({type:'USER',payload:data});
             navigate("/login");
           } catch(error) {
              console.log(error)
             } 

    }

    return(
        <div className='register'>
          <div className='register-wrapper'>
            <div className='register-pic'>
            <img width="550" src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png" alt="register-svg"/>
           
            </div>
            <div className='register-content'>
              <div className='content-head'>
                <div className='img'>
                <img src={logo} alt="logo" width='150' />
                </div>
                <h1>Register</h1>
                <p>Find the Project made for you.</p>
              </div>
              <div className='content'>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input value={name} id="name" type="text"  onChange={(e)=>setname(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor='email'>Email</label>
                  <input value={email} id="email" type="text" onChange={(e)=>setemail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor='password'>Password</label>
                  <input value={pwd} id='password' type="text" onChange={(e)=>setpwd(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                  <input id='confirmpassword' type="text" />
                  </div>
                  <button onClick={Submit}>Register</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register;