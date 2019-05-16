import React from 'react';
import Fire from './spellItems/fire.js';

class SpellItems extends React.Component {
  state = {
    tier2: undefined,
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
    }
  }
  render () {
    const Items = [
      {name:'Fire', slug:'fire', component: <Fire />},
      {name:'Water', slug:'water'},
      {name:'Wind', slug:'wind'},
      {name:'Earth', slug:'earth'},
      {name:'Light', slug:'light'},
      {name:'Dark', slug:'dark'},
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier2(item.slug)}
          className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
        >{item.name}</button>
      )
    });
    const tier2 = Items.filter(item => {
      return this.state.tier2 === item.slug;
    });
    const renderTier3Component = tier2[0] && tier2[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier3Component}
      </div>
    );
  }
}

export default SpellItems;
