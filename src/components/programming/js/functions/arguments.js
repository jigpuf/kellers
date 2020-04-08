import React from 'react';

class Arguments extends React.Component {
  render () {
    return (
      <div>
        <h2>Arguments and Parameters</h2>
          <p>Argument is given in the call, parameter is given in the function.
          They must be listed in the same order.  Arguments can be given a
          default value in the case that no arguments are given.</p>

Function functionName(firstParameter = firstParameterDefaultValue,
  secondParameter)&#123;<br />
  code<br />&#125;

      </div>
    );
  }
}

export default Arguments;
