import React from 'react';

class Box extends React.Component {
  render () {
    return (
      <div>
        <h2>Box Model</h2>
          <img src='https://www.csssolid.com/images/CSSBoxModel.png' />
          <tr><th>Border:</th><th><em>thickness style color</em></th></tr>
          <tr><td>Border thickness</td><td>2px, </td></tr>
          <tr><td>Border style</td><td>dotted, solid, </td></tr>
          <tr><td>border color</td><td>Black, #d2b48c</td></tr>
          <tr><th>Padding:</th><th><em>width</em></th></tr>
          <tr><td>padding width</td><td>10px, 20%</td></tr>
          <tr><th>Margin:</th><th><em>width</em></th></tr>
          <tr><td>margin width</td><td>10px, 20%</td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>

          <a href='https://htmlcolorcodes.com/color-picker/' target='_blank'
          >Color Selector</a>
      </div>
    );
  }
}

export default Box;
