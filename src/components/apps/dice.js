import React, {useState} from 'react';

const Dice = () => {
  const [output,setOutput] = useState([]);
  const [options,setOptions] = useState({sides:20, dice:5, adjuster:0});
  const [classism,setClassism] = useState(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * options.sides)+1+options.adjuster;
    const rollArray = [...output,roll];
    const doneValue = 'done';
    //spread operator looks at output[], copies array elements and adds new element = to value of finalNumber
    if(output.length<options.dice){
      setOutput(rollArray);
    }
    else{
      setClassism(doneValue);
    }
  }
  const clearButton = () =>{
    setOutput([]);
    setClassism('null');
  }
  const changeOptions = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value,10);
    setOptions({...options, [name]:value});
  }


  const rollTable = output.map((number,index) =>{
    return (
      <tr>
        <td>{index+1}</td>
        <td>{number}</td>
      </tr>
    )
  })

  const total = output.reduce((total,number) =>{
    return total+number;
  },0);


//0 is initial value of total.  Total is the running total and number is the element
    return (
      <div>
        Sides to Dice:
        <input
          name="sides"
          type="number"
          value={options.sides}
          onChange={changeOptions}/>
          <br />
        Roll Adjuster:
        <input
          name="adjuster"
          type="number"
          value={options.adjuster}
          onChange={changeOptions}/>
          <br />
        Number of Dice:
        <input
          name="dice"
          type= 'number'
          value={options.dice}
          onChange={changeOptions}/>
        <button
          onClick={rollDice}>Roll em'
        </button>
        <table>
          <tr>
            <th>Roll</th>
            <th>Reading</th>
          </tr>
          {rollTable}
          <tr>
            <td>Total</td>
            <td className={classism}><span >{total}</span></td>
          </tr>
        </table>
        <button
          onClick={clearButton}>Clear
        </button>
      </div>

    );
}
export default Dice;
//add dice adjuster, number of dice, set up for dice state like hero quest.

//<h1>Roll:{rollNumber}</h1>
