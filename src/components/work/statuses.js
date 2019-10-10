import React from 'react';

class Statuses extends React.Component {
  render () {
    return (
      <div>
        <h2>Statuses</h2>
        <h3>Food</h3>
          <iframe src="https://sharex2013.spacex.corp/sites/texas/SitePages/Lunchpad.aspx" height='230px'></iframe>
        <h3>Lightening</h3>
          <iframe src="" height='230px'></iframe>
        <h3>Stand Status</h3>
          <iframe src="http:tx-access/" height='230px'></iframe>
        <h3>Weather</h3>
          <iframe src="" height='230px'></iframe>
      </div>
    );
  }
}

export default Statuses;
