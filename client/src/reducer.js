export const intialstate={
    token:'',
    user:{},
    posts:[],
    applied:[]
}
export const reducer=(state=intialstate,action)=>{

    if(action.type === 'USER'){
        console.log(action.payload)
        return {...state,user:action.payload}
    } 
    if(action.type ==='POSTS'){
        return {...state,posts:action.payload}
    }
    return state;
}