import { AppleFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const UserPosts=({token,user})=>{
    const[posts,setposts] = useState();
    useEffect(()=>{
        const user_posts=async()=>{
            try {
                const response = await fetch('http://localhost:5000/post/getPosts',{
                    headers:{Authorization:`Bearer ${token}`}
                });
                 const data = await response.json();
                 console.log(data);

                 setposts(data);
               } catch(error) {
                  console.log(error)
                 } 
        }
        user_posts()
    },[])
    const render=()=>{
        return(
            <>
            {posts ?
            posts.map((post)=>{
                let length=post.applicants.length
                return(
                    <>
                    <p>{post.title}</p>
                    <span>{length}</span>
                    
                    </>
                )
                }):
            "no data avaliabe"
            }
            </>
        )
    }
    return(
        <>
        <h1>User Posts</h1>
        {render()}
        <h1>Applications</h1>
        {user.applied.map((pos)=>{
            return(
                <>
                <h1>{pos.title}</h1>
                </>
            )
        })}
        
        </>
    )
}
export default UserPosts;