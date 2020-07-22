const initialState = {
    name: '',
    email: '',
    phone: '',
    adress: ''
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'VALUE_NAME': {
            return {
                ...state,
                name: action.payload
            };
        }

        case 'VALUE_EMAIL': {
            return {
                ...state,
                email: action.payload
            };
        }

        case 'VALUE_PHONE': {
            return {
                ...state,
                phone: action.payload
            };
        }

        case 'VALUE_ADRESS': {
            return {
                ...state,
                adress: action.payload
            };
        }

        default: return state;
    }
}
