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
    const gamesItems = [
      {name: 'D&D etc.', slug: 'dd' },
      {name: 'Dice Rolling Tool', slug: 'dice' },
      {name: 'Battleship', slug: 'battleship' },
      {name: 'Tic-Tac-Toe', slug: 'ttt' },
      {name: 'Character Creation', slug: 'character' },
      {name: 'Spells', slug: 'spells', component: <SpellItems />},
      {name: 'Clear All', slug: 'clear' },
    ]
    const renderGamesItems = gamesItems.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = gamesItems.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderGamesItems}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
  }
}
export default Games;
