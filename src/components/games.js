import React from 'react';

class Games extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1  = (item) => {
    return() => {this.setState({tier1:item})}
  }
  pickTier2 = (item) => {
    return() => {this.setState({tier1:item})}
  }

  render () {
    const gamesItems = [
    {name: 'D&D etc.', slug: 'dd' },
    {name: 'Dice Rolling Tool', slug: 'dice' },
    {name: 'Battleship', slug: 'battleship' },
    {name: 'Tic-Tac-Toe', slug: 'ttt' },
    {name: 'Charachter Creation', slug: 'character' },
    {name: 'Spells', slug: 'spells' },
    {name: 'Clear All', slug: 'clear' },
  ]
  const renderGamesItems = gamesItems.map(item =>{
    return (
      <button
        onClick={this.pickTier1(item.slug)}
        className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
      >{item.name}
      </button>
    )
    })
  return (
    <ul>
      {renderGamesItems}
      <hr />
    </ul>
  )
}
}
export default Games;
