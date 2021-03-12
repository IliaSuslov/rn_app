import { GET_FOOD, SET_GROUP } from '../actions/types'

const initialState = {
    address: 'Опалихинская, 46',
    groups: ['Пицца', 'Ролы', 'Супы', 'Салаты', 'Закуски'],
    group: null,
    pizza: [
        {
            image: require('../../images/pizza.png'),
            rating: '4',
            name: 'С копчёной курицей',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
        },
        {
            image: require('../../images/sushi.png'),
            rating: '4.8',
            name: 'Мясная',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
        },
        {
            image: require('../../images/pizza.png'),
            rating: '3',
            name: 'Сырная',
            desc: 'Копченая куриная грудка, помидоры и соленые огурцы- новое видение пиццы от наших шеф-поваров',
            addons: ['Острое масло к пицце 20гр', 'Больше кетчупа'],
            price: '630 ₽',
            mass: '450 г',
        },
    ]


};

const Food = (state = initialState, action) => {
    // console.log({ action });
    switch (action.type) {
        case 'SET_GROUP':
            return { ...state, group: action.payload }
        case GET_FOOD:
            return { ...state }
        default:
            return state;
    }
};

export default Food;