import React from 'react';

class Top20K extends React.Component {
  render () {
    return (
      <div>
      <h3>Top 20,000 Spanish Vocab:</h3>
      Nouns:<br />
      <table>
        <tr><th>English</th><th>Spanish</th></tr>
        <tr><td>Something</td><td>algo</td></tr>
      </table><br />
      Verbs:<br />
      <table>
        <tr><th>English</th><th>Spanish</th><th>Verb Style</th></tr>
        <tr><td>To call</td><td>llamar</td><td>standard</td></tr>
      </table><br />
      Prepositions:<br />
      <table>
        <tr><th>English</th><th>Spanish</th></tr>
        <tr><td>before</td><td>antes</td></tr>
      </table><br />
      Conjunctions:<br />
      <table>
        <tr><th>English</th><th>Spanish</th></tr>
        <tr><td>well</td><td>pues</td></tr>
      </table><br />
      Standard Adjectives:<br />
      <table>
        <tr><th>English</th><th>Spanish</th></tr>
        <tr><td>just</td><td>solo</td></tr>
      </table><br />
      </div>
    );
  }
}

export default Top20K;
