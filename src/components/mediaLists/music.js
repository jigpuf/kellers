import React from 'react';

const Music = () =>{
    const items = [
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
      {artist: 'Bone Thugz-n-Harmony', song: 'East 1999', slug: 'bone1', url:'https://www.youtube.com/watch?v=nts-x67Usqc' },
      {artist: 'Bone Thugz-n-Harmony', song: 'Eternal', slug: 'bone2', url:'https://www.youtube.com/watch?v=hKQe23hUnY4' },
      {artist: 'Bone Thugz-n-Harmony', song: 'Mo Murder', slug: 'bone3', url:'https://www.youtube.com/watch?v=yjexC3phymM' },
      {artist: 'Bone Thugz-n-Harmony', song: 'Down 71', slug: 'bone4', url:'https://www.youtube.com/watch?v=_tARMnDih_A' },
      {artist: 'Bone Thugz-n-Harmony', song: 'No Surrender', slug: 'bone5', url:'https://www.youtube.com/watch?v=PGMd8vOLEDw' },
      {artist: 'Brand New', song: '', slug: 'brandNew1', url:'' },
      {artist: 'Bright Eyes', song: 'Lover I dont have to love', slug: 'bright1', url:'https://www.youtube.com/watch?v=bVOrsK9yEgY' },
      {artist: 'BT', song: 'Remember', slug: 'bt1', url:'https://www.youtube.com/watch?v=OiW38lWFM-Y' },
      {artist: 'Buku', song: 'Front to Back', slug: 'buku1', url:'https://www.youtube.com/watch?v=LoorIc5V6T8' },
      {artist: 'Bush', song: 'Mouth(Stringray)', slug: 'bush1', url:'' },
      {artist: 'Bush', song: 'Cold Contagious', slug: 'bush2', url:'' },
      {artist: 'Bush', song: 'Chemicals Between Us', slug: 'bush3', url:'' },
      {artist: 'Bush', song: 'Comedown', slug: 'bush4', url:'' },
      {artist: 'Bush', song: 'Machinehead', slug: 'bush5', url:'' },
      {artist: 'Bush', song: 'Glycerine', slug: 'bush6', url:'' },
      {artist: 'Bush', song: 'Swallowed', slug: 'bus71', url:'' },
      {artist: 'Busta Rhymes', song: 'Street Shizzle', slug: 'busta1', url:'' },
      {artist: 'Busta Rhymes', song: 'Turn It Up', slug: 'busta2', url:'' },
      {artist: 'Busta Rhymes', song: 'Tear da Roof Off', slug: 'busta3', url:'' },
      {artist: 'Busta Rhymes', song: 'Against All Odds', slug: 'busta4', url:'' },
      {artist: 'Busta Rhymes', song: 'As I Come Back', slug: 'busta5', url:'' },
      {artist: 'Busta Rhymes', song: 'Truck Volume', slug: 'busta6', url:'' },
      {artist: 'Busta Rhymes', song: 'Break Ya Neck', slug: 'busta7', url:'' },
      {artist: 'Busta Rhymes', song: 'Bounce', slug: 'busta8', url:'' },
      {artist: 'Busta Rhymes', song: 'Holla', slug: 'busta9', url:'' },
      {artist: 'Busta Rhymes', song: 'Matxh the Name', slug: 'busta10', url:'' },
      {artist: 'Busta Rhymes', song: 'We Could Take it Outside', slug: 'busta11', url:'' },
      {artist: 'Busta Rhymes', song: 'Things We do For Money', slug: 'busta12', url:'' },
      {artist: 'Butthole Surfers', song: 'Pepper', slug: 'butt1', url:'' },
      {artist: 'Butthole Surfers', song: 'Whatever', slug: 'butt2', url:'' },
      {artist: 'Cake', song: '*Short Skirt Long Jacket*', slug: 'cake1', url:'' },
      {artist: 'Cake', song: '*Frank Sinatra*', slug: 'cake2', url:'' },
      {artist: 'Cake', song: '*The Distance*', slug: 'cake3', url:'' },
      {artist: 'Cake', song: '*Never There*', slug: 'cake3', url:'' },
      {artist: 'Cannibal Ox', song: 'Iron Galaxy', slug: 'cannibal1', url:'' },
      {artist: 'Cannibal Ox', song: 'Ox Out the Cage', slug: 'cannibal2', url:'' },
      {artist: 'Cannibal Ox', song: 'ATOM', slug: 'cannibal3', url:'' },
      {artist: 'Cannibal Ox', song: 'Raspberry Fields', slug: 'cannibal4', url:'' },
      {artist: 'Cannibal Ox', song: 'Vein', slug: 'cannibal5', url:'' },
      {artist: 'Cannibal Ox', song: 'Stress Rap', slug: 'cannibal6', url:'' },
      {artist: 'Cannibal Ox', song: 'Real Earth', slug: 'cannibal7', url:'' },
      {artist: 'Cannibal Ox', song: 'Pigeon', slug: 'cannibal8', url:'' },
      {artist: 'Chainsmokers', song: 'Dont Let Me Down', slug: 'chain1', url:'' },
      {artist: 'Chevelle', song: 'Closure', slug: 'chevelle1', url:'' },
      {artist: 'Chevelle', song: 'Family System', slug: 'chevelle2', url:'' },
      {artist: 'ColdPlay', song: 'Spies', slug: 'coldplay1', url:'' },
      {artist: 'ColdPlay', song: 'Sparks', slug: 'coldplay2', url:'' },
      {artist: 'ColdPlay', song: 'Yellow', slug: 'coldplay3', url:'' },
      {artist: 'ColdPlay', song: 'Politik', slug: 'coldplay4', url:'' },
      {artist: 'ColdPlay', song: 'God Put a Smile on Your Face', slug: 'coldplay5', url:'' },
      {artist: 'ColdPlay', song: 'The Scientist', slug: 'coldplay6', url:'' },
      {artist: 'ColdPlay', song: 'Clocks', slug: 'coldplay7', url:'' },
      {artist: 'ColdPlay', song: 'See You Soon', slug: 'coldplay8', url:'' },
      {artist: 'Collective Soul', song: 'December(Acoustic)', slug: 'collective1', url:'' },
      {artist: 'Common Ground', song: 'This Shot', slug: 'common1', url:'' },
      {artist: 'Counting Crows', song: 'Mr. Jones', slug: 'counting1', url:'' },
      {artist: 'Counting Crows', song: 'Round Here(Acoustic)', slug: 'counting2', url:'' },
      {artist: 'Cranberries', song: 'Ode to my Family', slug: 'cranberries1', url:'https://www.youtube.com/watch?v=Zz-DJr1Qs54' },
      {artist: 'Cranberries', song: 'Dreams', slug: 'cranberries2', url:'https://www.youtube.com/watch?v=Yam5uK6e-bQ' },
      {artist: 'Cranberries', song: 'Zombie', slug: 'cranberries3', url:'' },
      {artist: 'Cranberries', song: 'Ridiculous Thoughts', slug: 'cranberries4', url:'' },
      {artist: 'Cranberries', song: 'Salvation', slug: 'cranberries5', url:'' },
      {artist: 'Creed', song: 'What If', slug: 'creed1', url:'' },
      {artist: 'Crucial Conflict', song: 'Desperado', slug: 'crucial1', url:'' },
      {artist: 'Crucial Conflict', song: 'Hay', slug: 'crucial2', url:'' },
      {artist: 'Crystal Method', song: 'Trip Like I Do', slug: 'crystal1', url:'' },
      {artist: 'Cubanismo', song: 'Descargada de Hoy', slug: 'cuban1', url:'' },
      {artist: 'Cypress Hill', song: 'Illusions', slug: 'cypress1', url:'' },
      {artist: 'Cypress Hill', song: 'Boom Biddy Bye Bye', slug: 'cypress2', url:'' },
      {artist: 'Cypress Hill', song: 'Red Light Visions', slug: 'cypress3', url:'' },
      {artist: 'Cypress Hill', song: 'Killafornia', slug: 'cypress4', url:'' },
      {artist: 'Da Rude', song: 'Dust Storm', slug: 'daRude1', url:'' },
      {artist: 'Deaf Leopard', song: 'Pour Some Sugar On Me', slug: 'deaf1', url:'' },
      {artist: 'Deftones', song: '*No ordinary love*', slug: 'deaftones1', url:'' },
      {artist: 'Dido', song: 'Thank You', slug: 'dido1', url:'https://www.youtube.com/watch?v=1TO48Cnl66w' },
      {artist: 'Dido', song: 'My Lovers Gone', slug: 'dido2', url:'https://www.youtube.com/watch?v=9LtrXAgsvB0' },
      {artist: 'Dispatch', song: 'Out loud', slug: 'dispatch1', url:'' },
      {artist: 'DJ Mystic', song: 'I See Stars', slug: 'djmystic1', url:'' },
      {artist: 'DNA and Susan Vega', song: 'Toms Diner', slug: 'dna1', url:'' },
      {artist: 'Duran Duran', song: 'Ordinary World', slug: 'duran1', url:'https://www.youtube.com/watch?v=wUgLge_MPIM' },
      {artist: 'Duran Duran', song: 'Come Undone', slug: 'duran2', url:'https://www.youtube.com/watch?v=Epj84QVw2rc' },
      {artist: 'Eddie Brickell', song: 'What I am', slug: 'eddie1', url:'https://www.youtube.com/watch?v=tDl3bdE3YQA' },
      {artist: 'Edward Maya', song: 'Stereo Love', slug: 'edward1', url:'' },
      {artist: 'Enigma', song: 'Return to Innocense', slug: 'enigma1', url:'https://www.youtube.com/watch?v=Rk_sAHh9s08' },
      {artist: 'Enigma', song: 'Beyond the invisible', slug: 'enigma2', url:'https://www.youtube.com/watch?v=f8mMWh62XpU' },
      {artist: 'Eminem', song: 'Rap God', slug: 'em1', url:'' },
      {artist: 'Eminem', song: 'Till I Collapse', slug: 'em2', url:'' },
      {artist: 'Eminem', song: 'I Am Who You Say I Am', slug: 'em3', url:'' },
      {artist: 'Enya', song: 'Boadicea', slug: 'enya1', url:'' },
      {artist: 'Everything but the Girl', song: 'Before Today', slug: 'everything1', url:'' },
      {artist: 'Everything but the Girl', song: 'Better Things', slug: 'everything2', url:'' },
      {artist: 'The Faint', song: 'Agenda Suicide', slug: 'faint1', url:'' },
      {artist: 'The Faint', song: 'Conductor', slug: 'faint2', url:'' },
      {artist: 'Faithless', song: 'Woozy', slug: 'fathless1', url:'https://www.youtube.com/watch?v=j8m68wL9hYw' },
      {artist: 'Far East Movement', song: '*G6*', slug: 'far1', url:'' },
      {artist: 'Far East Movement', song: '*The Illest*', slug: 'far2', url:'' },
      {artist: 'FC Kahuna', song: 'Hayling', slug: 'fc1', url:'' },
      {artist: 'Filter', song: 'Hey Man nice Shot', slug: 'filter1', url:'' },
      {artist: 'Flight Facilities', song: 'Crave You(Adventure Club Remix)', slug: 'flight1', url:'' },
      {artist: 'Flo Rida', song: 'GDFR', slug: 'flo1', url:'' },
      {artist: 'Flosstradamus', song: 'TTU', slug: 'flos1', url:'' },
      {artist: 'Flume and Chet Faker', song: 'Drop the Game', slug: 'flume1', url:'' },
      {artist: 'Foo Fighters', song: 'Everlong(acoustic)', slug: 'foo1', url:'' },
      {artist: 'Foreign Beggers', song: 'Typhoon', slug: 'foreign1', url:'' },
      {artist: 'Freestylers', song: 'Cracks(Flux Pavillion Remix)', slug: 'freestyle1', url:'' },
      {artist: 'Frou Frou', song: 'Breathe In', slug: 'frou1', url:'' },
      {artist: 'Frou Frou', song: 'Let Go', slug: 'frou2', url:'' },
      {artist: 'Fuel', song: 'Bittersweet', slug: 'fuel1', url:'' },
      {artist: 'Fuel', song: 'Hemorage', slug: 'fuel2', url:'' },
      {artist: 'Fuel', song: 'Shimmer', slug: 'fuel3', url:'' },
      {artist: 'Fugees', song: 'Ready or Not', slug: 'fugees1', url:'' },
      {artist: 'Garbage', song: 'Number One Crush', slug: 'garbage1', url:'' },
      {artist: 'Gary Jules', song: 'Mad World', slug: 'gary1', url:'https://www.youtube.com/watch?v=4N3N1MlvVc4' },
      {artist: 'Gnarles Barkley', song: 'Crazy', slug: 'gnarles1', url:'https://www.youtube.com/watch?v=-N4jf6rtyuw' },
      {artist: 'Gorillaz', song: 'El Manana', slug: 'gorillaz1', url:'' },
      {artist: 'Gorillaz', song: 'All Alone', slug: 'gorillaz2', url:'' },
      {artist: 'Gorillaz', song: 'Tomorrow Comes Today', slug: 'gorillaz3', url:'' },
      {artist: 'Gorillaz', song: 'Clint Eastwood', slug: 'gorillaz4', url:'' },
      {artist: 'Gorillaz', song: 'Sound Check', slug: 'gorillaz5', url:'' },
      {artist: 'Gorillaz', song: 'Double Bass', slug: 'gorillaz6', url:'' },
      {artist: 'Gorillaz', song: 'Starshine', slug: 'gorillaz7', url:'' },
      {artist: 'Gotye', song: 'Somebody That I Used To Know', slug: 'gotye1', url:'https://www.youtube.com/watch?v=8UVNT4wvIGY' },
      {artist: 'Grandaddy', song: 'A.M. 180', slug: 'grandad1', url:'' },
      {artist: 'Green Day', song: '', slug: 'green1', url:'' },
      {artist: 'Guns and Roses', song: 'Civil War', slug: 'guns1', url:'' },
      {artist: 'Guns and Roses', song: 'Knockin on Heavens Doors', slug: 'guns2', url:'' },
      {artist: 'Guns and Roses', song: 'Sweet Child of Mine', slug: 'guns3', url:'' },
      {artist: 'Hardwell', song: 'Spaceman', slug: 'hardwell1', url:'' },
      {artist: 'High Kings', song: 'The Irish Pub', slug: 'high1', url:'https://www.youtube.com/watch?v=bp3UsU5pQT8' },
      {artist: 'Hudson Mohawke', song: 'Chimes', slug: 'hudson1', url:'' },
      {artist: 'Imagine Dragons', song: 'Radioactive', slug: 'imagine1', url:'' },
      {artist: 'Imagine Dragons', song: 'Natural', slug: 'imagine2', url:'' },
      {artist: 'Imagine Dragons', song: 'Believer', slug: 'imagine3', url:'' },
      {artist: 'Jem', song: 'Come on Closer', slug: 'jem1', url:'' },
      {artist: 'Jem', song: '24', slug: 'jem2', url:'' },
      {artist: 'Jewel', song: 'Who will Save Your Soul', slug: 'jewel1', url:'' },
      {artist: 'Jimmy Eat World', song: '', slug: 'jimmy1', url:'' },
      {artist: 'John Williams', song: 'Schindlers List', slug: 'john1', url:'' },
      {artist: 'John Williams', song: 'Duel of the Fates', slug: 'john2', url:'' },
      {artist: 'Juanes', song: 'A Dios Le Pido', slug: 'juanes1', url:'' },
      {artist: 'Kansas', song: 'Dust in the Wind', slug: 'kansas1', url:'https://www.youtube.com/watch?v=tH2w6Oxx0kQ' },
      {artist: 'Kito & Reija Lee', song: 'Run For Cover', slug: 'kito1', url:'https://www.youtube.com/watch?v=2zgcKDg4w94' },
      {artist: 'Kito & Reija Lee', song: 'Sweet Talk', slug: 'kito2', url:'https://www.youtube.com/watch?v=4eUNXqblOak' },
      {artist: 'Kito & Reija Lee', song: 'Starting Line', slug: 'kito3', url:'https://www.youtube.com/watch?v=ytyWFj2sFbs' },
      {artist: 'Korn', song: '', slug: 'korn1', url:'' },
      {artist: 'Kylie Minogue', song: 'Cant Get You Out Of My Head', slug: 'kylie1', url:'https://www.youtube.com/watch?v=YPwtJ89jes4' },
      {artist: 'La Roux', song: 'In For The Kill', slug: 'la1', url:'https://www.youtube.com/watch?v=CpEOErRV-u4' },
      {artist: 'La Vela Puerca', song: 'El Viejo', slug: 'vela1', url:'' },
      {artist: 'Led Zeplin', song: '', slug: 'led1', url:'' },
      {artist: 'Lenny Kravitz', song: 'If You Cant Say No', slug: 'lenny1', url:'https://www.youtube.com/watch?v=uxm11aSfSR8' },
      {artist: 'Lighthouse Family', song: 'Aint No Sunshine', slug: 'lighthouse1', url:'' },
      {artist: 'Lindsey Sterling', song: 'Crystalize', slug: 'lindsey1', url:'' },
      {artist: 'Lisa Hall Magic', song: 'Is This Real', slug: 'lindsey1', url:'' },
      {artist: 'Live', song: 'I Alone', slug: 'live1', url:'' },
      {artist: 'Live', song: 'All Over You', slug: 'live2', url:'' },
      {artist: 'Loreena Mckennitt', song: 'Mummers Dance', slug: 'loreena1', url:'https://www.youtube.com/watch?v=LzE32ChEp24&list=RDLzE32ChEp24&start_radio=1' },
      {artist: 'Loreena Mckennitt', song: 'All Souls Night', slug: 'loreena2', url:'https://www.youtube.com/watch?v=RooTTuLCfNM' },
      {artist: 'Loreena Mckennitt', song: 'Prologue', slug: 'loreena3', url:'https://www.youtube.com/watch?v=6i1AwS-bVnk' },
      {artist: 'Loreena Mckennitt', song: 'Skellig', slug: 'loreena4', url:'https://www.youtube.com/watch?v=SrGuV3QHYME' },
      {artist: 'Loreena Mckennitt', song: 'Night Ride Across The Caucasus', slug: 'loreena5', url:'https://www.youtube.com/watch?v=eUTci9UbxNU' },
      {artist: 'Loreena Mckennitt', song: 'The Old Ways', slug: 'loreena6', url:'https://www.youtube.com/watch?v=lQh0MTmBUQ4' },
      {artist: 'Lumineers', song: '*hey ho*', slug: 'lumineers1', url:'' },
      {artist: 'Magic!', song: 'Crystalize', slug: 'lindsey1', url:'' },
      {artist: 'M.I.A.', song: '', slug: 'mia1', url:'' },
      {artist: 'Mandalay', song: 'Flowers Bloom', slug: 'mand1', url:'' },
      {artist: 'Marc Antony', song: 'Vivir Mi Vida', slug: 'marc1', url:'' },
      {artist: 'Maroon 5', song: '', slug: 'maroon1', url:'' },
      {artist: 'Marvin Gaye', song: '*Sitting on the dock of the Bay*', slug: 'marvin1', url:'' },
      {artist: 'Massive Attack', song: '', slug: 'massive1', url:'' },
      {artist: 'Matisyahu', song: '', slug: 'matis1', url:'' },
      {artist: 'Mazzy Star', song: 'Fade into you', slug: 'mazzy1', url:'https://www.youtube.com/watch?v=ImKY6TZEyrI' },
      {artist: 'Metallica', song: '', slug: 'metal1', url:'' },
      {artist: 'Missy Elliot', song: '*I cant stand the rain*', slug: 'missy1', url:'' },
      {artist: 'Modest Mouse', song: 'The World At Large', slug: 'modest1', url:'' },
      {artist: 'Modest Mouse', song: 'Float On', slug: 'modest2', url:'' },
      {artist: 'Modest Mouse', song: 'Dramamine', slug: 'modest3', url:'' },
      {artist: 'Morcheeba', song: 'Trigger', slug: 'morcheeba1', url:'' },
      {artist: 'Mormon Tabernacle Choir', song: 'What Child Is This ?', slug: 'motab1', url:'https://www.youtube.com/watch?v=B3PPU91809Q' },
      {artist: 'Mormon Tabernacle Choir', song: 'O Holy Night', slug: 'motab2', url:'https://www.youtube.com/watch?v=LbVrjFjulxo' },
      {artist: 'Mormon Tabernacle Choir', song: 'Carol of the Bells', slug: 'motab3', url:'https://www.youtube.com/watch?v=k-W2Bkz_Rno' },
      {artist: 'Mormon Tabernacle Choir', song: 'Come, Thou Fount of Every Blessing', slug: 'motab4', url:'https://www.youtube.com/watch?v=gPKpkrqBwNs' },
      {artist: 'Mumford and sons', song: '', slug: 'mumford1', url:'' },
      {artist: 'Nelly Furtado', song: '*turn out the lights*', slug: 'nelly1', url:'' },
      {artist: 'No Doubt', song: '*Dont Speak*', slug: 'nodoubt1', url:'' },
      {artist: 'No Doubt', song: '*Spider webs*', slug: 'nodoubt2', url:'' },
      {artist: 'No Doubt', song: '*Hellagood*', slug: 'nodoubt3', url:'' },
      {artist: 'Oasis', song: 'Wonderwall', slug: 'oasis1', url:'' },
      {artist: 'Offspring', song: '', slug: 'offspring1', url:'' },
      {artist: 'Oiki', song: 'Groove', slug: 'oiki1', url:'' },
      {artist: 'Old Crow Medicine Show', song: 'Wagon Wheel', slug: 'oldCrow1', url:'' },
      {artist: 'Our Lady Peace', song: '*Supermans Dead*', slug: 'ourLady1', url:'' },
      {artist: 'Our Lady Peace', song: '4AM', slug: 'ourLady2', url:'' },
      {artist: 'Outkast', song: '*Elevators*', slug: 'outkast1', url:'' },
      {artist: 'Outkast', song: '*Sorry Miss Jackson*', slug: 'outkast2', url:'' },
      {artist: 'Pearl Jam', song: '', slug: 'pearl1', url:'' },
      {artist: 'Pentatonix', song: '*Mary Did You Know*', slug: 'penta1', url:'' },
      {artist: 'Phil Collins', song: 'In the Air Tonight', slug: 'phil1', url:'https://www.youtube.com/watch?v=MN3x-kAbgFU' },
      {artist: 'Poe', song: 'Hello', slug: 'poe1', url:'https://www.youtube.com/watch?v=1cujypawzVQ' },
      {artist: 'Portishead', song: 'Wandering Star', slug: 'portishead1', url:'https://www.youtube.com/watch?v=gEQNAZGoZrw' },
      {artist: 'Portishead', song: 'Roads', slug: 'portishead2', url:'https://www.youtube.com/watch?v=WQYsGWh_vpE' },
      {artist: 'Portishead', song: 'Strangers', slug: 'portishead3', url:'https://www.youtube.com/watch?v=B4TxEsRxltg' },
      {artist: 'Portishead', song: 'It Could Be Sweet', slug: 'portishead4', url:'https://www.youtube.com/watch?v=57C_eWa2bgo' },
      {artist: 'Portishead', song: 'Its a Fire', slug: 'portishead5', url:'https://www.youtube.com/watch?v=wlW1XtdxGFE' },
      {artist: 'Portishead', song: 'All Mine', slug: 'portishead6', url:'https://www.youtube.com/watch?v=vozNQX6Ye1A' },
      {artist: 'Portishead', song: 'Undenied', slug: 'portishead7', url:'https://www.youtube.com/watch?v=31BS2oTkaw8' },
      {artist: 'Portishead', song: 'Tear drop', slug: 'portishead8', url:'https://www.youtube.com/watch?v=u7K72X4eo_s' },
      {artist: 'Portishead', song: 'Insensible', slug: 'portishead9', url:'https://www.youtube.com/watch?v=wwTcxoBaca8' },
      {artist: 'Portishead', song: 'Glory Box', slug: 'portishead10', url:'https://www.youtube.com/watch?v=6ylDDs3mdJE' },
      {artist: 'Postal Service', song: 'Such Great Heights', slug: 'postal1', url:'' },
      {artist: 'Prodigy', song: '', slug: 'prodigy1', url:'' },
      {artist: 'Purity Ring', song: 'Flood on the Floor', slug: 'purity1', url:'https://www.youtube.com/watch?v=0ZyZxxf5fVE' },
      {artist: 'Ra', song: '', slug: 'ra1', url:'' },
      {artist: 'Rage Against the Machine', song: '', slug: 'rage1', url:'' },
      {artist: 'Red Hot Chili Peppers', song: '', slug: 'redHot1', url:'' },
      {artist: 'REM', song: 'Losing My Religion', slug: 'rem1', url:'https://www.youtube.com/watch?v=xwtdhWltSIg' },
      {artist: 'REM', song: 'Everybody Hurts', slug: 'rem2', url:'https://www.youtube.com/watch?v=5rOiW_xY-kc' },
      {artist: 'REM', song: 'Shiny Happy People', slug: 'rem3', url:'https://www.youtube.com/watch?v=YYOKMUTTDdA' },
      {artist: 'REM', song: 'Stand', slug: 'rem4', url:'https://www.youtube.com/watch?v=AKKqLl_ZEEY' },
      {artist: 'Roots', song: '', slug: 'roots1', url:'' },
      {artist: 'Sade', song: 'No Ordinary Love', slug: 'sade1', url:'https://www.youtube.com/watch?v=_WcWHZc8s2I' },
      {artist: 'Santana', song: '*Oye Como Va*', slug: 'santana1', url:'' },
      {artist: 'Santana', song: '*BNlack Magic Woman*', slug: 'santana2', url:'' },
      {artist: 'Seether', song: '', slug: 'seether1', url:'' },
      {artist: 'Shakira', song: 'La Tortura', slug: 'shakira1', url:'https://www.youtube.com/watch?v=Dsp_8Lm1eSk' },
      {artist: 'Shakira', song: 'Ojos Así', slug: 'shakira2', url:'https://www.youtube.com/watch?v=5BzkbSq7pww' },
      {artist: 'Shakira', song: 'Suerte (Whenever, Wherever)', slug: 'shakira3', url:'https://www.youtube.com/watch?v=a8Rwz6zBJSE' },
      {artist: 'Shakira', song: 'Hips Dont Lie', slug: 'shakira4', url:'https://www.youtube.com/watch?v=DUT5rEU6pqM' },
      {artist: 'Skinny Puppy', song: '*Blood Rave*', slug: 'skinny1', url:'' },
      {artist: 'Smashing Pumpkins', song: '', slug: 'smashing1', url:'' },
      {artist: 'Soggy Bottom Boys', song: '*Man of Constant Sorow*', slug: 'soggy1', url:'' },
      {artist: 'Soul Coughing', song: '', slug: 'soul1', url:'' },
      {artist: 'Soundgarden', song: '', slug: 'soundgarden1', url:'' },
      {artist: 'Staind', song: '', slug: 'staind1', url:'' },
      {artist: 'Stereo MCs', song: '*Get Connected*', slug: 'stereo1', url:'' },
      {artist: 'Sting', song: '*Desert Rose*', slug: 'sting1', url:'' },
      {artist: 'Sting', song: '*1000 Years*', slug: 'sting2', url:'' },
      {artist: 'Stone Sour', song: 'Bother', slug: 'stoneSour1', url:'' },
      {artist: 'Stone Temple Pilots', song: '', slug: 'stoneTemple', url:'' },
      {artist: 'Sublime', song: '', slug: 'sublime1', url:'' },
      {artist: 'Submarines', song: '1940 (AmpLive Remix)', slug: 'submarines1', url:'' },
      {artist: 'Susanne Vega', song: 'Toms Diner', slug: 'tom1', url:'https://www.youtube.com/watch?v=-26hsZqwveA' },
      {artist: 'System of a Down', song: '', slug: 'system1', url:'' },
      {artist: 'Telepopmusic', song: 'Breathe', slug: 'telepop1', url:'' },
      {artist: 'Temptations', song: '*Stand By Me*', slug: 'temptation1', url:'' },
      {artist: 'Third Eye Blind', song: '*Semi charmed Kind of Life*', slug: 'third1', url:'' },
      {artist: 'Tom Petty', song: '*Last Dance With Mary Jane*', slug: 'tomPetty1', url:'' },
      {artist: 'Tonic', song: 'If You Could Only See', slug: 'tonic1', url:'' },
      {artist: 'Tool', song: '', slug: 'tool1', url:'' },
      {artist: 'TuPac', song: '', slug: 'tupac1', url:'' },
      {artist: 'A Tribe Called Quest', song: '', slug: 'tribe1', url:'' },
      {artist: 'Two Finger', song: '*Fools Rhythm*', slug: 'twoFinger1', url:'' },
      {artist: 'Unkle', song: 'Lonely Souls', slug: 'unkle1', url:'' },
      {artist: 'Verve', song: '', slug: 'verve1', url:'' },
      {artist: 'Verve Pipe', song: '', slug: 'vervePipe1', url:'' },
      {artist: 'Weezer', song: '', slug: 'weezer1', url:'' },
      {artist: 'White Town', song: 'Your Woman', slug: 'white1', url:'' },
      {artist: 'Willie Nelson', song: '', slug: 'Willie1', url:'' },
      {artist: 'Zack Brown Band', song: '*Toes*', slug: 'Zack1', url:'' },
      {artist: 'ZHU', song: '', slug: 'zhu1', url:'' },
    ]
    const renderItems = items.map(item => {
      return (
        <tr key={item.slug}>
          <td >{item.artist}</td>
          <td><a href={item.url} target ='_blank'>{item.song}</a></td>
        </tr>
      )
    })
    return (
      <div className='twoColumn'>
      <table>
      <tr><th>Artist</th><th>Song</th></tr>
      {renderItems}
      </table>
      *No active link<br />
      </div>
    );
}

export default Music ;
