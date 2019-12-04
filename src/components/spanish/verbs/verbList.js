import React from 'react';

class VerbList extends React.Component {
  render () {
    return (
      <div>
        <table>
        <tr><th>Verb</th><th>Spanish</th><th>Conjugation</th></tr>
        <tr><td>To Be(Identity)</td><td>Ser</td><td>Ser</td></tr>
        <tr><td>To Be(Situational)</td><td>Estar</td><td>Estar</td></tr>
        </table>
      </div>
    );
  }
}

export default VerbList;
