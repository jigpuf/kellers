import React from 'react';

class Declaration extends React.Component {
  render () {
    return (
      <div>
        <h2>Function Declaration and Expressions</h2>
          <p>Normally declared functions are hoisted to the top of the file.
          Function expressions are not, so expressions need to be created before
          they are invoked. Best practice is using function expressions at the top
          of the code</p>
          <table>
            <tr><th>Part</th><th>code</th></tr>
            <tr><td>Declaration</td>
                <td>function functionNameHere(parameters)&#123;<br />
                codeHere;<br />
                return(codeHere);<br />
              }</td></tr>
            <tr><td>Function Expression</td>
                <td>Const functionNameHere = function(parameterHere)&#123;<br />
                codeHere;<br />
                return(codeHere);<br />
              };</td></tr>
            <tr><td>Call</td>
                <td>functionNameHere(argumentHere);</td></tr>
          </table>
          <br /><br />

          <strong>Example of Declaration:</strong><br /><br />

          function addTwo(a,b)&#123;<br />
          let c = a + b;<br />
          return (c);<br />
          &#125;<br /><br />

          <strong>Example of Expression:</strong><br /><br />

          const multTwo = function(a,b)&#123;<br />
          let c = a * b;<br />
          return (c);<br />
          &#125;;<br /><br />

          <strong>Example of Call:</strong><br /><br />

          addTwo(2,5);<br />
          multTwo(2,5);<br /><br />

      </div>
    );
  }
}

export default Declaration;
