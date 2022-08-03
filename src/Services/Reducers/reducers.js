import { ADD_TO_CART,REMOVE_TO_CART } from '../Constants';
const initialState = {
    cartData: []
}
export default function cardItems(state = [], action) {
    // action automatically call internally
    // swtich for different- different condition 
    // action.type in type comming from action component
    switch(action.type) {
        case ADD_TO_CART:
            return [
                
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            state.pop();
            return [
                
                ...state,
               
            ]

        default:
            return state
    }


}
