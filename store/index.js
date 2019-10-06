import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import cartReducer from "./reducers/cartReducer";
import coffeeReducer from "./reducers/coffeeReducer";

const 
