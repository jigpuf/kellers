import React from 'react';

class Fitness extends React.Component {
  state ={
    weight: 0,
    sex:'boy',
    days:1,
    bf: 38.5,
    leanFactor: 1,
  }
  setWeight = (event) => {
    return (
      this.setState({weight:event.target.value})
    );
  }
  setGender = (event) => {
    return (
      this.setState({sex:event.target.value})
    );
  }
  setBf = (event) => {
    return(
      this.setState({bf:event.target.value})
    );
  }
  setDays = (event) => {
    return(
      this.setState({days:event.target.value})
    );
  }

  render () {
    const Foods = [
      {food: 'Egg', portion: 'egg', slug: 'egg',},
    ]
    const Nutrients = [
      {type:'Macro', nutrient: 'Protein', symbol:'protein', slug: 'protein',
      dailyValue:0, dailyValueUOM:'g'},
      {type:'Macro', nutrient: 'Carb', symbol:'carbs', slug: 'carb',
      dailyValue:0, dailyValueUOM:'g'},
      {type:'Macro', nutrient: 'Fat', symbol:'', slug: 'fat',
      dailyValue:0, dailyValueUOM:'g'},
      {type:'Macro', nutrient: 'Fiber', symbol:'', slug: 'fiber',
      dailyValue:0, dailyValueUOM:'g'},
      {type:'Vitamin', nutrient: 'Retinoid', symbol:'A', slug: 'a',
      dailyValue:600, dailyValueUOM:'µg'},
      {type:'Vitamin', nutrient: 'Thiamine', symbol:'B1', slug: 'a',
      dailyValue:1.4, dailyValueUOM:'mg'},
    ]
    const renderNutrients = Nutrients.map(nutrient => {
      return (
        <tr key={nutrient.slug}>
          <td>{nutrient.type}</td>
          <td>{nutrient.nutrient}</td>
          <td>{nutrient.symbol}</td>
          <td>{nutrient.dailyValue}</td>
          <td>{nutrient.dailyValueUOM}</td>
          <td>{(nutrient.dailyValue * this.state.days).toFixed(1)}</td>
          <td></td>
          <td></td>
        </tr>
      )
    })
    return (
      <div>
        <h1>Caveman Fitness</h1>
          <table>
            <tr>
              <th>Weight(LBS)</th>
              <th>in Kilos</th>
            </tr>
            <tr>
              <td><input type='number' name='weight' onChange={this.setWeight}/></td>
              <td>{(this.state.weight/2.2).toFixed(2)}</td>
            </tr>
            <tr>
              <th>BF %</th>
              <th>Lean Weight(Kilos)</th>
            </tr>
            <tr>
              <td><input type='number' name='bf' onChange={this.setBf}/></td>
              <td>{((this.state.weight * (1-(this.state.bf/100)))/2.2).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <th>Days of Nutrition</th>
            </tr>
            <tr>
              <td>
                <form>
                  <input type='radio' name='sex' value='boy' onChange={this.setGender}
                  checked={this.state.sex === 'boy'}/>Boy<br />
                  <input type='radio' name='sex' value='girl' onChange={this.setGender}
                  checked={this.state.sex === 'girl'}/>Girl<br />
                </form>
              </td>
              <td>
                <input type='number' name='days' onChange={this.setDays}/>
              </td>
            </tr>
          </table>
          <br/><br/>
      <table>
        <tr>
          <th>Nutrient Type</th>
          <th>Nutrient</th>
          <th>Symbol</th>
          <th>Daily</th>
          <th>UOM</th>
          <th>Total Needed</th>
          <th>From Food</th>
          <th>percent</th>
        </tr>
        {renderNutrients}
      </table>
      </div>
    );
  }
}

export default Fitness;
