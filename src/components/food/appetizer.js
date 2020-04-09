import React from 'react';

class Appetizer extends React.Component {
  render () {
    return (
      <div>
        <h2>Appetizers:</h2>
          <li>Bagel</li>
          <li>Chicken Dip</li>
          <li>Cracker dip(Cream Cheese, Habanero Jelly)</li>
          <li><a href = '#tortaFrita' >Torta Frita</a></li>
          <li>Nachos</li>

          <li>Cream Cheese and Jelly Dip w/ habanero Sauce</li>
          <li></li>
          <li></li>

          <h3 id = 'tortaFrita'>Torta frita</h3>
          <img src='https://www.thespruceeats.com/thmb/p_3XH-IvvnnCZ8fgcyLCFBSap9c=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TortaFrita-5883e74b5f9b58bdb3cdf338.jpg' height= '200' />
            <br />
            Servings: Makes 12 cakes<br />
            <table>
                <tr><th>Ingredient</th><th>Amount</th></tr>
                <tr><td>Butter</td><td>2 Tablespoons</td></tr>
                <tr><td>Vegetable Shortening</td><td>1 Tablespoon</td></tr>
                <tr><td>Milk</td><td>3/4 Cup</td></tr>
                <tr><td>Flour</td><td>2 Cups</td></tr>
                <tr><td>Salt</td><td>2 Teaspoons</td></tr>
                <tr><td>Baking Powder</td><td>1 Tablespoon</td></tr>
                <tr><td>Vegetable Shortening(for frying)</td><td>2 Cups</td></tr>
              </table>
            <h4>Directions:</h4>
            <ol>
              <li>Melt butter and shortening together</li>
              <li>Heat milk until hot not boiling</li>
              <li>Combine milk and shortnening, butter</li>
              <li>Combine salt, flour, baking powder mix well</li>
              <li>Pour liquid into middle of mound</li>
              <li>Make dough</li>
              <li>Roll dough and flatten, put hole in middle</li>
              <li>Fry until golden</li>
              </ol>


      </div>
    );
  }
}

export default Appetizer;
