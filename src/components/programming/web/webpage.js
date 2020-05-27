import React from 'react';

class Webpage extends React.Component {
  render () {
    return (
      <div>
        <h2>Putting a new Webpage Online</h2>
          <ol>
            <li>Choose A web hosting company</li>
              <ul>
                <li>Storage Space</li>
                <li>Cost / month</li>
                <li>Cost of renewal / month</li>
                <li>Traffic Allowed or costs</li>
                <li>Get your own domain?</li>
                <li>Get email address</li>
              </ul>
            <li>Decide on a domain name</li>
            <li>Purchase Domain</li>
            <li>Find out what they name the root folder</li>
            <li>Find out upload procedure of hosting company</li>
              <ul>
                <li>FTP</li>
                  Fetch, Transmit, cyberduck
                <li>GUI interface</li>
              </ul>
            <li>Send files to root folder</li>
          </ol>
      </div>
    );
  }
}

export default Webpage;
