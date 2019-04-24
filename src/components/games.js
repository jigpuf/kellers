import React from 'react';
import SpellItems from './games/spellItems.js';

class Games extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {
    const tier1Items = [
      {name: 'Game List', slug: 'gameList' },
      {name: 'Character Creation', slug: 'character' },
      {name: 'Spells', slug: 'spells', component: <SpellItems />},
      {name: 'Battle Rules', slug: 'battle' },
      
    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
  }
}
export default Games;
