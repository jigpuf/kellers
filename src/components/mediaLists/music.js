import React from 'react';

class Music extends React.Component {
  render () {
    const Items = [
      {artist: 'Adriana Mezzadri', song: 'Alianza Eterna', slug: 'am1', url:'https://www.youtube.com/watch?v=19Yni_ffrKA' },
      {artist: 'Adriana Mezzadri', song: 'Fruto de la Inocencia', slug: 'am2', url:'https://www.youtube.com/watch?v=XJqRzHbZIxQ' },
      {artist: 'Adriana Mezzadri', song: 'Marcas de Ayer', slug: 'am3', url:'https://www.youtube.com/watch?v=z1toYIJKPa0' },
      {artist: 'Adriana Mezzadri', song: 'Te tengo Miedo', slug: 'am4', url:'https://www.youtube.com/watch?v=jke4CDzI1Ns' },
      {artist: 'Aerocord', song: '4U(Julius Dreising Remix)', slug: 'ac1', url:'https://www.youtube.com/watch?v=Q-Qu_nrV3U4' },
      {artist: 'Aerocord', song: 'Drop It', slug: 'ac2', url:'https://www.youtube.com/watch?v=aFpefbl6JRE&list=PLQ18J7P31iBz9d-lPsnrFhZ7CIlLRlYMT&index=3&t=0s' },
      {artist: 'Alice in Chains', song: 'Down in a Hole', slug: 'aic1', url:'https://www.youtube.com/watch?v=nWK0kqjPSVI' },
      {artist: 'Alanis Morisett', song: 'Uninvited', slug: 'al1', url:'https://www.youtube.com/watch?v=uvgi7P97lu0' },
      {artist: 'America', song: 'Horse with no Name', slug: 'america1', url:'https://www.youtube.com/watch?v=oEHBTjIYejE' },
      {artist: 'Animals', song: 'House of the rising Sun', slug: 'animals1', url:'https://www.youtube.com/watch?v=uS90B4sZf7U' },
      {artist: 'AWOL Nation', song: 'Sail', slug: 'awol1', url:'https://www.youtube.com/watch?v=tgIqecROs5M' },
      {artist: 'Beastie Boys', song: 'Sabatage', slug: 'beastie1', url:'https://www.youtube.com/watch?v=z5rRZdiu1UE' },
      {artist: 'Beastie Boys', song: 'Intergallactic', slug: 'beastie2', url:'https://www.youtube.com/watch?v=ln-Jq6X6p-g' },
      {artist: 'Beck', song: 'Where its at', slug: 'beck1', url:'https://www.youtube.com/watch?v=EPfmNxKLDG4&list=PLaQqUACtlRRQvISGgS3IeEih-ViHzSWt1' },
      {artist: 'Ben E. King', song: 'Stand by Me', slug: 'ben1', url:'https://www.youtube.com/watch?v=hwZNL7QVJjE' },
      {artist: 'Bjork', song: 'Human Behavior', slug: 'bjork1', url:'https://www.youtube.com/watch?v=36Srr08PN_Y' },
      {artist: 'Bjork', song: 'Joga', slug: 'bjork2', url:'https://www.youtube.com/watch?v=BBju9Sdh94k' },
      {artist: 'Bjork', song: 'Black Coffee', slug: 'bjork3', url:'https://www.youtube.com/watch?v=wBWJnp1YyJU' },
      {artist: 'Blind Melon', song: 'No Rain', slug: 'blind1', url:'https://www.youtube.com/watch?v=3qVPNONdF58' },
      {artist: 'Blink 182', song: 'I miss You', slug: 'blink1', url:'https://www.youtube.com/watch?v=s1tAYmMjLdY' },
      {artist: 'Blue Foundation', song: 'Eyes on Fire', slug: 'bluef1', url:'https://www.youtube.com/watch?v=IUGzY-ihqWc' },
      {artist: 'Blue October', song: 'Come in Closer', slug: 'blue1', url:'https://www.youtube.com/watch?v=AzOnZ4rj6b0' },
      {artist: 'Blue October', song: 'X amount of Words', slug: 'blue2', url:'https://www.youtube.com/watch?v=wsk4QV4WLZ8' },
      {artist: 'Blue October', song: 'Clumsy Card House', slug: 'blue3', url:'https://www.youtube.com/watch?v=-pa8qsdIUqw' },
      {artist: 'Bob Marley', song: 'Exodous', slug: 'bobm1', url:'https://www.youtube.com/watch?v=nv584jRwh0s' },
      {artist: 'Bob Marley', song: 'Get up Stand Up', slug: 'bobm2', url:'https://www.youtube.com/watch?v=X2W3aG8uizA' },
      {artist: 'Bob Marley', song: 'Jammin', slug: 'bobm3', url:'https://www.youtube.com/watch?v=oFRbZJXjWIA' },
      {artist: 'Bob Marley', song: 'No Woman No Cry', slug: 'bobm4', url:'https://www.youtube.com/watch?v=pHlSE9j5FGY' },
      {artist: 'Bob Marley', song: 'Roots Rock Raege', slug: 'bobm5', url:'https://www.youtube.com/watch?v=MJB5L9F05tc' },
      {artist: 'Bob Marley', song: 'Three Little Birds', slug: 'bobm6', url:'https://www.youtube.com/watch?v=zaGUr6wzyT8' },
      {artist: 'Bobby McFerrin', song: 'Dont Worry Be Happy', slug: 'bobby1', url:'https://www.youtube.com/watch?v=d-diB65scQU' },
      {artist: 'Bola Ocho', song: 'Echa Palante', slug: 'bola1', url:'https://www.youtube.com/watch?v=RKjkwyqwREo' },
      {artist: 'Bola Ocho', song: 'La Novela', slug: 'bola2', url:'https://www.youtube.com/watch?v=NaDma_-MuW0' },
      {artist: 'Bola Ocho', song: 'Ya es Ajena', slug: 'bola3', url:'https://www.youtube.com/watch?v=HRojdxMwo2g' },
      {artist: 'Bola Ocho', song: '*Plena Loca*', slug: 'bola4', url:'' },
      {artist: 'Bola Ocho', song: '*Como te mueve*', slug: 'bola5', url:'' },
      {artist: 'Bola Ocho', song: '*Mi Que Se Yo*', slug: 'bola6', url:'' },
      {artist: 'Bola Ocho', song: '*Funky Plena*', slug: 'bola7', url:'' },
      {artist: 'Bola Ocho', song: '*Julialee*', slug: 'bola8', url:'' },
      {artist: 'Bola Ocho', song: '*Lo que Yo No Tengo*', slug: 'bola9', url:'' },
      {artist: 'Bola Ocho', song: '*Hip Hop Plena*', slug: 'bola10', url:'' },
      {artist: 'Bola Ocho', song: '*Negro el Ocho*', slug: 'bola11', url:'' },
      {artist: 'Bone Thugz-n-Harmony', song: '*east 1999*', slug: 'bone1', url:'' },
      {artist: 'Bone Thugz-n-Harmony', song: '*eternal*', slug: 'bone2', url:'' },
      {artist: 'Bone Thugz-n-Harmony', song: '*mo murder*', slug: 'bone3', url:'' },
      {artist: 'Bone Thugz-n-Harmony', song: '*the escape*', slug: 'bone4', url:'' },
      {artist: 'Bone Thugz-n-Harmony', song: '*no surrender*', slug: 'bone5', url:'' },
      {artist: 'Brand New Heavies', song: '', slug: 'brand1', url:'' },
      {artist: 'Bright Eyes', song: '*Lover I dont have to love*', slug: 'bright1', url:'' },
      {artist: 'BT', song: '', slug: 'bt1', url:'' },
      {artist: 'Bush', song: '', slug: 'bush1', url:'' },
      {artist: 'Busta Rhymes', song: '', slug: 'busta1', url:'' },
      {artist: 'Butthole Surfers', song: '', slug: 'butt1', url:'' },
      {artist: 'Cake', song: '', slug: 'cake1', url:'' },
      {artist: '', song: '', slug: '', url:'' },

    ]
    const renderItems = Items.map(item => {
      return (
        <tr key={item.slug}>
          <td >{item.artist}</td>
          <td><a href={item.url} target ='_blank'>{item.song}</a></td>
        </tr>
      )
    })
    return (
      <div>

      <div className='twoColumn'>
      <table>
      <tr><th>Artist</th><th>Song</th></tr>
      {renderItems}
      </table>
      *No active link<br />
      </div>
///////////////////////////////////////////
      <li>Cannibal Ox</li>
      <li>Chainsmokers</li>
      <li>Chevelle</li>
      <li>ColdPlay</li>
      <li>Collective Soul</li>
      <li>Common Ground</li>
      <li>Counting Crows</li>
      <li>Cranberries</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=Zz-DJr1Qs54' target ='_blank'
          >Ode to my Family</a><br/>
          <a href='https://www.youtube.com/watch?v=Yam5uK6e-bQ' target ='_blank'
          >Dreams</a><br/>
        </div>
        <hr/>
      <li>Crucial Conflict</li>
      <li>Cubanismo</li>
      <li>Cypress Hill</li>
      <li>Da Rude</li>
      <li>Deaf Leopard</li>
      <li>Deftones</li>
      No ordinary love
      <li>Dido</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=1TO48Cnl66w' target ='_blank'
          >Thank You</a><br/>
          <a href='https://www.youtube.com/watch?v=9LtrXAgsvB0' target ='_blank'
          >My Lover's Gone</a><br/>
        </div>
        <hr/>
      <li>Dispatch</li>
      <li>DNA and Susan Vega</li>
      <li>Duran Duran</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=wUgLge_MPIM' target ='_blank'
          >Ordinary World</a><br/>
          <a href='https://www.youtube.com/watch?v=Epj84QVw2rc' target ='_blank'
          >Come Undone</a><br/>
        </div>
        <hr/>
      <li>Eddie Brickell:</li>
        <a href='https://www.youtube.com/watch?v=tDl3bdE3YQA' target ='_blank'
        >What I am</a><br/>
        <hr/>
      <li>Edward Maya</li>
      <li>Enigma</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=Rk_sAHh9s08' target ='_blank'
          >Return to Innocense</a><br />
          <a href='https://www.youtube.com/watch?v=f8mMWh62XpU' target ='_blank'
          >Beyond the invisible</a><br />
        </div>
      <hr/>
      <li>Eminem</li>
      rap god, till I collapse, I am who you say I am
      <hr/>
      <li>Enya</li>
      <li>Everything but the Girl</li>
      <li>The Faint</li>
      <li>Faithless</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=j8m68wL9hYw' target ='_blank'
          >Woozy</a><br />
        </div>
        <hr/>
      <li>Far East Movement</li>
      <li>FC Kahuna</li>
      <li>Filter</li>
      <li>Flight Facilities</li>
      <li>Flo Rida'</li>
      <li>Flosstradamus</li>
      <li>Flume and Chet Faker</li>
      <li>Foo Fighters</li>
      <li>Foreign Beggers</li>
      <li>Freestylers</li>
      <li>Frou Frou</li>
      <li>Fuel</li>
      <li>Fugees</li>
      <li>Garbage</li>
      <li>Gary Jules</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=4N3N1MlvVc4' target ='_blank'
        >Mad World</a><br />
        </div>
        <hr/>
      <li>Gnarles Barkley</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=-N4jf6rtyuw' target ='_blank'
        >Crazy</a><br />
        </div>
        <hr/>
      <li>Gorillaz</li>
      <li>Gotye</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=8UVNT4wvIGY' target ='_blank'
        >Somebody That I Used To Know</a><br/>
        </div>
        <hr />
      <li>Grandaddy</li>
      <li>Green Day</li>
      <li>Guns and Roses</li>
      <li>High Kings</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=bp3UsU5pQT8' target ='_blank'
        >The Irish Pub</a><br/>
        </div>
        <hr />
      <li>Imagine Dragons</li>
      <li>Jem</li>
      <li>Jewel</li>
      <li>Jimmy Eat World</li>
      <li>John Williams</li>
      <li>Juanes</li>
      <li>Kansas</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=tH2w6Oxx0kQ' target ='_blank'
        >Dust in the Wind</a><br/>
        </div>
        <hr />
      <li>Kito & Reija Lee</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=2zgcKDg4w94' target ='_blank'
          >Run For Cover</a><br />
          <a href='https://www.youtube.com/watch?v=4eUNXqblOak' target ='_blank'
          >Sweet Talk</a><br />
          <a href='https://www.youtube.com/watch?v=ytyWFj2sFbs' target ='_blank'
          >Starting Line</a><br />
        </div>
        <hr />
      <li>Korn</li>
      <li>Kylie Minogue</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=YPwtJ89jes4' target ='_blank'
        >Can't Get You Out Of My Head</a><br/>
        </div>
        <hr />
      <li>La Roux</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=CpEOErRV-u4' target ='_blank'
        >In For The Kill</a><br/>
        </div>
        <hr />
      <li>La Vela Puerca</li>
      <li>Led Zeplin</li>
      <li>Lenny Kravitz</li>
      <div className='twoColumn'>
      <a href='https://www.youtube.com/watch?v=uxm11aSfSR8' target ='_blank'
      >If You Can't Say No</a><br/>
      </div>
      <hr />
      <li>Lighthouse Family</li>
      <li>Lindsey Sterling</li>
      <li>Live</li>
      <li>Loreena Mckennitt</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=LzE32ChEp24&list=RDLzE32ChEp24&start_radio=1' target ='_blank'
          >mummers dance</a><br />
          <a href='https://www.youtube.com/watch?v=RooTTuLCfNM' target ='_blank'
          >All Souls Night</a><br />
          <a href='https://www.youtube.com/watch?v=6i1AwS-bVnk' target ='_blank'
          >Prologue</a><br />
          <a href='https://www.youtube.com/watch?v=SrGuV3QHYME' target ='_blank'
          >Skellig</a><br />
          <a href='https://www.youtube.com/watch?v=eUTci9UbxNU' target ='_blank'
          >Night Ride Across The Caucasus</a><br />
          <a href='https://www.youtube.com/watch?v=lQh0MTmBUQ4' target ='_blank'
          >The Old Ways</a><br />

          </div>
          <hr/>
      <li>Lumineers</li>
      <li>M.I.A.</li>
      <li>Mandalay</li>
      <li>Marc Antony</li>
      <li>Maroon 5</li>
      <li>Marvin Gaye</li>
      <li>Massive Attack</li>
      <li>Matisyahu</li>
      <li>Mazzy Star</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=ImKY6TZEyrI' target ='_blank'
          >Fade into you</a><br/>
        </div>
        <hr />
      <li>Metallica</li>
      <li>Missy Elliot</li>
      <li>Modest Mouse</li>
      <li>Morcheeba</li>
      <li>Mormon Tabernacle Choir</li>
        <div className='twoColumn'>
        <a href='https://www.youtube.com/watch?v=B3PPU91809Q' target ='_blank'
        >What Child Is This ?</a><br/>
        <a href='https://www.youtube.com/watch?v=LbVrjFjulxo' target ='_blank'
        >O Holy Night</a><br/>
        <a href='https://www.youtube.com/watch?v=k-W2Bkz_Rno' target ='_blank'
        >Carol of the Bells</a><br/>
        <a href='https://www.youtube.com/watch?v=gPKpkrqBwNs' target ='_blank'
        >Come, Thou Fount of Every Blessing</a><br/>
        </div>
        <hr />
      <li>Mumford and sons</li>
      <li>Nelly Furtado</li>
      <li>No Doubt</li>
      <li>Oasis</li>
      <li>Offspring</li>
      <li>Old Crow Medicine Show</li>
      <li>Our Lady Peace</li>
      <li>Outkast</li>
      <li>Pearl Jam</li>
      <li>Pentatonix</li>
      <li>Phil Collins</li>
        <a href='https://www.youtube.com/watch?v=MN3x-kAbgFU' target ='_blank'
        >In the Air Tonight</a><br/>
        <hr />
      <li>Poe</li>
        <a href='https://www.youtube.com/watch?v=1cujypawzVQ' target ='_blank'
        >Hello</a><br/>
        <hr />
      <li>Portishead</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=gEQNAZGoZrw' target ='_blank'
          >Wandering Star</a><br/>
          <a href='https://www.youtube.com/watch?v=WQYsGWh_vpE' target ='_blank'
          >Roads</a><br/>
          <a href='https://www.youtube.com/watch?v=B4TxEsRxltg' target ='_blank'
          >Strangers</a><br/>
          <a href='https://www.youtube.com/watch?v=57C_eWa2bgo' target ='_blank'
          >It Could Be Sweet</a><br/>
          <a href='https://www.youtube.com/watch?v=wlW1XtdxGFE' target ='_blank'
          >It's a Fire</a><br/>
          <a href='https://www.youtube.com/watch?v=vozNQX6Ye1A' target ='_blank'
          >All Mine</a><br/>
          <a href='https://www.youtube.com/watch?v=31BS2oTkaw8' target ='_blank'
          >Undenied</a><br/>
          <a href='https://www.youtube.com/watch?v=u7K72X4eo_s' target ='_blank'
          >Tear drop</a><br/>
          <a href='https://www.youtube.com/watch?v=wwTcxoBaca8' target ='_blank'
          >Insensible</a><br/>
          <a href='https://www.youtube.com/watch?v=6ylDDs3mdJE' target ='_blank'
          >Glory Box</a><br/>
        </div>
      <hr/>
      <li>Postal Service</li>
      <li>Prodigy</li>
      <li>Purity Ring</li>
        <a href='https://www.youtube.com/watch?v=0ZyZxxf5fVE' target ='_blank'
        >Flood on the Floor</a><br/>
        <hr />
      <li>Ra</li>
      <li>Rage Against the Machine</li>
      <li>Red Hot Chili Peppers</li>
      <li>REM</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=xwtdhWltSIg' target ='_blank'
          >Losing My Religion</a><br/>
          <a href='https://www.youtube.com/watch?v=5rOiW_xY-kc' target ='_blank'
          >Everybody Hurts </a><br/>
          <a href='https://www.youtube.com/watch?v=YYOKMUTTDdA' target ='_blank'
          >Shiny Happy People</a><br/>
          <a href='https://www.youtube.com/watch?v=AKKqLl_ZEEY' target ='_blank'
          >Stand </a><br/>
        </div>
        <hr/>
      <li>Roots</li>
      <li>Sade</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=_WcWHZc8s2I' target ='_blank'
          >No Ordinary Love </a><br/>
        </div>
        <hr/>
      <li>Santana</li>
      <li>Seether</li>
      <li>Shakira</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=Dsp_8Lm1eSk' target ='_blank'
          >La Tortura</a><br/>
          <a href='https://www.youtube.com/watch?v=5BzkbSq7pww' target ='_blank'
          >Ojos Así</a><br/>
          <a href='https://www.youtube.com/watch?v=a8Rwz6zBJSE' target ='_blank'
          >Suerte (Whenever, Wherever)</a><br/>
          <a href='https://www.youtube.com/watch?v=DUT5rEU6pqM' target ='_blank'
          >Hips Don't Lie</a><br/>
        </div>
        <hr/>
      <li>Skinny Puppy</li>
      <li>Smashing Pumpkins</li>
      <li>Soggy Bottom Boys</li>
      <li>Soul Coughing</li>
      <li>Soundgarden</li>
      <li>Staind</li>
      <li>Stereo MCs</li>
      <li>Sting</li>
      <li>Stone Sour</li>
      <li>Stone Temple Pilots</li>
      <li>Sublime</li>
      <li>Submarines</li>
      <li>Susanne Vega</li>
        <div className='twoColumn'>
          <a href='https://www.youtube.com/watch?v=-26hsZqwveA' target ='_blank'
          >Tom's Diner</a><br/>
        </div>
        <hr/>
      <li>Switchfoot</li>
      <li>Sysem of a Down</li>
      <li>Temptations</li>
      <li>Third Eye Blind</li>
      <li>Tom Petty</li>
      <li>Tonic</li>
      <li>Trapt</li>
      <li>A Tribe Called Quest</li>
      <li>Two Finger</li>
      <li>Unkle</li>
      <li>Verve</li>
      <li>Verve Pipe</li>
      <li>Weezer</li>
      <li>White Town</li>
      <li>Willie Nelson</li>
      <li>Zack Brown Band</li>
      <li>ZHU</li>

      </div>
    );
  }
}

export default Music ;
