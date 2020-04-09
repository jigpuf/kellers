import React from 'react';

class Desert extends React.Component {
  render () {
    return (
      <div>
        <li>Cheese Cake</li>
        <li>Crunchy Pumpkin Pie</li>
        <li>Eclair Cake</li>
        <li><a href = '#peanutCrunchies' >Peanut Crunchies</a></li>
        <li>Pistachio Pie</li>
        <li>3-2-1 Cake</li>

        <h3 id = 'peanutCrunchies'>Peanut Crunchies</h3>
        <br />
          Servings:?<br />
          <table>
              <tr><th>Ingredient</th><th>Amount</th></tr>
              <tr><td>Vanilla Almond Bark</td><td>2 Pounds</td></tr>
              <tr><td>Peanut Butter</td><td>1 Cup</td></tr>
              <tr><td>Rice Crispies Cereal</td><td>2 Cups</td></tr>
              <tr><td>Kraft Mini Marshmallows</td><td>2 Cups</td></tr>
              <tr><td>Dry Roasted Peanuts</td><td>2 Cups</td></tr>
            </table>
          <h4>Directions:</h4>
          <ol>
            <li>Melt Chocolate in microwave at half power for 5 min.</li>
            <li>Stir in Peanut Butter</li>
            <li>Add Remaining ingredients</li>
            <li>Stir until mixed well</li>
            <li>Scoop into small mounds onto wax paper</li>
            <li>Let set for 20 min.</li>
          </ol>
      </div>
    );
  }
}

export default Desert;
