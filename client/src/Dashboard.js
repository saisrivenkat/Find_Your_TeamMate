import React, { useEffect, useState } from 'react';
import UserPosts from './UserPosts';
import{useDispatch,useSelector} from 'react-redux';

const Dashboard=()=>{
   
    const[refresh,setrefresh] = useState(false)
    const dispatch = useDispatch();

    const user = useSelector(state=>state.user);
    const posts  = useSelector(state=>state.posts);

    useEffect(()=>{
        const post_fetch=async()=>{
            try {
                const response = await fetch('http://localhost:5000/post/getallPosts');
                 const data = await response.json();
                 console.log(data);
                 //data.filter(post=>post._id!=user.id)
                
                 dispatch({type:'POSTS',payload:data});
               } catch(error) {
                  console.log(error)
                 } 
        }
        
        post_fetch();
    },[refresh])
    const Apply=async(id,post)=>{
        const payload={
          name:"testogin"
        }
console.log(payload)
        console.log(id)
        try{
            const response = await fetch('http://localhost:5000/user/userapply',{
                method:'PUT',
                body:JSON.stringify(post),
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`,
                }
            });
            const data = await response.json();
            console.log(data);
            setrefresh(!refresh)
        }catch(err){

        }
        try{
            const response = await fetch(`http://localhost:5000/post/apply/${id}`,{
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization:`Bearer ${user.token}`,
                }   
            });
            const data = await response.json();

            console.log(data);

        }catch(err){
            console.log(err)
        }
        
    }
    if(!user){
        return(
            <>
            <h1>Please login in</h1>
            </>
        )
    }
    return(
        <>
        <h1>Dashboard</h1>
        {posts.filter(post=>  post.user !== user._id).map((post)=>{
            return(
                <>
                <p>{post.title}</p>
                <button onClick={()=>Apply(post._id,post)}>Apply</button>
                </>
            )
        })}
        <UserPosts token={user.token} user={user} />
        </>
    )
}
export default Dashboard;