import React from 'react';

class Ot extends React.Component {
  state= {
  tier2: undefined,
}
pickTier2 = (item) => {
  return () => {
    this.setState({tier2:item})
  }
}
  render () {
    const Items = [
        {name: 'Temple', slug: 'temple'}]
      const renderItems = Items.map(item => {
        return (
          <button
            key={item.slug}
            onClick={this.pickTier2(item.slug)}
            className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
            >{item.name}</button>
        )
      })
      const tier2 = Items.filter(item => {
        return this.state.tier2 === item.slug;
      });
      const renderTier3Component = tier2[0] && tier2[0].component;
      return (
        <div>
          <ul>
          {renderItems}
          <hr />
          {renderTier3Component}
          </ul>
          <h3>Timelines</h3>
          <a href="https://www.youtube.com/watch?v=QEm-ovpMM5c&t=5s" target="_blank"
          >Biblical Exodus...Fairytale or historical fact</a><br />
          <a href="https://www.youtube.com/watch?v=_QJ7_p7rX8w&list=PLb_xUir147TjObAAEuxtSvUYbUo1jqV1t" target="_blank"
          >1174 - The exodus Discovered</a><br />
          <a href="https://www.youtube.com/watch?v=FF0F8YjT1og&t=2s" target="_blank"
          >How long were the israelites in Egypt?</a><br />
          <a href="https://www.youtube.com/watch?v=VI1yRTC6kGE&t=2s" target="_blank"
          >Were the pyramids built before the great flood?</a><br />
          <a href=""
          ></a>
          <h3>Temple Practice</h3>
          <a href=""></a>
          <a href=""></a>
        </div>
      );
    }
  }
export default Ot;
