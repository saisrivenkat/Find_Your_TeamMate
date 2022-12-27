import React,{useState} from 'react';

const Register=()=>{
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[pwd,setpwd]=useState();
    const Submit=async(e)=>{
        e.preventDefault();
        const payload={
            name,
            email,
            password:pwd
        }
        try {
            const response = await fetch('http://localhost:5000/user', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(payload)
             });
             const data = await response.json();
             console.log(data);
           } catch(error) {
              console.log(error)
             } 

    }
    return(
        <div>
            <input placeholder="name" onChange={(e)=>setname(e.target.value)} />
            <input placeholder="email" onChange={(e)=>setemail(e.target.value)} />
            <input placeholder="password" onChange={(e)=>setpwd(e.target.value)} />
            <button onClick={Submit}>Register</button>
            </div>
    )
}

export default Register;