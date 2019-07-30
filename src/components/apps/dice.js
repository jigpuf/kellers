import React from 'react';

class Dice extends React.Component {
  state ={
    number: 0,
    amount:1,
    adjustment: 0,
    output: undefined,
  }
  roller = () => {
    const finalNumber = Math.floor(Math.random() * Math.floor(this.state.number))+1 + this.state.adjustment;
    return this.setState({output:finalNumber});
  }
  changeNumber = (event) => {
    const numberOfSides = parseInt(event.target.value,10);
    return this.setState({number:numberOfSides});
  }
  changeAmount = (event) => {
    const numberOfSides = parseInt(event.target.value,10);
    return this.setState({number:numberOfSides});
  }
  changeAdjuster = (event) => {
    const adjust = parseInt(event.target.value,10);
    return this.setState({adjustment:adjust});
  }

  render () {
    return (
      <div>
        Sides to Dice:
        <input id='sides' type="number" value={this.state.number} onChange={this.changeNumber}/><br />
        Number of dice:
        <input id='amount' type="number" value={this.state.amount} onChange={this.changeAmount}/><br />
        Adjuster:
        <input id='adjuster' type='number' value={this.state.adjustment} onChange={this.changeAdjuster}/><br />
        <button id='btn' onClick={this.roller}>Roll em'</button>
        <h4>{this.state.output}</h4>
        <table>
          <tr>
          </tr>
            <th>Die</th>
            <th>Roll</th>
          <tr>
            <td>Die 1</td>
            <td></td>
          </tr>
          <tr>
            <td>Die 2</td>
            <td></td>
          </tr>
          <tr>
            <td>Die 3</td>
            <td></td>
          </tr>
          <tr>
            <td>Die 4</td>
            <td></td>
          </tr>
          <tr>
            <td>Die 5</td>
            <td></td>
          </tr>
          <tr>
            <td>Die 6</td>
            <td></td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
          </tr>
          <tr>
            <td>Adjustment</td>
            <td></td>
          </tr>
          <tr>
            <td>Total + Adj</td>
            <td></td>
          </tr>

        </table>
      </div>
    );
  }
}
//Need to add number of dice
export default Dice;
/*
This component is a class extension of the react app.  The states are things
that can be used in events.  There are two methods that belong to the Dice class.
When this component is called, it first renders the HTML. The input chooses its
value as the state.number which would be 6.  onChange is an event handler.  When
the change happens, it calls the function changeNumber.
It has the event handler passed in as a parameter.  The fat arrow allows
information from the Dice class enter into the function in order to bypass the
borders of the function.  That allows access to the states.  A const is created
which takes on the new number in the input.  It is the event where it happened
and it uses the value with a base of 10.  It returns a change to the number state
to match the new value in the number state.
The adjuster input acts the same way and uses the adjustment state.
Once the button is clicked, the roller function is called.  a const is created
which takes what is currently in the number state and adds to it.  It then sets
the state of whatever to the new number.
The final div holds a place for the value of the output state, which was changed
with the button click.
*/
