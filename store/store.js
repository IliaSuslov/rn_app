import { createStore, combineReducers } from "redux";
import food from "./reducers/Food";

const configureStore = () => createStore(combineReducers(
    {
        food,
    }
));


export default configureStore;