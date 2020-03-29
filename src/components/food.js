import React from 'react';
import Drinks from './food/drinks.js';
import Appetizer from './food/appetizer.js'
import Breakfast from './food/breakfast.js'
import Ent from './food/ent.js'
import Desert from './food/desert.js'
import Soup from './food/soup.js'
import Sauce from './food/sauce.js'
import Ingredients from './food/ingredients.js'
import Nationality from './food/nationality.js'
import Diet from './food/diet.js'
import Spice from './food/spice.js'
import Restaurants from './food/restaurants.js';
import Storage from './food/storage.js'

class Food extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return() => {this.setState({tier1:item})
  }
  }

  render () {

    const Items = [
      {name: 'Drinks', slug: 'drinks', component:<Drinks />},
      {name: 'Appetizers', slug: 'appetizers', component:<Appetizer />},
      {name: 'Breakfast', slug: 'breakfast', component:<Breakfast /> },
      {name: 'Entree', slug: 'entree', component:<Ent /> },
      {name: 'Desert', slug: 'desert', component:<Desert /> },
      {name: 'Soup', slug: 'soup', component:<Soup /> },
      {name: 'Sauces', slug: 'sauces', component:<Sauce /> },
      {name: 'Ingredients', slug: 'ingredients', component:<Ingredients /> },
      {name: 'Nationality', slug: 'nationality', component:<Nationality /> },
      {name: 'Diet', slug: 'diet', component:<Diet /> },
      {name: 'Spice', slug: 'Spice', component:<Spice />},
      {name: 'Restaurants', slug: 'restaurants', component:<Restaurants /> },
      {name: 'Food Storage', slug: 'storage', component:<Storage /> },
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
