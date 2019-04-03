import React from 'react';

class Games extends React.Component {
  render () {
    return (
      <div>
        <div id="gamesTier1">
          <button class="tier1">D&D etc.</button>
          <button class="tier1">Dice Rolling Tool</button>
          <button class="tier1">Battleship</button>
          <button class="tier1">Tic-Tac-Toe</button>
          <button class="tier1">Character Creation</button>
          <button class="tier1">Spell Ideas</button>
          <button class="tier1">Clear All</button>
          <hr />
        </div>
        <div id="menuTier2"></div>
        <div id="menuTier3"></div>
      </div>
    )
  }

}
export default Games;
