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
      {movie: '***Donnie Darko', slug: 'donnie', url:'' },
      {movie: 'Drag me to Hell', slug: 'drag', url:'https://www.youtube.com/watch?v=PPOaxHqoYxo' },
      {movie: 'Edward Scissorhands', slug: 'edward', url:'https://www.youtube.com/watch?v=M94yyfWy-KI' },
      {movie: 'Enemy at the Gates', slug: 'enemy', url:'https://www.youtube.com/watch?v=4O-sMh_DO6I' },
      {movie: 'ET', slug: 'et', url:'https://www.youtube.com/watch?v=qYAETtIIClk' },
      {movie: 'Eternal Sunshine of the Spotless Mind', slug: 'eternal', url:'https://www.youtube.com/results?search_query=eternal+sunshine+of+the+spotless+mind+official+trailer'},
      {movie: 'Evil Dead', slug: 'evil', url:'https://www.youtube.com/watch?v=coGH4OaR9hc' },
      {movie: 'Evil Dead 2', slug: 'evil2', url:'https://www.youtube.com/watch?v=6lM3NPeEG24' },
      {movie: 'Evil Dead 3', slug: 'evil3', url:'https://www.youtube.com/watch?v=UHZQEtG8xYo' },
      {movie: 'eXistenz', slug: 'exist', url:'https://www.youtube.com/watch?v=HAdbdUt_h9M' },
      {movie: 'Explorers', slug: 'explorers', url:'https://www.youtube.com/watch?v=HAdbdUt_h9M' },
      {movie: 'Fall', slug: 'fall', url:'https://www.youtube.com/watch?v=IwsYyRc9j4g' },
      {movie: 'Fantastic fear of Everything', slug: 'fear', url:'https://www.youtube.com/watch?v=HIjhgXteLlY' },
      {movie: '***Fantastic Mr. Fox', slug: 'fox', url:'https://www.youtube.com/watch?v=n2igjYFojUo' },
      {movie: '***Fifth Element', slug: 'fifth', url:'https://www.youtube.com/watch?v=fQ9RqgcR24g' },
      {movie: '***Fight Club', slug: 'fightClub', url:'https://www.youtube.com/watch?v=Y6cwmHL2tFI' },
      {movie: '***Finding a friend for the End of the World', slug: 'friend', url:'https://www.youtube.com/watch?v=EmXWcXKXWBk' },
      {movie: 'Flight of the Navigator', slug: 'navigator', url:'https://www.youtube.com/watch?v=gVebPEYiq2o' },
      {movie: 'Forrest Gump', slug: 'forrest', url:'https://www.youtube.com/watch?v=XHhAG-YLdk8' },
      {movie: 'Fury Road', slug: 'fury', url:'https://www.youtube.com/watch?v=hEJnMQG9ev8' },
      {movie: 'Ghostbusters', slug: 'ghostbuster', url:'https://www.youtube.com/watch?v=6hDkhw5Wkas' },
      {movie: 'Ghostbusters 2', slug: 'ghostbuster2', url:'https://www.youtube.com/watch?v=UnzH75FlwvU' },
      {movie: '***Ghost Dog', slug: 'ghostdog', url:'https://www.youtube.com/watch?v=Rml5ehAl7SM' },
      {movie: '***Goonies', slug: 'goonies', url:'https://www.youtube.com/watch?v=hJ2j4oWdQtU' },
      {movie: '***Gladiator', slug: 'gladiator', url:'https://www.youtube.com/watch?v=owK1qxDselE' },
      {movie: 'Grand Budapest Hotel', slug: '', url:'https://www.youtube.com/watch?v=zru-1DbbcsA' },
      {movie: 'Green Street Hooligans', slug: '', url:'https://www.youtube.com/watch?v=EAe-1Lv1KYU' },
      {movie: 'Grudge', slug: '', url:'https://www.youtube.com/watch?v=YC3bzK_i9_s' },
      {movie: 'Guardians of the Galaxy', slug: '', url:'https://www.youtube.com/watch?v=yM7VVKxjeag' },
      {movie: 'Guardians of the Galaxy 2', slug: '', url:'https://www.youtube.com/watch?v=2LIQ2-PZBC8' },
      {movie: '***Hectors Search for Happiness', slug: '', url:'https://www.youtube.com/watch?v=iWFVAIbIkS4' },
      {movie: '***Hidden', slug: '', url:'https://www.youtube.com/watch?v=iWFVAIbIkS4' },
      {movie: 'Hogfather', slug: '', url:'https://www.youtube.com/watch?v=cSOUIuGcY74' },
      {movie: 'Hotel Budapest', slug: '', url:'https://www.youtube.com/watch?v=1Fg5iWmQjwk' },
      {movie: '***House of Flying Daggers', slug: '', url:'https://www.youtube.com/watch?v=-GLVaSYzAvg' },
      {movie: 'Hugo', slug: '', url:'https://www.youtube.com/watch?v=Hv3obL9HqyY' },
      {movie: '', slug: '', url:'' },
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

        <h3>Rest of List</h3>
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
