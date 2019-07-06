import React from 'react';
import Drivetrain from './titan/drivetrain.js'

class Titan extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const Items = [
      {name: 'Drivetrain', slug: 'drivetrain', component:<Drivetrain /> },
      {name: 'Steering/Suspension', slug: 'steering' },
      {name: 'AC/Heat', slug: 'ac' },
      {name: 'Body/Chasis', slug: 'body' },
      {name: 'Electrical', slug: 'electrical' },
      {name: 'Interior', slug: 'interior' },
      {name: 'Fuel', slug: 'fuel' },
      {name: 'Cooling', slug: 'cooling' },
      {name: 'Lubrication', slug: 'lubrication' },
      {name: 'Fluids', slug: 'fluids' },
      {name: 'Stats', slug: 'Stats' },
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier2Component}
        
      </div>
    )
    }
  }
export default Titan;
