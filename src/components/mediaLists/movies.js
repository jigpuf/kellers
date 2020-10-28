import React from 'react';


const Movies = () => {
    const items = [
      {movie: 'Adjustment Bureau', slug: 'adjust', url:'https://www.youtube.com/watch?v=wZJ0TP4nTaE' },
      {movie: 'Aeon Flux', slug: 'aeon', url:'https://www.youtube.com/watch?v=d11loPMnC2w' },
      {movie: 'Akira', slug: 'akira', url:'https://www.youtube.com/watch?v=i_MONOV1_sc' },
      {movie: 'Aladdin', slug: 'aladin', url:'https://www.youtube.com/watch?v=HlULSKurtzg' },
      {movie: 'Alien', slug: 'alien', url:'https://www.youtube.com/watch?v=LjLamj-b0I8' },
      {movie: 'Alien 2', slug: '', url:'https://www.youtube.com/watch?v=XKSQmYUaIyE' },
      {movie: '***American Beauty', slug: '', url:'https://www.youtube.com/watch?v=3ycmmJ6rxA8' },
      {movie: '***Amile', slug: '', url:'https://www.youtube.com/watch?v=HUECWi5pX7o' },
      {movie: 'Anchorman', slug: 'anchorman', url:'https://www.youtube.com/watch?v=-T3wnP91OnI' },
      {movie: 'Apocalypto', slug: 'apoalypto', url:'https://www.youtube.com/watch?v=pXuwjdQx924' },
      {movie: '***Atlantis', slug: 'atlantis', url:'https://www.youtube.com/watch?v=sZIimDPZQwg' },
      {movie: '***Babadook', slug: 'babadook', url:'https://www.youtube.com/watch?v=k5WQZzDRVtw' },
      {movie: 'Batteries not Included', slug: 'batteries', url:'https://www.youtube.com/watch?v=h25ZL7fxZ8o' },
      {movie: '***Beach', slug: 'beach', url:'https://www.youtube.com/watch?v=RweHayPG3wA' },
      {movie: 'Behind Enemy Lines', slug: '', url:'https://www.youtube.com/watch?v=PUeWBp_kmuo' },
      {movie: 'Beowolf', slug: 'beowolf', url:'https://www.youtube.com/watch?v=DaShOr5AeKA' },
      {movie: 'Beatlejuice', slug: 'beetlejuice', url:'https://www.youtube.com/watch?v=ickbVzajrk0' },
      {movie: '***Big Fish', slug: 'bigFish', url:'https://www.youtube.com/watch?v=dF-Iy7vIOJA' },
      {movie: 'Big Lebowski', slug: 'bigLebowski', url:'https://www.youtube.com/watch?v=cd-go0oBF4Y' },
      {movie: 'Black Hawk Down', slug: 'blackHawk', url:'https://www.youtube.com/watch?v=2GfBkC3qs78' },
      {movie: 'Blade', slug: 'Blade', url:'https://www.youtube.com/watch?v=kaU2A7KyOu4' },
      {movie: 'Blair Witch Project', slug: 'blairWhitch', url:'https://www.youtube.com/watch?v=a_Hw4bAUj8A' },
      {movie: 'Boondock Saints', slug: 'boondock', url:'https://www.youtube.com/watch?v=ydXojYfCF3I' },
      {movie: '***Bram Stokers Dracula', slug: 'bram', url:'https://www.youtube.com/watch?v=PlDbxogHPao' },
      {movie: 'Bubba Hotep', slug: 'bubba', url:'https://www.youtube.com/watch?v=pa9331xmvhg' },
      {movie: 'Burbs', slug: 'burbs', url:'https://www.youtube.com/watch?v=pyRUijyrXr4' },
      {movie: 'Cabin in the Woods', slug: 'cabin', url:'https://www.youtube.com/watch?v=NsIilFNNmkY' },
      {movie: '***Castaway', slug: 'castaway', url:'https://www.youtube.com/watch?v=2TWYDogv4WQ' },
      {movie: 'Cell', slug: 'cell', url:'https://www.youtube.com/watch?v=RQUdbvUVfgE' },
      {movie: 'Cocoon', slug: 'cocoon', url:'https://www.youtube.com/watch?v=HHamE8gmA8Q' },
      {movie: 'Charlie and the Chocolate Factory', slug: 'charlie', url:'https://www.youtube.com/watch?v=OFVGCUIXJls' },
      {movie: 'Chicken Run', slug: 'chicken', url:'https://www.youtube.com/watch?v=AEOfT7hUcDs' },
      {movie: 'Christmas Story', slug: 'christmas', url:'https://www.youtube.com/watch?v=cfjEZ88NHBw' },
      {movie: '***City of Lost Children', slug: 'city', url:'https://www.youtube.com/watch?v=Pa7oVPru4J8' },
      {movie: 'Clerks', slug: 'clerks', url:'https://www.youtube.com/watch?v=Mlfn5n-E2WE' },
      {movie: 'Cloverfield', slug: 'clover', url:'https://www.youtube.com/watch?v=wxqSIsxMlYQ' },
      {movie: 'Clue', slug: 'clue', url:'https://www.youtube.com/watch?v=cDDdeHtrxfA' },
      {movie: '***Color of Magic', slug: 'color', url:'https://www.youtube.com/watch?v=f-3YshvxA1M' },
      {movie: '***Coraline', slug: 'cora', url:'https://www.youtube.com/watch?v=XyUwEO7xelY' },
      {movie: 'Cowboys and Aliens', slug: 'cowboys', url:'https://www.youtube.com/watch?v=zH7KZD5vGBY' },
      {movie: 'Crocodile Dundee', slug: 'cd1', url:'https://www.youtube.com/watch?v=rijQ5oBFlO0' },
      {movie: 'Crocodile Dundee 2', slug: 'cd2', url:'https://www.youtube.com/watch?v=oYaOhlHnuZw' },
      {movie: '***Crouching Tiger Hidden Dragon', slug: 'crouching', url:'https://www.youtube.com/watch?v=gLpZ_5bHmo8' },
      {movie: 'Dale and Tucker Vs Evil', slug: 'dale', url:'https://www.youtube.com/watch?v=l1t8OZn_uhE' },
      {movie: '***Dogma', slug: 'dogma', url:'https://www.youtube.com/watch?v=20CRw3XdETA' },
    ]
    const renderItems = items.map(item => {
      return (
        <tr key={item.slug}>
          <td><a href={item.url} target ='_blank'>{item.movie}</a></td>
        </tr>
      )
    })
    return (
      <div>
        <h2>Favorite Movies</h2>
        <div>
          <div className='twoColumn'>
            <table>
            <tr><th>movie</th></tr>
            {renderItems}
            </table>
          </div>
      <div className= "twoColumn">
      <ol>
        <li><a href='https://www.youtube.com/watch?v=bzLn8sYeM9o' target='_blank'
        >***Donnie Darko</a></li>
        <li><a href='https://www.youtube.com/watch?v=PPOaxHqoYxo' target='_blank'
        >Drag me to Hell</a></li>
        <li><a href='https://www.youtube.com/watch?v=M94yyfWy-KI' target='_blank'
        >Edward Scissorhands</a></li>
        <li><a href='https://www.youtube.com/watch?v=4O-sMh_DO6I' target='_blank'
        >Enemy at the Gates</a></li>
        <li><a href='https://www.youtube.com/watch?v=qYAETtIIClk' target='_blank'
        >ET</a></li>
        <li><a href='https://www.youtube.com/results?search_query=eternal+sunshine+of+the+spotless+mind+official+trailer' target='_blank'
        >Eternal Sunshine of the Spotless Mind</a></li>
        <li><a href='https://www.youtube.com/watch?v=coGH4OaR9hc' target='_blank'
        >Evil Dead</a></li>
        <li><a href='https://www.youtube.com/watch?v=6lM3NPeEG24' target='_blank'
        >Evil Dead 2</a></li>
        <li><a href='https://www.youtube.com/watch?v=UHZQEtG8xYo' target='_blank'
        >Evil Dead 3</a></li>
        <li><a href='https://www.youtube.com/watch?v=HAdbdUt_h9M' target='_blank'
        >eXistenz</a></li>
        <li><a href='https://www.youtube.com/watch?v=HAdbdUt_h9M' target='_blank'
        >Explorers</a></li>
        <li><a href='https://www.youtube.com/watch?v=IwsYyRc9j4g' target='_blank'
        >Fall</a></li>
        <li><a href='https://www.youtube.com/watch?v=HIjhgXteLlY' target='_blank'
        >Fantastic fear of Everything</a></li>
        <li><a href='https://www.youtube.com/watch?v=n2igjYFojUo' target='_blank'
        >***Fantastic Mr. Fox</a></li>
        <li><a href='https://www.youtube.com/watch?v=fQ9RqgcR24g' target='_blank'
        >***Fifth Element</a></li>
        <li><a href='https://www.youtube.com/watch?v=Y6cwmHL2tFI' target='_blank'
        >***Fight Club</a></li>
        <li><a href='https://www.youtube.com/watch?v=EmXWcXKXWBk' target='_blank'
        >***Finding a friend for the End of the World</a></li>
        <li><a href='https://www.youtube.com/watch?v=gVebPEYiq2o' target='_blank'
        >Flight of the Navigator</a></li>
        <li><a href='https://www.youtube.com/watch?v=XHhAG-YLdk8' target='_blank'
        >Forrest Gump</a></li>
        <li><a href='https://www.youtube.com/watch?v=hEJnMQG9ev8' target='_blank'
        >Fury Road</a></li>
        <li><a href='https://www.youtube.com/watch?v=6hDkhw5Wkas' target='_blank'
        >Ghostbusters</a></li>
        <li><a href='https://www.youtube.com/watch?v=UnzH75FlwvU' target='_blank'
        >Ghostbusters 2</a></li>
        <li><a href='https://www.youtube.com/watch?v=Rml5ehAl7SM' target='_blank'
        >***Ghost Dog</a></li>
        <li><a href='https://www.youtube.com/watch?v=hJ2j4oWdQtU' target='_blank'
        >***Goonies</a></li>
        <li><a href='https://www.youtube.com/watch?v=owK1qxDselE' target='_blank'
        >***Gladiator</a></li>
        <li><a href='https://www.youtube.com/watch?v=zru-1DbbcsA' target='_blank'
        >Grand Budapest Hotel</a></li>
        <li><a href='https://www.youtube.com/watch?v=EAe-1Lv1KYU' target='_blank'
        >Green Street Hooligans</a></li>
        <li><a href='https://www.youtube.com/watch?v=YC3bzK_i9_s' target='_blank'
        >Grudge</a></li>
        <li><a href='https://www.youtube.com/watch?v=yM7VVKxjeag' target='_blank'
        >Guardians of the Galaxy</a></li>
        <li><a href='https://www.youtube.com/watch?v=2LIQ2-PZBC8' target='_blank'
        >Guardians of the Galaxy 2</a></li>
        <li><a href='https://www.youtube.com/watch?v=iWFVAIbIkS4' target='_blank'
        >***Hector's Search for Happiness</a></li>
        <li><a href='https://www.youtube.com/watch?v=iWFVAIbIkS4' target='_blank'
        >***Hidden</a></li>
        <li><a href='https://www.youtube.com/watch?v=cSOUIuGcY74' target='_blank'
        >Hogfather</a></li>
        <li><a href='https://www.youtube.com/watch?v=1Fg5iWmQjwk' target='_blank'
        >Hotel Budapest</a></li>
        <li><a href='https://www.youtube.com/watch?v=-GLVaSYzAvg' target='_blank'
        >***House of Flying Daggers</a></li>
        <li><a href='https://www.youtube.com/watch?v=Hv3obL9HqyY' target='_blank'
        >Hugo</a></li>
        <li><a href='https://www.youtube.com/watch?v=HcVrp--9UUc' target='_blank'
        >Idle Hands</a></li>
        <li><a href='https://www.youtube.com/watch?v=AlugldzO9zY' target='_blank'
        >In the Mouth of Madness</a></li>
        <li><a href='https://www.youtube.com/watch?v=HqOSLZl9GUo' target='_blank'
        >***Indiana Jones</a></li>
        <li><a href='https://www.youtube.com/watch?v=HOwWfns4qqw' target='_blank'
        >***Indiana Jones 2</a></li>
        <li><a href='https://www.youtube.com/watch?v=sagmdpkWUqc' target='_blank'
        >***Indiana Jones 3</a></li>
        <li><a href='https://www.youtube.com/watch?v=qRYDNWXuip8' target='_blank'
        >Inglorious Bastards</a></li>
        <li><a href="https://www.youtube.com/watch?v=UrIbxk7idYA" target='_blank'
        >***300</a></li>
        <li><a href="https://www.youtube.com/watch?v=_qApXdc1WPY" target='_blank'
        >***9</a></li>
      </ol>

        <h3>Rest of Lit</h3>
        <li>Parasite</li>
        <li>Nightmare on Elm Street</li>
        <li>The Resort</li>
        <li>The Vault</li>
        <li>Tusk</li>
        <li>Inception</li>
        <li>Interstellar</li>
        <li>Interview with a Vampire</li>
        <li>Island</li>
        <li>Isle of Dogs</li>
        <li>***It's a Wonderful Life</li>
        <li>Joe Dirt</li>
        <li>***Jurassic Park</li>
        <li>Jurasic World Fallen Kingdom</li>
        <li>Kick Ass</li>
        <li>***Kill Bill</li>
        <li>***Kill Bill 2</li>
        <li>***King Arthur</li>
        <li>kingsman</li>
        <li>***Kung Fu Hustle</li>
        <li>***Laberinth</li>
        <li>Legend of the Drunken Master</li>
        <li>Legend of Sleepy Hollow</li>
        <li>***Let the Right One In</li>
        <li>***Life of Pi</li>
        <li>Little Evil</li>
        <li>Little Prince</li>
        <li>***Lord of the Rings</li>
        <li>***Lord of the Rings 2</li>
        <li>***Lord of the Rings 3</li>
        <li>Lucy</li>
        <li>Maze Runner</li>
        <li>Mexican</li>
        <li>Momento</li>
        <li>Moon</li>
        <li>***Moonrise Kingdom</li>
        <li>Mystery Men</li>
        <li>***Nacho Libre</li>
        <li>Napoleon Dynomite</li>
        <li>National Treasure</li>
        <li>***Neverending Story</li>
        <li>***O Brother Where Art Thou</li>
        <li>Odd Thomas</li>
        <li>Office Space</li>
        <li>***Once Upon a Time in Mexico</li>
        <li>Orphanage</li>
        <li>Others</li>
        <li>Pan's Labrynth</li>
        <li>Pee Wee Herman's big Adventure</li>
        <li>Postman</li>
        <li>***Princess Bride</li>
        <li>Princess Mononoke</li>
        <li>***Pulp Fiction</li>
        <li>Quiet Place</li>
        <li>Red</li>
        <li>Ring</li>
        <li>Romancing the Stone</li>
        <li>Romeo and Juliet</li>
        <li>Saving Private Ryan</li>
        <li>Scott Pilgrim Vs. the World</li>
        <li>Scrooged</li>
        <li>***Second Hand Lions</li>
        <li>***Secret Life of Walter Mitty</li>
        <li>Secret Window</li>
        <li>***Series of unfortunate Events</li>
        <li>Sherlock Holmes</li>
        <li>Shoot em Up</li>
        <li>Shutter Island</li>
        <li>Sicarrio</li>
        <li>Simple Plan</li>
        <li>***Sin City</li>
        <li>***Snatch</li>
        <li>Space Balls</li>
        <li>Star Wars 4</li>
        <li>Star Wars 5</li>
        <li>Star Wars 6</li>
        <li>Star Wars 7</li>
        <li>Sucker Punch</li>
        <li>Super 8</li>
        <li>Swiss Family Robinson</li>
        <li>Terminator</li>
        <li>Terminator 2</li>
        <li>***They Look Like People</li>
        <li>Thin Red Line</li>
        <li>***Troy</li>
        <li>Truman Show</li>
        <li>***Unbreakable</li>
        <li>***Underworld</li>
        <li>Very Bad Things</li>
        <li>Village</li>
        <li>Waterboy</li>
        <li>***Way of the Gun</li>
        <li>What Dreams May Come</li>
        <li>What Lies Beneath</li>
        <li>Wheels on Meals</li>
        <li>Willow</li>
        <li>Wizard of Oz</li>
        <li>Wizard of Oz 2</li>
        <li>Wrist Cutters</li>
        <li>Zombieland</li>
        <li>10 Cloverfield Lane</li>
        <li>13th Warrior</li>
        <li>1917</li>
        <li>***28 Days Later</li>
        <li>28 Weeks Later</li>
        <h3>To Watch</h3>
          <li><a href="https://www.youtube.com/watch?v=u1uP_8VJkDQ" target='_blank'
          >Night Crawler</a></li>
          <li><a href="https://www.youtube.com/watch?v=iqkcX_I5MMU" target='_blank'
          >The edge</a></li>
          <li><a href="https://www.youtube.com/watch?v=kKsceLZu_wg" target='_blank'
          >From The Dark</a></li>
          <li><a href="https://www.youtube.com/watch?v=4Zfw8__A7ps" target='_blank'
          >Bricks(detective movie)</a></li>
          <li><a href="https://www.youtube.com/watch?v=HkZYbOH0ujw" target='_blank'
          >It follows</a></li>
          <li><a href="https://www.youtube.com/watch?v=5F-YEbm65a8" target='_blank'
          >What happened to Monday</a></li>
          <li><a href="https://www.youtube.com/watch?v=Nfoa6QKe4e0" target='_blank'
          >Taking Lives</a></li>
          <li><a href="https://www.youtube.com/watch?v=yg9GW3Krsi8" target='_blank'
          >Horns</a></li>
          <li><a href="https://www.youtube.com/watch?v=VucLIxy23TA" target='_blank'
          >Snake Eyes</a></li>
          <li><a href="https://www.youtube.com/watch?v=eUdM9vrCbow" target='_blank'
          >Django Unchained</a></li>
        </div>

      </div>
      </div>
    );

}

export default Movies;

/*





*/
