import React from 'react';

class Selectors extends React.Component {
  render () {
    return (
      <div>
        <h2>Selectors</h2>
          <table>
            <tr><th>Select Type</th><th>Symbol</th><th>Description</th></tr>
            <tr><td>Class</td><td>.className</td><td>Selects all of a specific class</td></tr>
            <tr><td>Id</td><td>#idName</td><td>Selects particular element by id</td></tr>
            <tr><td>Tag</td><td>tagName</td><td>Selects all of a certain type of tag</td></tr>
            <tr><td>All</td><td>*</td><td>Selects all elements</td></tr>
            <tr><td>Pseudo Class</td><td>tagName:pseudoclass</td><td>Selects all of this tag with PseudoClass</td></tr>
            <tr><td>Attribute</td><td>[attribute = value]</td><td>Selects all of this tag with PseudoClass</td></tr>
            <tr><td>Class within element</td><td>element.class</td><td>Selects a class within a certain type of element</td></tr>
          </table>
        <h3>Operators</h3>
          <table>
            <tr><th>Selector operator</th><th>Symbol</th><th>Description</th></tr>
            <tr><td></td><td>,</td><td></td></tr>
            <tr><td></td><td>spaces</td><td></td></tr>
            <tr><td></td><td>	&gt;</td><td></td></tr>
            <tr><td></td><td>~</td><td></td></tr>
            <tr><td></td><td>+</td><td></td></tr>
            <tr><td></td><td>=</td><td></td></tr>
            <tr><td></td><td>~=</td><td></td></tr>
            <tr><td></td><td>|=</td><td></td></tr>
            <tr><td></td><td>^=</td><td></td></tr>
            <tr><td></td><td>$=</td><td></td></tr>
            <tr><td></td><td>*=</td><td></td></tr>
            <tr><td></td><td>:</td><td></td></tr>
            <tr><td></td><td>::</td><td></td></tr>
          </table>

        <h3>Specificity</h3>
          <ol>
            <li>id</li>
            <li>class</li>
            <li>tag</li>
          </ol>
      </div>
    );
  }
}

export default Selectors;
