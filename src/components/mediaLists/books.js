import React from 'react';

class Books extends React.Component {
  render () {
    return (
      <div>
        <h2>Books</h2>
          <h3>Favorite Books</h3>
          <table>
            <tr><th>Author</th><th>Book</th><th>Genre></th></tr>
            <tr><td>CS Lewis</td><td>Mere Christianity</td><td>Religious</td></tr>
            <tr><td>CS Lewis</td><td>Screwtape Letters</td><td>Religious</td></tr>
            <tr><td>CS Lewis</td><td>All chronicles of Narnia</td><td>Fantasy</td></tr>
            <tr><td>CS Lewis</td><td>On the weight of Glory</td><td>Religious</td></tr>
            <tr><td>Douglas Adams</td><td>All Hitchhikers Guide to the Galaxy</td><td>Comedy/Scifi</td></tr>
            <tr><td>Douglas Adams</td><td>Dirk Gently's Holistic Detective Agency</td><td>Comedy/Scifi</td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
          </table>
          <h3>Books to Read</h3>
          <table>
            <tr><th>Author</th><th>Book</th><th>Genre</th></tr>
            <tr><td></td><td>The Monk</td><td>Horror</td></tr>
            <tr><td></td><td>Flatland</td><td></td></tr>
            <tr><td></td><td>Island of Dr. Moreau</td><td></td></tr>
            <tr><td></td><td>McTeague</td><td></td></tr>
            <tr><td></td><td>Moby Dick</td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
          </table>
      </div>
    )
    }
  }
export default Books;
