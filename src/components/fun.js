import React from 'react';
import Table from './fun/table.js'
import Vg from './mediaLists/vg.js';
import Sports from './fun/sports.js'
import Movies from './fun/movies.js'
import Shopping from './fun/shopping.js'
import Food from './food.js'
import Education from './fun/education.js'
import Travel from './fun/travel.js'
import Bucket from './fun/bucket.js'
import ButtonMaker from './buttonMaker';

const Fun = () => {

    const items = [
      {name: 'Sports', slug: 'sports', component:<Sports /> },
      {name: 'Table Games', slug: 'table', component:<Table /> },
      {name: 'Video Games', slug: 'video', component:<Vg />},
      {name: 'Movies', slug: 'movies', component:<Movies />},
      {name: 'Shopping', slug: 'Shopping', component:<Shopping /> },
      {name: 'Food', slug: 'food', component:<Food /> },
      {name: 'Education', slug: 'education', component:<Education /> },
      {name: 'Travel', slug: 'travel', component:<Travel />},
      {name: 'Bucket List', slug: 'bucket', component:<Bucket /> },
    ]
    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    }
export default Fun;
