import React from 'react'
import Ac from './construction/ac.js'
import Carpentry from './construction/carpentry.js'
import Electrical from './construction/electrical.js'
import Flooring from './construction/flooring.js'
import Insulation from './construction/insulation.js'
import Pest from './construction/pest.js'
import Plumbing from './construction/plumbing.js'
import Masonry from './construction/masonry.js'
import Painting from './construction/painting.js'
import ButtonMaker from './buttonMaker.js'

const Construction = () => {
    const items = [
      {name: 'Heat/Ac', slug: 'ac', component:<Ac /> },
      {name: 'Carpentry', slug: 'carpentry', component:<Carpentry /> },
      {name: 'Electrical', slug: 'electrical', component:<Electrical /> },
      {name: 'Flooring', slug: 'flooring', component:<Flooring /> },
      {name: 'Insulation', slug: 'insulation', component:<Insulation /> },
      {name: 'Pest Control', slug: 'pest', component:<Pest /> },
      {name: 'Plumbing', slug: 'plumbing', component:<Plumbing /> },
      {name: 'Masonry', slug: 'masonry', component:<Masonry />},
      {name: 'Painting', slug: 'paint', component:<Painting />},
    ]

        return (
          <div>
            <ButtonMaker buttons={items}/>
          </div>
        )
        }
export default Construction;
