import React from 'react';

class Strings extends React.Component {
  render () {
    return (
      <div>
        <h2>Javascript Strings</h2>
          <p>Strings can be between single or double quotes. To set a variable
          to a string put the value between quotes. To concatenate, use the +
          sign or use the literal way of concatenating. For the following table
          imagine there are 2 variables firstName and lastName.</p>
          <table>
            <tr><th>Part</th><th>code</th><th>Result</th></tr>
            <tr><td>Set First Variable</td><td>let firstName = 'Kman'; console.log(firstName);</td><td>Kman</td></tr>
            <tr><td>Set Second Variable</td><td>let lastName = 'Supreme'; console.log(lastName);</td><td>Supreme</td></tr>
            <tr><td>+ form of concatination</td><td>console.log('firstName'+' ' + 'lastName')</td><td>Kman Supreme</td></tr>
            <tr><td>Literal form of concatination</td><td>console.log('$&#123;firstName&#125; $&#123;lastName&#125;');</td><td>Kman Supreme</td></tr>
          </table>
      </div>
    );
  }
}

export default Strings;
