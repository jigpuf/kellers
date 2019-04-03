import React from 'react';

class Stories extends React.Component {
  render () {
    return (
      <div>
        <div id="storiesTier1">
          <button class="tier1">Kwai</button>
          <button class="tier1">The frog in the Bayou</button>
          <button class="tier1">Clear all</button>
          <hr />
        </div>
        <div id="storiesTier2"></div>
        <div id="storiesTier3"></div>
      </div>
    )
  }
}
export default Stories;
