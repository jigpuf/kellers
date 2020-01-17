import React from 'react';

class Tictac extends React.Component {
  render () {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
          <button id ='1a' class='tttButton'>    </button>
          <button id ='1b' class='tttButton'>    </button>
          <button id ='1c' class='tttButton'>    </button><br />
          <button id ='2a' class='tttButton'>    </button>
          <button id ='2b' class='tttButton'>    </button>
          <button id ='2c' class='tttButton'>    </button><br />
          <button id ='3a' class='tttButton'>    </button>
          <button id ='3b' class='tttButton'>    </button>
          <button id ='3c' class='tttButton'>    </button><br />
      </div>
    );
  }
}

export default Tictac;
