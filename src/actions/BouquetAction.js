export const setBouquet = (oneBouquet) => (
    {
        type: 'RENDER_BOUQUET',
        payload: oneBouquet
    }
);

export const putInBasket = () => (
    {
        type:'PUT_IN_BASKET'
    }
);

export const getBouquets = (savedBouquets) => (
    {
        type:'GET_BOUQUETS',
        payload: savedBouquets
    }
);

export const deleteOneFromBasket = (nameBouquet) => (
    {
        type: 'DELETE_ONE_FROM_BASKET',
        payload: nameBouquet
    }
);

export const deleteAllFromBasket = (nameBouquet) => (
    {
        type: 'DELETE_ALL_FROM_BASKET',
        payload: nameBouquet
    }
);

