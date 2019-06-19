import React from 'react';
import Stock from './business/stocks.js';
import Tax from './business/tax.js';
import Businesses from './business/businesses.js';
import Money from './business/money.js';

class Business extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render (){
    const Items = [
      {name: 'Business Ideas', slug: 'ideas', component: <Businesses /> },
      {name: 'Money Concepts', slug: 'money', component: <Money /> },
      {name: 'Tax Tracking', slug: 'tax', component: <Tax /> },
      {name: 'Stock Trading', slug: 'stock', component: <Stock /> },
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Business;
