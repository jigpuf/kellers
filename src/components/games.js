import React from 'react';

class Games extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
    }
  }

  render () {
    const spellItems = [
      {name:'Fire', slug:'fire'},
      {name:'Water', slug:'water'},
      {name:'Wind', slug:'wind'},
      {name:'Earth', slug:'earth'},
      {name:'Light', slug:'light'},
      {name:'Dark', slug:'dark'},
      {name:'Spoonal', slug:'spoonal'},
    ]
    const gamesItems = [
      {name: 'D&D etc.', slug: 'dd' },
      {name: 'Dice Rolling Tool', slug: 'dice' },
      {name: 'Battleship', slug: 'battleship' },
      {name: 'Tic-Tac-Toe', slug: 'ttt' },
      {name: 'Character Creation', slug: 'character' },
      {name: 'Spells', slug: 'spells', tier2: spellItems},
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
    const activeTier1Item = this.state.tier1 && gamesItems.filter(item => {
      return this.state.tier1 === item.slug;
    })
    const tier2 = activeTier1Item && (activeTier1Item[0].tier2 || []);
    const renderTier2 = tier2 && tier2.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier2(item.slug)}
          className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
        >{item.name}</button>
      )
    })
    return (
      <ul>
        {renderGamesItems}
        <hr />
        {renderTier2}
      </ul>
    )
  }
}
export default Games;
