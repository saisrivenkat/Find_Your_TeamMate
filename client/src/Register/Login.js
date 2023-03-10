import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login=()=>{
    const navigate = useNavigate();
    const [email,setemail] = useState();
    const[pwd,setpwd] = useState();
    const dipatch = useDispatch();

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
            dipatch({type:"USER",payload:data})
            navigate('/dashboard')
            console.log(data);
           } catch(error) {
              console.log(error)
             } 

        

    }
    return(
        <>
        <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
        <input type="password" paceholder="password" onChange={(e)=>setpwd(e.target.value)} />
        <button onClick={submit}>Submit</button>
        </>
    )
}

export default Login;