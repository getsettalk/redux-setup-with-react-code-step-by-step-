import {ADD_TO_CART}  from '../Constants';
export  const addToCart = (data)=>{
    // console.log("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}
// you may create many function like that 