export const plusAction =(name)=> (
    {
        type: 'PLUS',
        payload: name,
    }
);

export const minusAction =(name)=> (
    {
        type: 'MINUS',
        payload: name,
    }
);

export const clearAction =(name)=> (
    {
        type: 'CLEAR',
        payload: name,
    }
);