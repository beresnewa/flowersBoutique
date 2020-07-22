import flowers from '../flowers';


const initialState = {
    flowers: flowers,
}

export default (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'PLUS': {
            return {
                ...state,
                flowers: {
                    ...state.flowers,
                    [action.payload]: {
                        ...state.flowers[action.payload],
                        count: state.flowers[action.payload].count + 1
                    }
                }
            };
        }
        
        case 'MINUS': {
            return {
                ...state,
                flowers: {
                    ...state.flowers,
                    [action.payload]: {
                        ...state.flowers[action.payload],
                        count: state.flowers[action.payload].count - 1
                    }
                }
            }
        }

        case 'CLEAR': {
            return initialState
        }

        default: return state;
    }
}

