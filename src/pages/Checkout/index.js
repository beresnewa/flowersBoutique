import React from 'react';
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../const';
import { getValueName, getValueEmail, getValuePhone, getValueAdress } from '../../actions/CheckoutAction';
import './style.css';

const ChechoutPage = () => {
    let history = useHistory();

    const dispatch = useDispatch();
    const name = useSelector(state => state.checkout.name)
    const email = useSelector(state => state.checkout.email);
    const phone = useSelector(state => state.checkout.phone);
    const adress = useSelector(state => state.checkout.adress);

    const setName = (event) => {
        dispatch(getValueName(event.target.value));
    }

    const setEmail = (event) => {
        dispatch(getValueEmail(event.target.value));
    }

    const setPhone = (event) => {
        dispatch(getValuePhone(event.target.value));
    }

    const setAdress = (event) => {
        dispatch(getValueAdress(event.target.value));
    }

    const showMessage = () => {
        if(name?.length>0 && email?.length>0 && phone?.length>0 && adress?.length>0){
            swal("Заказ оформлен", "Наш менеджер с вами свяжется")
                .then(() => { 
                    return history.push(ROUTES.MAIN) 
            })
        } else {
            swal("Необходимо заполнить все поля")
        }
    }

    return (
        <div className="checkout-container">
            <form className="postcard" name="myForm">
                <div className="form-row">
                    <label htmlFor="name">Имя</label><input type="text" id="name" required value={name} onChange={setName}/>
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email</label><input type="email" id="email" required value={email} onChange={setEmail} />
                </div>
                <div className="form-row">
                    <label htmlFor="phone">Телефон</label><input type="phone" id="phone" required pattern="+[0-9]{3}-([0-9]{2})-[0-9]{3}-[0-9]{2}-[0-9]{2}" value={phone} onChange={setPhone}/>
                </div>
                <div className="form-row">
                    <label htmlFor="message">Адрес</label><textarea rows="2" id="message" required value={adress} onChange={setAdress}></textarea>
                </div>   
            </form>
            <button className="form-row-button" onClick={showMessage}>Подтвердить заказ</button>
        </div>  
    )
} 

export default ChechoutPage;