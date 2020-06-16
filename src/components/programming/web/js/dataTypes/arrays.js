import React from 'react';

class Arrays extends React.Component {
  render () {
    return (
      <div>
        <h2>Javascript Arrays</h2>
        <h3>Starting Array</h3>
          let names = ['Larry', 'Curley', 'Moe'];<br />
          let second = names[2];<br />
          console.log(second); // Moe<br />
          names[2] = 'Shim';  //Moe &rarr; Shim<br />
        <h3>Methods</h3>
          <table>
            <tr><th>Method</th><th>Example</th><th>Output</th></tr>
            <tr><td>Array Length</td><td>names.length</td><td>3</td></tr>
            <tr><td>Array Join</td><td>names.join(,)</td><td>Larry,Curley,Shim</td></tr>
            <tr><td>Array Index of</td><td>names.indexOf('Curley')</td><td>1</td></tr>
            <tr><td>Array concatination</td><td>names.concat(['Bill', 'James'])</td><td>['Larry', 'Curley', 'Shim', 'Bill', 'James']</td></tr>
            <tr><td>Array Push</td><td>names.push('Ken')</td><td>This adds the element to the array and returns new length</td></tr>
            <tr><td>Array Pop</td><td>names.pop</td><td>takes last element off and returns popped value</td></tr>
          </table>
      </div>
    );
  }
}

export default Arrays;
