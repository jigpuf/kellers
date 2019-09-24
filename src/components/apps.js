import React from 'react';
import Paycheck from './apps/paycheck.js'
import Dice from './apps/dice.js';

class Apps extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const Items = [
      {name: 'Paycheck', slug: 'paycheck', component:<Paycheck /> },
      {name: 'Dice Rolling Tool', slug: 'dice', component: <Dice /> },
      {name: 'Battleship', slug: 'battleship' },
      {name: 'Tic-Tac-Toe', slug: 'ttt' },
      {name: 'Electronics Test', slug: 'et' },
      {name: 'Homeschool', slug: 'homeschool'},
      {name: 'Lawnmowing', slug: 'lawnmowing'},
      {name: 'Countdown', slug: 'countdown'},
      {name: 'Essential Oils', slug: 'oils'},
      {name: 'Spanish', slug: 'spanish'},
      {name: 'Scripture Keeper', slug: 'scripture'},
      {name: 'Companion Planting', slug: 'companion'},
      {name: 'Quotes', slug: 'quotes'},
      {name: 'Fitness Tracker', slug: 'fitness'},
      {name: 'Stocks', slug: 'stocks'},
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
export default Apps;
