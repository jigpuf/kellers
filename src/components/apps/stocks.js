import React from 'react';

class Stocks extends React.Component {
      state ={
        symbol:'FHN',
        book:1,
        earnings:1,
        pe:1,
        price:1,
        div:1,
        symbol1:'WFC',
        book1:2,
        earnings1:2,
        pe1:2,
        price1:2,
        div1:2,
        symbol2:'GM',
        book2:3,
        earnings2:3,
        pe2:3,
        price2:3,
        div2:3,
      }
      changeSymbol = (event) => {
        const symbol = event.target.value;
        return this.setState({symbol:symbol})
      }
      changeBook = (event) => {
        const book = event.target.value;
        return this.setState({book:book});
      }
      changeEarnings = (event) => {
        const earnings = event.target.value;
        return this.setState({earnings:earnings});
      }
      changePe = (event) => {
        const pe = event.target.value;
        return this.setState({pe:pe});
      }
      changePrice = (event) => {
        const price = event.target.value;
        return this.setState({price:price});
      }
      changeDiv = (event) => {
        const div = event.target.value;
        return this.setState({div:div});
      }
      changeSymbol1 = (event) => {
        const symbol1 = event.target.value;
        return this.setState({symbol1:symbol1})
      }
      changeBook1 = (event) => {
        const book1 = event.target.value;
        return this.setState({book1:book1});
      }
      changeEarnings1 = (event) => {
        const earnings1 = event.target.value;
        return this.setState({earnings1:earnings1});
      }
      changePe1 = (event) => {
        const pe1 = event.target.value;
        return this.setState({pe1:pe1});
      }
      changePrice1 = (event) => {
        const price1 = event.target.value;
        return this.setState({price1:price1});
      }
      changeDiv1 = (event) => {
        const div1 = event.target.value;
        return this.setState({div1:div1});
      }
      changeSymbol2 = (event) => {
        const symbol2 = event.target.value;
        return this.setState({symbol2:symbol2})
      }
      changeBook2 = (event) => {
        const book2 = event.target.value;
        return this.setState({book2:book2});
      }
      changeEarnings2 = (event) => {
        const earnings2 = event.target.value;
        return this.setState({earnings2:earnings2});
      }
      changePe2 = (event) => {
        const pe2 = event.target.value;
        return this.setState({pe2:pe2});
      }
      changePrice2 = (event) => {
        const price2 = event.target.value;
        return this.setState({price2:price2});
      }
      changeDiv2 = (event) => {
        const div2 = event.target.value;
        return this.setState({div2:div2});
      }


      render () {
        return (
          <div>
            <h2>Quick Valuation</h2>
            <table>
              <tr>
                <th>Symbol</th>
                <th>Book Value(BVPS)</th>
                <th>Earnings(EPS)</th>
                <th>P/E Ratio</th>
                <th>Price</th>
                <th>Dividend</th>
                <th>Price/Book Value</th>
                <th>Valuation P/E*P/BV</th>
              </tr>
              <tr>
                <td><input id='symbol' type="string" value={this.state.symbol} onChange={this.changeSymbol}/></td>
                <td><input id='book' type="number" value={this.state.book} onChange={this.changeBook}/></td>
                <td><input id='earnings' type="number" value={this.state.earnings} onChange={this.changeEarnings}/></td>
                <td><input id='pe' type='number' value={this.state.pe} onChange={this.changePe}/></td>
                <td><input id='price' type='number' value={this.state.price} onChange={this.changePrice}/></td>
                <td><input id='div' type='number' value={this.state.div} onChange={this.changeDiv}/></td>
                <td>{(this.state.price/this.state.book).toFixed(2)}</td>
                <td>{(this.state.pe*(this.state.price/this.state.book)).toFixed(2)}</td>
              </tr>
              <tr>
                <td><input id='symbol1' type="string" value={this.state.symbol1} onChange={this.changeSymbol1}/></td>
                <td><input id='book1' type="number" value={this.state.book1} onChange={this.changeBook1}/></td>
                <td><input id='earnings1' type="number" value={this.state.earnings1} onChange={this.changeEarnings1}/></td>
                <td><input id='pe1' type='number' value={this.state.pe1} onChange={this.changePe1}/></td>
                <td><input id='price1' type='number' value={this.state.price1} onChange={this.changePrice1}/></td>
                <td><input id='div1' type='number' value={this.state.div1} onChange={this.changeDiv1}/></td>
                <td>{(this.state.price1/this.state.book1).toFixed(2)}</td>
                <td>{(this.state.pe1*(this.state.price1/this.state.book1)).toFixed(2)}</td>
              </tr>
              <tr>
                <td><input id='symbol2' type="string" value={this.state.symbol2} onChange={this.changeSymbol2}/></td>
                <td><input id='book2' type="number" value={this.state.book2} onChange={this.changeBook2}/></td>
                <td><input id='earnings2' type="number" value={this.state.earnings2} onChange={this.changeEarnings2}/></td>
                <td><input id='pe2' type='number' value={this.state.pe2} onChange={this.changePe2}/></td>
                <td><input id='price2' type='number' value={this.state.price2} onChange={this.changePrice2}/></td>
                <td><input id='div2' type='number' value={this.state.div2} onChange={this.changeDiv2}/></td>
                <td>{(this.state.price2/this.state.book2).toFixed(2)}</td>
                <td>{(this.state.pe2*(this.state.price2/this.state.book2)).toFixed(2)}</td>
              </tr>
            </table>
            <p>Valuation rules: P/E under 15, P/BV under 1.5, valuation under 22.5</p>
            <a href='https://www.zacks.com/stock/quote/FHN?q=fhn' target='_blank'
            >Zacks for stock Info</a><br />
            <h3>Warren Buffets 4 rules on stock buying</h3>
            All 4 rules have to be true
            <ol>
              <li>Stock has to be stable and understandable</li>
              <li>Stock must have a long term prospects(Will it be around in 20 years)</li>
              <li>Managed by good leaders(Low debt)</li>
              <li>Must be undervalued</li>
            </ol>
          </div>
        );
      }
    }

export default Stocks;
