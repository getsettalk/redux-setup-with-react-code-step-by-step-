import {ADD_TO_CART,REMOVE_TO_CART}  from '../Constants';
export  const addToCart = (data)=>{
    // console.log("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export  const removeToCart = ()=>{
    // console.log("action")
    
    return{
        type:REMOVE_TO_CART
    }
}
// you may create many function like that 