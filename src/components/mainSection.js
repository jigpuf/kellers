import React from 'react';
import Links from './links';
import Church from './church';
import Videos from './videos';
import Health from './health';
import Games from './games';
import Menu from './menu';
import Stories from './stories';
import MediaLists from './mediaLists'

/*
Since all the sections are rendering in the Main Section, we must import
all relevant files.  React from react must be in every file.  We are importing
the component with capital letters from the file with the path ./
*/

const MainSection = (props) => {
  const activeTab3 = props.activeTab2;
  //creates variable to contain the props.activeTab2 value from App.js
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
/*
If the active tab prop from App.js ==== the given value,and the following
component exists, then it will call the component.
*/
export default MainSection;
/*
the export default is what will export if the component in the file is not
specified.
*/
