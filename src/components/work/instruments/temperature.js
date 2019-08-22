import React from 'react';

class Temperature extends React.Component {
  render () {
    return (
      <div>
      <h3>Temperature</h3>
        <h4>TC</h4>
          K-type
          <li>Yellow(+)</li>
          <li>Red(-)</li>
          E-type
          <li>Purple(+)</li>
          <li>Red(-)</li>
        <h4>RTD</h4>
          <li>1-Red-Power(+)</li>
          <li>2-Red-Feedback(+)</li>
          <li>3-White-Feedback(-)</li>
          <li>4-White-Power(-)</li>
          Connectors:
      </div>
    );
  }
}

export default Temperature;
