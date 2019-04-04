import React from 'react';

class Menu extends React.Component {
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

    const menuItems = [
      {name: 'Drinks', slug: 'drinks' },
      {name: 'Appetizers', slug: 'appetizers' },
      {name: 'Breakfast', slug: 'breakfast' },
      {name: 'Entree', slug: 'entree' },
      {name: 'Desert', slug: 'desert' },
      {name: 'Soup', slug: 'soup' },
      {name: 'Sauces', slug: 'sauces' },
      {name: 'Ingredients', slug: 'ingredients' },
      {name: 'Nationanlity', slug: 'nationality' },
      {name: 'Clear', slug: 'clear' },
    ];
//Create array to build buttons
  const renderMenuItems = menuItems.map(item =>{
    return(
        <button
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}
        </button>
      )
    }
  )
    return(
      <ul>
        {renderMenuItems}
        <hr />
      </ul>
    )

  }

}
export default Menu;
