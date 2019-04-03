import React from 'react';

class Menu extends React.Component {
  render () {
    return (
      <div>
        <div id="menuTier1">
          <button class="tier1">Drinks</button>
          <button class="tier1">Apetizers</button>
          <button class="tier1">Breakfast</button>
          <button class="tier1">Entree'</button>
          <button class="tier1">Desert</button>
          <button class="tier1">Soup</button>
          <button class="tier1">Sauces</button>
          <button class="tier1">Ingredients</button>
          <button class="tier1">Clear All</button>
          <hr />
          </div>
        <div id="menuTier2"></div>
        <div id="menuTier3"></div>
      </div>
    )
  }

}
export default Menu;
