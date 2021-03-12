import { createStore, combineReducers } from "redux";
import food from "./reducers/Food";
import navi from "./reducers/Navigation";

const configureStore = () => createStore(combineReducers(
    {
        food,
        navi
    }
));


export default configureStore;