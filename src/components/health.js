import React from 'react';

class Health extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return() => {this.setState({tier1:item})}
  }
  pickTier2 = (item) => {
    return() => {this.setState({tier2:item})}
  }
  render () {
    const healthItems = [
      {name: 'Diet', slug: 'diet' },
      {name: 'Stretching', slug: 'stretching' },
      {name: 'Lifting', slug: 'lifting' },
      {name: 'Cardio', slug: 'cardio' },
      {name: 'Hormones', slug: 'hormones' },
      {name: 'Supplements', slug: 'supplements' },
      {name: 'Clear All', slug: 'clear' },
    ]
    const renderHealthItems = healthItems.map(item =>{
      return(
        <button
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}
        </button>
      )

    })
    return (
      <ul>
        {renderHealthItems}
        <hr />
      </ul>
    )
  }

}
export default Health;
