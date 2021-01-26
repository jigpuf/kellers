import React, {useState} from 'react';

const StockScreener = () => {
  const [symbol,setSymbol]= useState(null);
  const [symbol1,setSymbol1]= useState(null);
  const [symbol2,setSymbol2]= useState(null);
  const [symbol3,setSymbol3]= useState(null);
  const [spread,setSpread] = useState({high:100, low:0, bottom:0});
  /*
  const [high, setHigh]= useState(null);
  const [low, setLow]= useState(null);
  const [bottom, setBottom]= useState(null);
  */
  const [saveSymbol, setSaveSymbol]= useState(null);
  const [saveHigh, setSaveHigh]= useState(null);
  const [saveLow, setSaveLow]= useState(null);
  const [saveBottom, setSaveBottom]= useState(null);

  const [saveSymbol1, setSaveSymbol1]= useState(null);
  const [saveHigh1, setSaveHigh1]= useState(null);
  const [saveLow1, setSaveLow1]= useState(null);
  const [saveBottom1, setSaveBottom1]= useState(null);

  const [saveSymbol2, setSaveSymbol2]= useState(null);
  const [saveHigh2, setSaveHigh2]= useState(null);
  const [saveLow2, setSaveLow2]= useState(null);
  const [saveBottom2, setSaveBottom2]= useState(null);

  const [saveSymbol3, setSaveSymbol3]= useState(null);
  const [saveHigh3, setSaveHigh3]= useState(null);
  const [saveLow3, setSaveLow3]= useState(null);
  const [saveBottom3, setSaveBottom3]= useState(null);



  const changeSymbol = (event) => {
    const value = event.target.value;
    setSymbol(value);
  }
/*
const changeSpread = (event) => {
  const name = event.target.name;
  const value = parseInt(event.target.value,10);
  setSpread({...spread,[name]:value});
}
*/
  const changeSpread = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value,10);
    setSpread({...spread,[name]:value});
  }
  const saver = () =>{
    setSaveSymbol(symbol);
    setSaveHigh(spread.high);
    setSaveLow(spread.low);
    setSaveBottom(spread.bottom);
  }
  const saver1 = () =>{
    setSaveSymbol1(symbol);
    setSaveHigh1(spread.high);
    setSaveLow1(spread.low);
    setSaveBottom1(spread.bottom);
  }
  const saver2 = () =>{
    setSaveSymbol2(symbol);
    setSaveHigh2(spread.high);
    setSaveLow2(spread.low);
    setSaveBottom2(spread.bottom);
  }
  const saver3 = () =>{
    setSaveSymbol3(symbol);
    setSaveHigh3(spread.high);
    setSaveLow3(spread.low);
    setSaveBottom3(spread.bottom);
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
        name="bottom"
        type="number"
        value={spread.bottom}
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
            <td>{((spread.low-spread.bottom)/spread.bottom)*100}%</td>
          </tr>
        </table>
        <br />
        <br />
        <br />

        <table>
          <tr>
            <th>Symbol</th>
            <th>Spread</th>
            <th>Spread%&darr;</th>
            <th>Percent Change&uarr;</th>
            <th>Save</th>
          </tr>
          <tr>
            <td>{saveSymbol}</td>
            <td>{(saveHigh-saveLow)}</td>
            <td>{((saveHigh-saveLow)/saveHigh)*100}%</td>
            <td>{((saveLow-saveBottom)/saveBottom)*100}%</td>
            <td><button onClick={saver}>save</button></td>
          </tr>
          <tr>
            <td>{saveSymbol1}</td>
            <td>{(saveHigh1-saveLow1)}</td>
            <td>{((saveHigh1-saveLow1)/saveHigh1)*100}%</td>
            <td>{((saveLow1-saveBottom1)/saveBottom1)*100}%</td>
            <td><button onClick={saver1}>save</button></td>
          </tr>
          <tr>
            <td>{saveSymbol2}</td>
            <td>{(saveHigh2-saveLow2)}</td>
            <td>{((saveHigh2-saveLow2)/saveHigh2)*100}%</td>
            <td>{((saveLow2-saveBottom2)/saveBottom2)*100}%</td>
            <td><button onClick={saver2}>save</button></td>
          </tr>
          <tr>
            <td>{saveSymbol3}</td>
            <td>{(saveHigh3-saveLow3)}</td>
            <td>{((saveHigh3-saveLow3)/saveHigh3)*100}%</td>
            <td>{((saveLow3-saveBottom3)/saveBottom3)*100}%</td>
            <td><button onClick={saver3}>save</button></td>
          </tr>
        </table>

      </div>
    );
}
export default StockScreener;
