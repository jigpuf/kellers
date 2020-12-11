import React from 'react'
import Lectures from './mediaLists/mediaVideos/astronomyMedia.js'
import Constallations from './astronomy/constallations.js'
import Calendar from './astronomy/calendar.js'
import ButtonMaker from './buttonMaker';

const Astronomy = () => {

    const items = [
      {name: 'Constallations', slug: 'constallations', component:<Constallations /> },
      {name: 'Astronomy Videos', slug: 'lectures', component: <Lectures />},
      {name: 'Calendar', slug: 'calendar', component: <Calendar />},
    ]
    return (
      <div>
      <ButtonMaker buttons={items}/>
      </div>
    );
  
}

export default Astronomy;
