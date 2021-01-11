import React from 'react'
import Chords from './guitar/chords.js'
import Songs from './guitar/songs.js'
import Tutorials from './guitar/tutorials.js'
import ButtonMaker from './buttonMaker';


const Guitar = () =>{

    const items = [
      {name: 'Chords', slug: 'chords', component:<Chords /> },
      {name: 'Songs', slug: 'songs', component:<Songs /> },
      {name: 'Tutorials', slug: 'tutorials', component:<Tutorials /> },
    ]
    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    }

export default Guitar;
