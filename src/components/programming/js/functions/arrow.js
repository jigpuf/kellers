import React from 'react';

class Arrow extends React.Component {
  render () {
    return (
      <div>
        <h2>Arrow Functions</h2>
          <table>
            <tr><th>Function Type</th><th>code</th></tr>
            <tr><td>Standard Function</td><td>Const functionName = function(parameter)&#123;<br />
            code;<br />
            return(code);<br />
          };<br /></td></tr>
            <tr><td>Arrow Function</td><td>const functionName = (parameter) =&#62;&#123;<br />code;<br /> return(code);<br />&#125;;</td></tr>
            <tr><td>Single Line Arrow Function<br /> Must have no code other<br /> than return statement</td><td>const functionName = (parameter) =&#62; returnCode;</td></tr>
          </table>
      </div>
    );
  }
}

export default Arrow;
