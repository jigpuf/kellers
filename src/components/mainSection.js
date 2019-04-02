import React from 'react';
import Links from './links';
import Church from './church';
import Videos from './videos';
import Menu from './menu';

const MainSection = (props) => {
  const activeTab3 = props.activeTab2;
  return (
    <div className="mainSection">
      {activeTab3 === 'menu' && <Menu />}
      {activeTab3 === 'links' && <Links />}
      {activeTab3 === 'church' && <Church />}
      {activeTab3 === 'videos' && <Videos />}

    </div>
  );
};

export default MainSection;
