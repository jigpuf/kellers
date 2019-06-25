import Leadership from './leadership.js';
import Instrumentation from './instrumentation.js';
import React from 'react';
import Apps from './apps.js';
import Astronomy from './astronomy.js';
import Business from './business.js';
import Church from './church.js';
import Efficiency from './efficiency.js';
import Food from './food.js';
import Games from './games.js';
import Guitar from './guitar.js';
import Health from './health.js';
import Math from './math.js';
import Mechanics from './mechanics.js';
import MediaLists from './mediaLists.js';
import Paintball from './paintball.js'
import Programming from './programming.js';
import Quotes from './quotes.js';
import Spanish from './spanish.js';
import Stories from './stories.js';
import Survival from './survival.js';
import Woodworking from './woodworking.js';
import Links from './links.js';

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
      {activeTab3 === 'leadership' && <Leadership />}
      {activeTab3 === 'instrumentation' && <Instrumentation />}
      {activeTab3 === 'apps' && <Apps />}
      {activeTab3 === 'astronomy' && <Astronomy />}
      {activeTab3 === 'business' && <Business />}
      {activeTab3 === 'church' && <Church />}
      {activeTab3 === 'efficiency' && <Efficiency />}
      {activeTab3 === 'food' && <Food />}
      {activeTab3 === 'games' && <Games />}
      {activeTab3 === 'guitar' && <Guitar />}
      {activeTab3 === 'health' && <Health />}
      {activeTab3 === 'math' && <Math />}
      {activeTab3 === 'mechanics' && <Mechanics />}
      {activeTab3 === 'mediaLists' && <MediaLists />}
      {activeTab3 === 'paintball' && <Paintball />}
      {activeTab3 === 'programming' && <Programming />}
      {activeTab3 === 'quotes' && <Quotes />}
      {activeTab3 === 'spanish' && <Spanish />}
      {activeTab3 === 'stories' && <Stories />}
      {activeTab3 === 'survival' && <Survival />}
      {activeTab3 === 'woodworking' && <Woodworking />}
      {activeTab3 === 'links' && <Links />}
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
