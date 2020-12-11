import React, {useState} from 'react';
import Stock from './business/stocks.js';
import Tax from './business/tax.js';
import Businesses from './business/businesses.js';
import Money from './business/money.js';
import ButtonMaker from './buttonMaker.js';

const Business = () => {

    const items = [
      {name: 'Business Ideas', slug: 'ideas', component: <Businesses /> },
      {name: 'Money Concepts', slug: 'money', component: <Money /> },
      {name: 'Tax Tracking', slug: 'tax', component: <Tax /> },
      {name: 'Stock Trading', slug: 'stock', component: <Stock /> },
    ]
    return (
      <div>
      <ButtonMaker buttons={items}/>
      </div>
    );
  }


export default Business;
