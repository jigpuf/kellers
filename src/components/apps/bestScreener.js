import React, {useState} from 'react';

const x = 'http://clipart-library.com/image_gallery2/Red-Cross-Mark-Free-PNG-Image.png';
const check = 'https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_960_720.png';
const spreadArrow = 'https://cdn.pixabay.com/photo/2013/07/12/12/18/arrow-145532_960_720.png';
const gainArrow = 'https://cdn.pixabay.com/photo/2013/07/12/14/28/chart-line-148256_960_720.png'

const BetterScreener = () => {
  const [symbol,setSymbol]= useState(null);
  const [high,setHigh]= useState(null);
  const [low,setLow]= useState(null);
  const [start,setStart]= useState(null);
  const [price,setPrice]= useState(null);

  const [stocks,setStocks]= useState([]);

  const saveStock = () =>{
    const arr = [...stocks];
    arr.push({
      symbol:symbol,
      spread:high-low,
      spreadPercent:(((high-low)/high)*100).toFixed(1),
      change:(((low/start)*100)-100).toFixed(1),
      rise:(((high-low)/(price-low)-1)*100).toFixed(1)
    });
    setStocks(arr);
  }
  const deleteStock = (index) => {
    const arr = [...stocks];
    arr.splice(index,1);
    setStocks(arr);
  }
  const renderStocks = stocks.map((stock, index) => {
    return(
      <tr>
        <td>{stock.symbol}</td>
        <td>{stock.spread}</td>
        <td>{stock.spreadPercent}%</td>
        <td>{stock.change}%</td>
        <td>{stock.rise}%</td>
        <td><img onClick={()=>deleteStock(index)} width='10' src={x}/></td>
      </tr>
    );
  })



  return(
    <div>
      <h2>Best Stock Screener</h2>
        <strong>Stock:</strong><br/>
        Symbol:<input
          type='text'
          onChange={event=>setSymbol(event.target.value)}/>
          <br />
        High Line:<input
          type='number'
          onChange={event=>setHigh(event.target.value)}/>
          <br />
        Low Line:<input
          type='number'
          onChange={event=>setLow(event.target.value)}/>
          <br />
        Start of Low Line:<input
          type='number'
          onChange={event=>setStart(event.target.value)}/>
          <br />
        Price:<input
          type='number'
          onChange={event=>setPrice(event.target.value)}/>
          <br />
        <table>
          <tr>
            <th>Sym</th>
            <th><img width='30' src={spreadArrow}/>$</th>
            <th><img width='30' src={spreadArrow}/>% &darr;</th>
            <th><img width='30' src={gainArrow}/>&uarr;</th>
            <th>Potential &uarr;</th>
            <th><img width='30' src={check}/></th>
          </tr>
          <tr>
            <td>{symbol}</td>
            <td>{(high-low).toFixed(2)}</td>
            <td>{(((high-low)/high)*100).toFixed(1)}%</td>
            <td>{(((low/start)*100)-100).toFixed(1)}%</td>
            <td>{(((high-low)/(price-low)-1)*100).toFixed(1)}%</td>
            <td><img onClick={saveStock} width='10' src={check}/></td>
          </tr>
        </table><br/><br/>
        <strong>Saved Stock:</strong>
        <table>
          <tr>
          <th>Sym</th>
          <th><img width='30' src={spreadArrow}/>$</th>
          <th><img width='30' src={spreadArrow}/>% &darr;</th>
          <th><img width='30' src={gainArrow}/>&uarr;</th>
          <th>Potential &uarr;</th>
          <th><img width='30' src={x}/></th>
          </tr>
          {renderStocks}
        </table>
        <a href='https://finviz.com/screener.ashx?v=211&f=fa_curratio_o1.5,fa_debteq_u1,fa_grossmargin_pos,fa_opermargin_pos,fa_pb_u2,fa_pe_u20,geo_usa,sh_avgvol_o50,ta_pattern_channelup&ft=4' target='_blank'
        >Stocks that make buffet happy</a><br/>
        <a href='https://finviz.com/screener.ashx?v=211&f=geo_usa,ind_exchangetradedfund,sh_avgvol_o50,ta_pattern_channelup,ta_perf_13w50o&ft=4' target='_blank'
        >Channel Up High performing ETF</a>
    </div>
  );
}

export default BetterScreener;
