import React from 'react';
import Links from './links';
import Church from './church';
import Videos from './videos';
import Health from './health';
import Games from './games';
import Menu from './menu';
import Stories from './stories';
import MediaLists from './mediaLists'

const MainSection = (props) => {
  const activeTab3 = props.activeTab2;
  return (
    <div className="mainSection">
      {activeTab3 === 'menu' && <Menu />}
      {activeTab3 === 'health' && <Health />}
      {activeTab3 === 'games' && <Games />}
      {activeTab3 === 'videos' && <Videos />}
      {activeTab3 === 'stories' && <Stories />}
      {activeTab3 === 'church' && <Church />}
      {activeTab3 === 'links' && <Links />}
      {activeTab3 === 'mediaLists' && <MediaLists />}
    </div>
  );
};

export default MainSection;
