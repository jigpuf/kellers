import React from 'react';

const Songs = () => {
  const songs = [
    {song: 'Alianza Eterna', slug: 'alianza', chords:'', meter:'', chordify:'' },
    {song: 'A dios le Pido', slug: 'adios', chords:'', meter:'', chordify:'' },
    {song: 'All creatures of our God and King', slug: 'creatures', chords:'', meter:'', chordify:'' },
    {song: 'Abide with me', slug: 'abide', chords:'', meter:'', chordify:'' },
    {song: 'Brightly Beams my Fathers mercy', slug: 'brightly', chords:'', meter:'', chordify:'' },
    {song: 'Horse with no Name', slug: 'horse', chords:'Em,D,Dm,Bm,F#m,A', meter:'', chordify:'' },
    {song: 'Battle hymn of the Republic', slug: 'battleHymn', chords:'', meter:'', chordify:'' },
    {song: 'Babel', slug: 'babel', chords:'', meter:'', chordify:'' },
    {song: 'Battle of Evermore', slug: 'evermore', chords:'', meter:'', chordify:'' },
    {song: 'Broken Crown', slug: 'crown', chords:'', meter:'', chordify:'' },
    {song: 'Babe Im gonna Leave You', slug: 'babe', chords:'', meter:'', chordify:'' },
    {song: 'Maleguena', slug: 'male', chords:'', meter:'', chordify:'' },
    {song: 'Down in a Hole', slug: 'hole', chords:'', meter:'', chordify:'' },
    {song: 'No Rain', slug: 'rain', chords:'', meter:'', chordify:'' },
    {song: 'Clumsy Card House', slug: 'clumsy', chords:'', meter:'', chordify:'' },
    {song: 'Redemption Song', slug: 'redemption', chords:'', meter:'', chordify:'' },
    {song: 'See you soon', slug: 'seeYou', chords:'', meter:'', chordify:'' },
    {song: 'Sparks', slug: 'sparks', chords:'', meter:'', chordify:'' },
    {song: 'December', slug: 'december', chords:'', meter:'', chordify:'' },
    {song: 'Mr. Jones', slug: 'jones', chords:'', meter:'', chordify:'' },
    {song: 'Round Here', slug: 'round', chords:'', meter:'', chordify:'' },
    {song: 'Out Loud', slug: 'loud', chords:'', meter:'', chordify:'' },
    {song: 'Everlong', slug: 'everlong', chords:'', meter:'', chordify:'' },
    {song: 'Shimmer', slug: 'shimmer', chords:'', meter:'', chordify:'' },
    {song: 'Come Thou Fount', slug: 'fount', chords:'', meter:'', chordify:'' },
    {song: 'Irish Pub Song', slug: 'pub', chords:'', meter:'', chordify:'' },
    {song: 'Hands', slug: 'hands', chords:'', meter:'', chordify:'' },
    {song: 'Who will Save your Soul', slug: 'soul', chords:'', meter:'', chordify:'' },
    {song: 'Track 4', slug: 'track4', chords:'', meter:'', chordify:'' },
    {song: 'Track 12', slug: 'track12', chords:'', meter:'', chordify:'' },
    {song: 'Stairway to Heaven', slug: 'stairway', chords:'', meter:'', chordify:'' },
    {song: 'I alone', slug: 'alone', chords:'', meter:'', chordify:'' },
    {song: 'Night ride across the Caucuses', slug: 'caucuses', chords:'', meter:'', chordify:'' },
  ]

  const renderSongs = songs.map(item => {
    return (
      <tr key={item.slug}>
        <td><a href={item.chordify} target='_blank'>{item.song}</a></td>
        <td>{item.chords}</td>
        <td>{item.meter}</td>
      </tr>
    )
  })
    return (
      <div>
        <table>
          <tr><td>Song</td><td>Chords</td><td>Meter</td></tr>
          {renderSongs}
        </table>
      </div>
    );
  }

export default Songs;
// <li>The Old Ways</li>
// <li>Hopeless Wanderer</li>
// <li>Wonderwall</li>
// <li>Old Crow Medicine Show</li>
// <li>4AM</li>
// <li>Yellow Bedletter</li>
// <li>Californication</li>
// <li>Scartissue</li>
// <li>Otherside</li>
// <li>Road Trippin</li>
// <li>1979</li>
// <li>Outside</li>
// <li>Its been Awhile</li>
// <li>Semi-Charmed Kind of Life</li>
// <li>Mary Janes last Dance</li>
// <li>The Freshman</li>
// <li>On the Road again</li>
// <li>Toes</li>
// Church Songs:
// <li>What child is this</li>
// <li>O Holy Night</li>
// <li>Come Thou Fount</li>
// <li>God be with you till we meet again</li>
// <li>The spirit of God</li>
// <li>Poor Wayfaring man of grief</li>
// <li>High on a mountain top</li>
// <li>Israel god is calling</li>
// <li>Redeamer of israel</li>
// <li>Praise to the Man</li>
// <li>Come come ye Saints</li>
// <li>I need thee every hour</li>
// <li>Sweet hour of Prayer</li>
// <li>I stand all amazed</li>
// <li>Onward Christian Soldiers</li>
// <li>We are all enlisted</li>
// <li>If you could hie to Kolob</li>
// <li>Oh my Father</li>
// <li>Ye Elders of Israel</li>
