import React from 'react';

class JsNumbers extends React.Component {
  render () {
    return (
      <div>
        <h2>JS Numbers</h2>
          <h3>Order of Operations</h3>
            <ol>
              <li>Brackets</li>
              <li>Index</li>
              <li>Division</li>
              <li>Multiplication</li>
              <li>Addition</li>
              <li>Subtraction</li>
            </ol>
          <p>If a number is concatenated with a string, it transforms the number
          into a string.</p>
          <table>
            <tr><th>Operator</th><th>Operator Symbol</th><th>Example</th><th>Output</th></tr>
            <tr><td>Add</td><td>+</td><td>5+5</td><td>10</td></tr>
            <tr><td>Subtract</td><td>-</td><td>5-5</td><td>0</td></tr>
            <tr><td>Multiply</td><td>*</td><td>5*5</td><td>25</td></tr>
            <tr><td>Divide</td><td>/</td><td>5/5</td><td>1</td></tr>
            <tr><td>Power</td><td>**</td><td>5**5</td><td>125</td></tr>
            <tr><td>Remainder</td><td>%</td><td>11%5</td><td>1</td></tr>
            <tr><td>Increment Up</td><td>++</td><td>let Variable = 4; Variable++;</td><td>5</td></tr>
            <tr><td>Increment Down</td><td>--</td><td>let Variable = 4; Variable--;</td><td>3</td></tr>
            <tr><td>Set with Operator</td><td>+= -= *= /= **= %=</td><td>let Variable = 4; Variable *= 5;</td><td>20</td></tr>
          </table>
      </div>
    );
  }
}

export default JsNumbers;
