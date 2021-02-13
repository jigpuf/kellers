import React from 'react';

class Soup extends React.Component {
  render () {
    return (
      <div>
      <h2>Soup</h2>

      <li><a href = '#eggDropSoup'>Egg Drop Soup</a></li>
      <li>Tomato Soup</li>

      <h3 id = 'eggDropSoup'>Egg Drop Soup</h3>
      <br/>
      Servings: Makes 3 Cups<br />
      <table>
          <tr><th>Ingredient</th><th>Amount</th></tr>
          <tr><td>Water</td><td>3 Cups</td></tr>
          <tr><td>Eggs</td><td>3 Eggs</td></tr>
          <tr><td>Chicken Bullion Powder</td><td>1 Tablespoon</td></tr>
          <tr><td>Sriracha Sauce</td><td>To Taste</td></tr>
          <tr><td>Pepper</td><td>To Taste</td></tr>
          <tr><td>Garlic Powder</td><td>To Taste</td></tr>
          <tr><td>Mung Beans sprouts</td><td>1 Cup</td></tr>
          <tr><td>Onion Powder</td><td>To Taste</td></tr>
          <tr><td>Tumeric</td><td>1/2 Teaspoon</td></tr>
          <tr><td>Ginger</td><td>1/4 Teaspoon</td></tr>
          <tr><td>Lime Juice</td><td>To Taste</td></tr>
          <tr><td>Sesame Oil</td><td>1 Teaspoon</td></tr>
        </table>
      <h4>Directions:</h4>
      <ol>
        <li>Put water, bullion powder,sriracha sauce, pepper, garlic powder,
        onion powder, tumeric, and ginger in a pot</li>
        <li>Stir and bring pot to a boil</li>
        <li>crack eggs and drop white into boiling water followed by yolk</li>
        <li>Don't mix anymore to avoid breakng yolks</li>
        <li>after a few minutes add mung bean sprouts and let boil for 1 minute</li>
        <li>Turn off burner and add lemon juice and sesame oil</li>
      </ol>



      </div>

    );
  }
}

export default Soup;
