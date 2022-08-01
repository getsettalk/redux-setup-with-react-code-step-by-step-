import { ADD_TO_CART } from '../Constants';
const initialState = {
    cartData: []
}
export default function cardItems(state = initialState, action) {
    // action automatically call internally
    // swtich for different- different condition 
    // action.type in type comming from action component
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: action.data
            }

        default:
            return state
    }
}
