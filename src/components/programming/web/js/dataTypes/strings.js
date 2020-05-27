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
            <tr><td>+ form of concatination</td><td>console.log('firstName'+' ' + 'lastName')</td><td>firstName lastName</td></tr>
            <tr><td>Literal form of concatination</td><td>console.log(firstName + ' ' + lastName);</td><td>Kman Supreme</td></tr>
          </table>
          <br />  <br />  <br />
          Escape Characters:<br />
          <table>
            <tr><th>Character</th><th>Escape Character</th></tr>
            <tr><td>Horizontal Tab</td><td>\t</td></tr>
            <tr><td>Vertical Tab</td><td>\v</td></tr>
            <tr><td>Nul char</td><td>\0</td></tr>
            <tr><td>Backspace</td><td>\b</td></tr>
            <tr><td>Form feed</td><td>\f</td></tr>
            <tr><td>Newline</td><td>\n</td></tr>
            <tr><td>Carriage return</td><td>\r</td></tr>
            <tr><td>Single quote</td><td>\'</td></tr>
            <tr><td>Double quote</td><td>\"</td></tr>
            <tr><td>Backslash</td><td>\\</td></tr>
          </table>

      </div>
    );
  }
}

export default Strings;
