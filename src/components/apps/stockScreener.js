import React, {useState} from 'react';

const StockScreener = () => {
  const [spread,setSpread] = useState({high:100, low:0});
  const [startLow,setStartLow] = useState(null);



  const changeSpread = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value,10);
    setSpread({...spread, [name]:value});
  }
  const changeStartLow = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value,10);
    setStartLow(value);
  }
    return (
      <div>
      Symbol:<input
        name="symbol"
        type="text"
        value=""/>
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
        value={startLow}
        onChange={changeStartLow}/>
        <br />
      Spread:{spread.high-spread.low}<br />
      Spread Percentage&darr;:{((spread.high-spread.low)/spread.high)*100}%<br />
      Percent Change&uarr;:{((spread.low-startLow)/startLow)*100}%<br />
      </div>

    );
}
export default StockScreener;
