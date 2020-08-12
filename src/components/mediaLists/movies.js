import React from 'react';


class Movies extends React.Component {
  render () {
    const Items = [
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
      {movie: '', slug: '', url:'' },
      {movie: '', slug: '', url:'' },
      {movie: '', slug: '', url:'' },
      {movie: '', slug: '', url:'' },
    ]
    const renderItems = Items.map(item => {
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
        <li><a href="https://www.youtube.com/watch?v=PlDbxogHPao" target='_blank'
        >***Bram Stokers Dracula</a></li>
        <li><a href="https://www.youtube.com/watch?v=pa9331xmvhg" target='_blank'
        >Bubba Hotep</a></li>
        <li><a href="https://www.youtube.com/watch?v=pyRUijyrXr4" target='_blank'
        >Burbs</a></li>
        <li><a href='https://www.youtube.com/watch?v=NsIilFNNmkY' target='_blank'
        >Cabin in the Woods</a></li>
        <li><a href='https://www.youtube.com/watch?v=2TWYDogv4WQ' target='_blank'
        >***Castaway</a></li>
        <li><a href='https://www.youtube.com/watch?v=RQUdbvUVfgE' target='_blank'
        >Cell</a></li>
        <li><a href='https://www.youtube.com/watch?v=HHamE8gmA8Q' target='_blank'
        >Cocoon</a></li>
        <li><a href='https://www.youtube.com/watch?v=OFVGCUIXJls' target='_blank'
        >Charlie and the Chocolate F</a></li>
        <li><a href='https://www.youtube.com/watch?v=AEOfT7hUcDs' target='_blank'
        >Chicken Run</a></li>
        <li><a href='https://www.youtube.com/watch?v=cfjEZ88NHBw' target='_blank'
        >Christmas Story</a></li>
        <li><a href='https://www.youtube.com/watch?v=Pa7oVPru4J8' target='_blank'
        >***City of Lost Children</a></li>
        <li><a href='https://www.youtube.com/watch?v=Mlfn5n-E2WE' target='_blank'
        >Clerks</a></li>
        <li><a href='https://www.youtube.com/watch?v=wxqSIsxMlYQ' target='_blank'
        >Cloverfield</a></li>
        <li><a href='https://www.youtube.com/watch?v=cDDdeHtrxfA' target='_blank'
        >Clue</a></li>
        <li><a href='https://www.youtube.com/watch?v=f-3YshvxA1M' target='_blank'
        >***Color of Magic</a></li>
        <li><a href='https://www.youtube.com/watch?v=XyUwEO7xelY' target='_blank'
        >***Coraline</a></li>
        <li><a href='https://www.youtube.com/watch?v=zH7KZD5vGBY' target='_blank'
        >Cowboys and Aliens</a></li>
        <li><a href='https://www.youtube.com/watch?v=rijQ5oBFlO0' target='_blank'
        >Crocodile Dundee</a></li>
        <li><a href='https://www.youtube.com/watch?v=oYaOhlHnuZw' target='_blank'
        >Crocodile Dundee 2</a></li>
        <li><a href='https://www.youtube.com/watch?v=gLpZ_5bHmo8' target='_blank'
        >***Crouching Tiger Hidden Dragon</a></li>
        <li><a href='https://www.youtube.com/watch?v=l1t8OZn_uhE' target='_blank'
        >Dale and Tucker Vs Evil</a></li>
        <li><a href='https://www.youtube.com/watch?v=20CRw3XdETA' target='_blank'
        >***Dogma</a></li>
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
        <li>Parasite</li>
        <li>Nightmare on Elm Street</li>
        <li>The Resort</li>
        <li>The Vault</li>
        <li>Tusk</li>
        </div>

      </div>
      </div>
    );
  }
}

export default Movies;

/*
        >Inception</a></li>
        >Interstellar</a></li>
        >Interview with a Vampire</a></li>
        >Island</a></li>
        >Isle of Dogs</a></li>
        >***It's a Wonderful Life</a></li>
        >Joe Dirt</a></li>
        >***Jurassic Park</a></li>
        >Jurasic World Fallen Kingdom</a></li>
        >Kick Ass</a></li>
        >***Kill Bill</a></li>
        >***Kill Bill 2</a></li>
        >***King Arthur</a></li>
        <li><a href='' target='_blank'
        >kingsman</a></li>
        <li><a href='' target='_blank'
        >***Kung Fu Hustle</a></li>
        <li><a href='' target='_blank'
        >***Laberinth</a></li>
        <li><a href='' target='_blank'
        >Legend of the Drunken Master</a></li>
        <li><a href='' target='_blank'
        >Legend of Sleepy Hollow</a></li>
        <li><a href='' target='_blank'
        >***Let the Right One In</a></li>
        <li><a href='' target='_blank'
        >***Life of Pi</a></li>
        <li><a href='' target='_blank'
        >Little Evil</a></li>
        <li><a href='' target='_blank'
        >Little Prince</a></li>
        <li><a href='' target='_blank'
        >***Lord of the Rings</a></li>
        <li><a href='' target='_blank'
        >***Lord of the Rings 2</a></li>
        <li><a href='' target='_blank'
        >***Lord of the Rings 3</a></li>
        <li><a href='' target='_blank'
        >Lucy</a></li>
        <li><a href='' target='_blank'
        >Maze Runner</a></li>
        <li><a href='' target='_blank'
        >Mexican</a></li>
        <li><a href='' target='_blank'
        >Momento</a></li>
        <li><a href='' target='_blank'
        >Moon</a></li>
        <li><a href='' target='_blank'
        >***Moonrise Kingdom</a></li>
        <li><a href='' target='_blank'
        >Mystery Men</a></li>
        <li><a href='' target='_blank'
        >***Nacho Libre</a></li>
        <li><a href='' target='_blank'
        >Napoleon Dynomite</a></li>
        <li><a href='' target='_blank'
        >National Treasure</a></li>
        <li><a href='' target='_blank'
        >***Neverending Story</a></li>
        <li><a href='' target='_blank'
        >***O Brother Where Art Thou</a></li>
        <li><a href='' target='_blank'
        >Odd Thomas</a></li>
        <li><a href='' target='_blank'
        >Office Space</a></li>
        <li><a href='' target='_blank'
        >***Once Upon a Time in Mexico</a></li>
        <li><a href='' target='_blank'
        >Orphanage</a></li>
        <li><a href='' target='_blank'
        >Others</a></li>
        <li><a href='' target='_blank'
        >Pan's Labrynth</a></li>
        <li><a href='' target='_blank'
        >Pee Wee Herman's big Adventure</a></li>
        <li><a href='' target='_blank'
        >Postman</a></li>
        <li><a href='' target='_blank'
        >***Princess Bride</a></li>
        <li><a href='' target='_blank'
        >Princess Mononoke</a></li>
        <li><a href='' target='_blank'
        >***Pulp Fiction</a></li>
        <li><a href='' target='_blank'
        >Quiet Place</a></li>
        <li><a href='' target='_blank'
        >Red</a></li>
        <li><a href='' target='_blank'
        >Ring</a></li>
        <li><a href='' target='_blank'
        >Romancing the Stone</a></li>
        <li><a href='' target='_blank'
        >Romeo and Juliet</a></li>
        <li><a href='' target='_blank'
        >Saving Private Ryan</a></li>
        <li><a href='' target='_blank'
        >Scott Pilgrim Vs. the World</a></li>
        <li><a href='' target='_blank'
        >Scrooged</a></li>
        <li><a href='' target='_blank'
        >***Second Hand Lions</a></li>
        <li><a href='' target='_blank'
        >***Secret Life of Walter Mitty</a></li>
        <li><a href='' target='_blank'
        >Secret Window</a></li>
        <li><a href='' target='_blank'
        >***Series of unfortunate Events</a></li>
        <li><a href='' target='_blank'
        >Sherlock Holmes</a></li>
        <li><a href='' target='_blank'
        >Shoot em Up</a></li>
        <li><a href='' target='_blank'
        >Shutter Island</a></li>
        <li><a href='' target='_blank'
        >Sicarrio</a></li>
        <li><a href='' target='_blank'
        >Simple Plan</a></li>
        <li><a href='' target='_blank'
        >***Sin City</a></li>
        <li><a href='' target='_blank'
        >***Snatch</a></li>
        <li><a href='' target='_blank'
        >Space Balls</a></li>
        <li><a href='' target='_blank'
        >Star Wars 4</a></li>
        <li><a href='' target='_blank'
        >Star Wars 5</a></li>
        <li><a href='' target='_blank'
        >Star Wars 6</a></li>
        <li><a href='' target='_blank'
        >Star Wars 7</a></li>
        <li><a href='' target='_blank'
        >Sucker Punch</a></li>
        <li><a href='' target='_blank'
        >Super 8</a></li>
        <li><a href='' target='_blank'
        >Swiss Family Robinson</a></li>
        <li><a href='' target='_blank'
        >Terminator</a></li>
        <li><a href='' target='_blank'
        >Terminator 2</a></li>
        <li><a href='' target='_blank'
        >***They Look Like People</a></li>
        <li><a href='' target='_blank'
        >Thin Red Line</a></li>
        <li><a href='' target='_blank'
        >***Troy</a></li>
        <li><a href='' target='_blank'
        >Truman Show</a></li>
        <li><a href='' target='_blank'
        >***Unbreakable</a></li>
        <li><a href='' target='_blank'
        >***Underworld</a></li>
        <li><a href='' target='_blank'
        >Very Bad Things</a></li>
        <li><a href='' target='_blank'
        >Village</a></li>
        <li><a href='' target='_blank'
        >Waterboy</a></li>
        <li><a href='' target='_blank'
        >***Way of the Gun</a></li>
        <li><a href='' target='_blank'
        >What Dreams May Come</a></li>
        <li><a href='' target='_blank'
        >What Lies Beneath</a></li>
        <li><a href='' target='_blank'
        >Wheels on Meals</a></li>
        <li><a href='' target='_blank'
        >Willow</a></li>
        >Wizard of Oz</a></li>
        >Wizard of Oz 2</a></li>
        >Wrist Cutters</a></li>
        >Zombieland</a></li>
        >10 Cloverfield Lane</a></li>
        >13th Warrior</a></li>
        1917
        >***28 Days Later</a></li>
        >28 Weeks Later</a></li>


*/
