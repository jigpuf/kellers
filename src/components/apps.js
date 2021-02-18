import React from 'react';
import Paycheck from './apps/paycheck.js'
import Solar from './apps/solar.js'
import Converters from './apps/converters.js'
import Dice from './apps/dice.js';
import TicTac from './apps/tictac.js';
import Fitness from './apps/fitness.js';
import SolarCopy from './apps/solar-copy.js';
import ButtonMaker from './buttonMaker.js';
import BestScreener from './apps/bestScreener.js';
import AboutMe from './apps/me.js';


const Apps = () => {

    const items = [
      {name: 'Paycheck', slug: 'paycheck', component:<Paycheck /> },
      {name: 'Solar Power Calc', slug: 'solar', component:<Solar />},
      {name: 'Converters', slug: 'converters', component:<Converters />},
      {name: 'Clockout', slug: 'clockout'},
      {name: 'Dice Rolling Tool', slug: 'dice', component: <Dice /> },
      {name: 'Battleship', slug: 'battleship' },
      {name: 'Tic-Tac-Toe', slug: 'ttt', component: <TicTac /> },
      {name: 'Electronics Test', slug: 'et' },
      {name: 'Homeschool', slug: 'homeschool'},
      {name: 'Lawnmowing', slug: 'lawnmowing'},
      {name: 'Countdown', slug: 'countdown'},
      {name: 'Essential Oils', slug: 'oils'},
      {name: 'Scripture Keeper', slug: 'scripture'},
      {name: 'Companion Planting', slug: 'companion'},
      {name: 'Quotes', slug: 'quotes'},
      {name: 'Fitness Tracker', slug: 'fitness', component: <Fitness/>},
      {name: 'Solar-Copy', slug: 'copy', component: <SolarCopy />},
      {name: 'Best Screener', slug: 'bestScreener', component: <BestScreener/>},
      {name: 'AboutMe', slug: 'aboutMe', component: <AboutMe/>},
    ]

    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
  }
export default Apps;
