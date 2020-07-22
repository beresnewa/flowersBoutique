import React from 'react';
import logo from './logo.png';
import './style.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flowers Boutique
        </p>
        <div className="bouquetsList">В нашей букетерии вы можете заказать букеты из:
          <ul>
            <li>5 Red Pions</li>
            <li>5 Salmon Pions</li>
            <li>9 White Pions</li>
            <li>9 Vanila Pions</li>
            <li>15 Rose Pions</li>
            <li>5 Nicole Pions with 1 Hydrangea</li>
            <li>1 Hydrangea</li>
            <li>3 Hydrangeas</li>
            <li>Combo1 : 3 Blue Tulips, 1 Spray Rose, 3 Rose Pions </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
