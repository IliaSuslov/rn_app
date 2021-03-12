import { GET_FOOD, SET_GROUP } from '../actions/types'

const initialState = {
    item: -1,
    group: null
};

const Navigation = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GROUP':
            return { ...state, group: action.payload }
        case 'SET_ITEM':
            return { ...state, item: action.payload }
        case 'SET_ITEM_CLEAR':
            return { ...state, item: -1 }
        default:
            return state;
    }
};

export default Navigation;