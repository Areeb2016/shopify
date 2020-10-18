import {ADD_FOOD, DELETE_FOOD} from '../actions/types'

const initialState = {
    data:[]
}

const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FOOD:
            return {
                ...state,
                data: state.data.concat({
                    key: Math.random(),
                    name: action.data
            })
        };
        case DELETE_FOOD:
            return{
                ...state,
                data: state.data.filter((item) => item.key !== action.key)
            };
        default:
            return state;
    }
}

export default foodReducer;