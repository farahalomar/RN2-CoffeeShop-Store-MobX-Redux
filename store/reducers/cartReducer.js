import * as actionTypes from "../actions/types";
const initialState = {
    items: [],

    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COFFEESHOPS:
        return {
            ...state,
            items: action.payload,
            
        };

        case actionTypes.COFFEESHOPS_LOADING:
        return {
            ...state,
            items: [action.payload].concat(state.coffee)
        };
        default:
        return state;
    }
    };

    export default reducer;