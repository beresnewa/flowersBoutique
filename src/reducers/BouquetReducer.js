
const initialState = {
    activebouquet: null,
    inBasket: {},
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'RENDER_BOUQUET': {
            return {
                ...state,
                activebouquet: action.payload
            };
        }

        case 'PUT_IN_BASKET': {
            let newState = {};
            if(state.inBasket[state.activebouquet.name]){
                newState = {
                    ...state,
                    inBasket: {
                        ...state.inBasket,
                        [state.activebouquet.name]: {
                            ...state.inBasket[state.activebouquet.name],
                            count: state.inBasket[state.activebouquet.name].count + 1,
                        }
                    }
                }
            } else {
                newState = {
                    ...state,
                    inBasket: {
                        ...state.inBasket,
                        [state.activebouquet.name]: {
                            bouquet: state.activebouquet,
                            count: 1,
                        }
                    }
                };
            }

            localStorage.setItem('savedBouquets', JSON.stringify(newState.inBasket));
            return newState;
        }
        // Формат объекта:
        // inBasket: {
        //     [bouqetName]: {
        //         bouqet: {},
        //         count: 1
        //     },

        //     [bouqetName]: {
        //         bouqet: {},
        //         count: 1
        //     },
        // }
        
        case 'GET_BOUQUETS': {
            return {
                ...state,
                inBasket: action.payload
            }
        }

        case 'DELETE_ONE_FROM_BASKET': {
            if(state.inBasket[action.payload].count > 1) {
                let newState = {
                    ...state,
                    inBasket: {
                        ...state.inBasket,
                        [action.payload]: {
                            ...state.inBasket[action.payload],
                            count: state.inBasket[action.payload].count - 1,
                        }
                    }
                }
                localStorage.setItem('savedBouquets', JSON.stringify(newState.inBasket));
                return newState;
            } else {
                let newInBasket = { ...state.inBasket };
                delete newInBasket[action.payload];
                localStorage.setItem('savedBouquets', JSON.stringify(newInBasket));
                return {
                    ...state,
                    inBasket: newInBasket
                };
            }
        }

        case 'DELETE_ALL_FROM_BASKET': {
            let newInBasket = { ...state.inBasket };
            delete newInBasket[action.payload];
            localStorage.setItem('savedBouquets', JSON.stringify(newInBasket));
            return {
                ...state,
                inBasket: newInBasket
            };
        }

        default: return state;
    }
}




