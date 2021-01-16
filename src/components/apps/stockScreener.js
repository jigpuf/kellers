import React, {useState} from 'react';

const StockScreener = () => {
  const [spread,setSpread] = useState({high:100, low:0, startLow:0});
  const [symbol,setSymbol]= useState(null);
  
  const [saveSymbol, setSaveSymbol]= useState(null);
  const [saveHigh, setSaveHigh]= useState(null);
  const [saveLow, setSaveLow]= useState(null);
  const [saveStartLow, setSaveStartLow]= useState(null);



  const [saveSpread,setSaveSpread] = useState({high:0, low:0, startLow:0});



  const changeSymbol = (event) => {
    const value = event.target.value;
    setSymbol(value);
  }

  const changeSpread = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value,10);
    setSpread({...spread,[name]:value});
  }
  const saver = () =>{
    setSaveSymbol(symbol);
    setSaveHigh(spread.high);
    setSaveLow(spread.low);
    setSaveStartLow(spread.startLow);
  }


    return (
      <div>
      Symbol:<input
        type='text'
        value={symbol}
        onChange={changeSymbol}/>
        <br />
      High:<input
        name="high"
        type="number"
        value={spread.high}
        onChange={changeSpread}/>
        <br />
      Low:<input
        name="low"
        type="number"
        value={spread.low}
        onChange={changeSpread}/>
        <br />
      Start Low:<input
        name="startLow"
        type="number"
        value={spread.startLow}
        onChange={changeSpread}/>
        <br />
        <table>
          <tr>
            <th>Symbol</th>
            <th>Spread</th>
            <th>Spread%&darr;</th>
            <th>Percent Change&uarr;</th>
          </tr>
          <tr>
            <td>{symbol}</td>
            <td>{(spread.high-spread.low)}</td>
            <td>{((spread.high-spread.low)/spread.high)*100}%</td>
            <td>{((spread.low-spread.startLow)/spread.startLow)*100}%</td>
          </tr>
        </table>
        <br />
        <button onClick={saver}>save</button>
        <br />
        <br />
        <table>
          <tr>
            <th>Symbol</th>
            <th>Spread</th>
            <th>Spread%&darr;</th>
            <th>Percent Change&uarr;</th>
          </tr>
          <tr>
            <td>{saveSymbol}</td>
            <td>{(saveHigh-saveLow)}</td>
            <td>{((saveHigh-saveLow)/saveHigh)*100}%</td>
            <td>{((saveLow-saveStartLow)/saveStartLow)*100}%</td>
          </tr>

        </table>

      </div>
    );
}
export default StockScreener;
