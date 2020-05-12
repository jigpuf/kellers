import React from 'react';

class Tictac extends React.Component {
  state ={
    a1:'.',
    a2:'.',
    a3:'.',
    b1:'.',
    b2:'.',
    b3:'.',
    c1:'.',
    c2:'.',
    c3:'.',
    turn:'X',
    winner:' ',
  }

  onClickButton = (button) => {
    this.setState({[button]:this.state.turn},this.turns);
//    this.checkWinner();
  }
  //[]: says to take parameter as the key in the specified object
  //set state second parameter is the callback function.  This causes the turns function to fire after rather than asyncrounously
  turns(){
    if(this.state.turn === 'X'){
      return this.setState({turn:'O'});
    }
    return this.setState({turn:'X'});
  }
/*
  checkWinner(){
    if(this.state.a1 === this.state.a2 && this.state.a1 === this.state.a3 ){
      this.setstate({winner:this.state.turn});
    }
  }
*/
/*
  resetTTT(){
    this.setState.({a1:'.'});
    this.setState.({a2:'.'});
    this.setState.({a3:'.'});
    this.setState.({b1:'.'});
    this.setState.({b2:'.'});
    this.setState.({b3:'.'});
    this.setState.({c1:'.'});
    this.setState.({c2:'.'});
    this.setState.({c3:'.'});
    this.setState.({turn:'X'});
    this.setState.({winner:' '});
  }
*/

  render () {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
          <button id ='a1' className='tttButton' onClick={() => this.onClickButton('a1')}>{this.state.a1}</button>
          <button id ='a2' className='tttButton' onClick={() => this.onClickButton('a2')}>{this.state.a2}</button>
          <button id ='a3' className='tttButton' onClick={() => this.onClickButton('a3')}>{this.state.a3}</button><br />
          <button id ='b1' className='tttButton' onClick={() => this.onClickButton('b1')}>{this.state.b1}</button>
          <button id ='b2' className='tttButton' onClick={() => this.onClickButton('b2')}>{this.state.b2}</button>
          <button id ='b3' className='tttButton' onClick={() => this.onClickButton('b3')}>{this.state.b3}</button><br />
          <button id ='c1' className='tttButton' onClick={() => this.onClickButton('c1')}>{this.state.c1}</button>
          <button id ='c2' className='tttButton' onClick={() => this.onClickButton('c2')}>{this.state.c2}</button>
          <button id ='c3' className='tttButton' onClick={() => this.onClickButton('c3')}>{this.state.c3}</button><br />
          <br />
          <br />
          <br />
          <div>{this.state.turn}'s Turn</div>
          <button id = 'resetButton' onClick = 'resetTTT()'>Reset</button>
          <span>{this.state.winner}</span>
      </div>

    );
  }
}

export default Tictac;
