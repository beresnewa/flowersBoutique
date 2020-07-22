import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main';
import RenderBouquetPage from '../pages/RenderBouquet';
import BasketPage from '../pages/Basket';
import NavBar from '../components/NavBar';
import CheckoutPage from '../pages/Checkout';
import {getBouquets} from '../actions/BouquetAction';
import {ROUTES} from '../const';

const Navigator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedBouquets = localStorage.getItem('savedBouquets');
        if (savedBouquets) {
          dispatch(getBouquets(JSON.parse(savedBouquets)));
        }   
    }, []);

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path={ROUTES.RENDERBOUQUET} component={RenderBouquetPage}/>
                <Route path={ROUTES.BASKET} component={BasketPage}/>
                <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
                <Route path={ROUTES.MAIN} component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigator;