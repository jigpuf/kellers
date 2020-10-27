import React, {useState} from 'react';

const Dice = () => {
  const [sides,changeSides] = useState(20);
  const [output,rolled] = useState(0);
  const [dice,changeDice] = useState(1);
  const [adjuster,changeAdjuster] = useState(0);
  const [rollNumber, changeRollNumber] = useState(0);
  const [total, addTotal] = useState(0);

  const rollDice = () => {
    let finalNumber;
    finalNumber = Math.floor(Math.random() * Math.floor(sides))+1+adjuster;
    if(rollNumber<dice){
      changeRollNumber(rollNumber+1);
      addTotal(total+finalNumber);
    }
    else {
      changeRollNumber(0);
      rolled(0);
      addTotal(0);
      return;
    }
      rolled(finalNumber);
  }

  const forChangeSides = (event) => {
    const numberOfSides = parseInt(event.target.value,10);
    changeSides(numberOfSides);
  }

  const forChangeDice = (event) => {
    const numberOfDice = parseInt(event.target.value,10);
    changeDice(numberOfDice);
  }

  const forChangeAdjuster = (event) => {
    const rollAdjuster = parseInt(event.target.value,10);
    changeAdjuster(rollAdjuster);
  }


    return (
      <div>
        Sides to Dice:
        <input
          type="number"
          value={sides}
          onChange={forChangeSides}/>
          <br />
        Roll Adjuster:
        <input
          type="number"
          value={adjuster}
          onChange={forChangeAdjuster}/>
          <br />
        Number of Dice:
        <input
          type= 'number'
          value={dice}
          onChange={forChangeDice}/>
        <button
          onClick={rollDice}>Roll em'
        </button>
        <h1>Roll:{rollNumber}</h1>
        <h1>{output}</h1>
        <h1>Total:{total}</h1>
      </div>
    );
}
export default Dice;
//add dice adjuster, number of dice, set up for dice state like hero quest.
