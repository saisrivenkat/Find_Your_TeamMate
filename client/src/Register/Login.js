import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../images/logo.png'
const Login=({settoken,setuser})=>{
    const navigate = useNavigate();
    const [email,setemail] = useState();
    const[pwd,setpwd] = useState();

    const submit=async(e)=>{
        e.preventDefault();
        const payload = {
            email,
            password:pwd
        }
        try {
            const response = await fetch('http://localhost:5000/user/login', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(payload)
             });
             const data = await response.json();
             console.log(data);
             setuser(data);
             if(data.token){
                console.log(data.token);
                settoken(data.token);
                navigate('/dashboard')
             }
             console.log(data);
           } catch(error) {
              console.log(error)
             } 

        

    }
    return(
        <>
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
                  <input id="name" type="text"  />
                  </div>
                  <div>
                    <label htmlFor='email'>Email</label>
                  <input id="email" type="text"  />
                  </div>
                  <div>
                    <label htmlFor='password'>Password</label>
                  <input id='password' type="text"  />
                  </div>
                  <div>
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                  <input id='confirmpassword' type="text" />
                  </div>
                  <button>Register</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Login;