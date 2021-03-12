import { GET_FOOD, SET_GROUP, SET_ITEM } from './types';

export const getFood = (food) => (
    {
        type: GET_FOOD,
        data: food
    }
)

export const setGroup = (food) => (
    {
        type: SET_GROUP,
        data: group
    }
)
export const setItem = (food) => (
    {
        type: SET_ITEM,
        data: item
    }
)