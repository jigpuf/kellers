import React from 'react';

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
      {name: 'Drivetrain', slug: 'drivetrain' },
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
        <li><a href = 'https://www.youtube.com/watch?v=O7DELdn6Nls'
          >Nissan Titan or Armada Driveshaft Universal U-Joint & Center Support Carrier Bearing</a></li>
          <li><a href='https://www.youtube.com/watch?v=5gOeBE-ylQw'
          >How to Diagnose and Replace Universal Joints (ULTIMATE Guide)</a></li>
      </div>
    )
    }
  }
export default Titan;
