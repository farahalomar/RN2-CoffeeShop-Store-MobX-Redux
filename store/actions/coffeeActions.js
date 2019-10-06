import {GET_COFFEESHOPS, COFFEESHOPS_LOADING} from "./types.js";
import axios from "axios";

export const getCoffeeShops = () => {
    return async dispatch => {
    try {
        const res = await axios.get("http://178.128.114.232/api/?format=json");
        const shop = res.data;
        dispatch({ type: GET_COFFEESHOPS, payload: shop });
    }catch (err){
        console.error(err);
    }
    };
};

export const setCoffeeShopsLoading = () => {
    return async dispatch => {
    try {
        dispatch({ type: COFFEESHOPS_LOADING });
    }catch (err){
        console.error(err);
    }
    };
};
