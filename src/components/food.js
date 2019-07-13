import React from 'react';
import Drinks from './food/drinks.js';
import Desert from './food/desert.js'
import Restaurants from './food/restaurants.js';
import Spice from './food/spice.js'

class Food extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return() => {this.setState({tier1:item})
  }
  }
//This is function to change tier1 state
//There needs to be state changes to bring up new buttons

  render () {

    const Items = [
      {name: 'Drinks', slug: 'drinks', component:<Drinks />},
      {name: 'Appetizers', slug: 'appetizers' },
      {name: 'Breakfast', slug: 'breakfast' },
      {name: 'Entree', slug: 'entree' },
      {name: 'Desert', slug: 'desert', component:<Desert /> },
      {name: 'Soup', slug: 'soup' },
      {name: 'Sauces', slug: 'sauces' },
      {name: 'Ingredients', slug: 'ingredients' },
      {name: 'Nationality', slug: 'nationality' },
      {name: 'Diet', slug: 'diet' },
      {name: 'Spice', slug: 'Spice', component:<Spice />},
      {name: 'Restaurants', slug: 'restaurants', component:<Restaurants /> },
    ];
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
export default Food;
