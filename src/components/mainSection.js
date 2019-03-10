import React from 'react';
import Links from './links';
import Church from './church';
import Videos from './videos';

class MainSection extends React.Component {
  render () {
    const activeTab3 = this.props.activeTab2;
    return (
      <div className="mainSection">
        {activeTab3 === 'links' && <Links />}
        {activeTab3 === 'church' && <Church />}
        {activeTab3 === 'videos' && <Videos />}
      </div>
    );
  }
}

export default MainSection;
