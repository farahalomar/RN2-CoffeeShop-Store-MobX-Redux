import * as actionTypes from "../actions/types";
const initialState = {
    coffeeShops: [],
    loading: true,

    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COFFEESHOPS:
        return {
            ...state,
            coffeeshops: action.payload,
            loading: false,
            
        };

        case actionTypes.COFFEESHOPS_LOADING:
        return {
            ...state,
            coffeeshops: action.payload,
            loading: true,
        };
        default:
        return state;
    }
    };

    export default reducer;