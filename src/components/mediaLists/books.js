import React from 'react';

class Books extends React.Component {
  render () {
    const Items = [
      {author: 'Adams, Douglas', book: 'All Hitchhikers Guide to the Galaxy',  slug: 'adams1'},
      {author: 'Adams, Douglas', book: 'Dirk Gentlys Holistic Detective Agency',  slug: 'adams2'},
      {author: 'Lewis, CS', book: 'Mere Christianity',  slug: 'lewis1'},
      {author: 'Lewis, CS', book: 'Screwtape Letters',  slug: 'lewis2'},
      {author: 'Lewis, CS', book: 'All chronicles of Narnia',  slug: 'lewis3'},
      {author: 'Lewis, CS', book: 'On the weight of Glory',  slug: 'lewis4'},
      {author: 'Talmage, James E.', book: 'Jesus the Christ',  slug: 'talmage1'},
      {author: 'Talmage, James E.', book: 'Articles of Faith',  slug: 'talmage2'},
      {author: 'Kimball, Spenser W.', book: 'Miracle of Forgiveness',  slug: 'kimball1'},
      {author: '', book: 'Encyclopedia of Mormonism',  slug: 'encyclopedia1'},
      {author: 'Smith, Lucy Mack', book: 'History of Joseph Smith',  slug: 'lucyMack1'},
      {author: 'McConkie, Millet', book: 'Doctrinal Comentary on the Book of Mormon',  slug: 'mckonkieMillet1'},
      {author: 'Nibley, Hugh', book: 'An approach to the Book of Mormon',  slug: 'Nibley1'},
      {author: 'Mckonkie, Bruce R.', book: 'Mormon Doctrine',  slug: 'bruce1'},
      {author: 'Mckonkie, Bruce R.', book: 'Doctrinal New Testament Comentary',  slug: 'bruce1'},
      {author: 'Smith, Joseph Fielding', book: 'Answers to Gospel Questions',  slug: 'jfsmith1'},
      {author: 'Pratt,', book: 'Key to the Science of Theology',  slug: 'pratt1'},
      {author: 'Pratt,', book: 'A voice of Warning',  slug: 'pratt2'},
      {author: 'Smith, Joseph Jr.', book: 'History of the Church',  slug: 'smith1'},
      {author: 'Smith, Joseph Jr.', book: 'Lectures on Faith',  slug: 'smith2'},
      {author: '', book: '',  slug: ''},
    ]
    const BooksToRead = [
      {author: '', book: 'The Monk',  slug: 'monk1'},
      {author: '', book: 'Flatland',  slug: 'flat1'},
      {author: '', book: 'Island of Dr. Moreau',  slug: 'island'},
      {author: '', book: 'McTeague',  slug: 'teague'},
      {author: '', book: 'Moby Dick',  slug: 'moby'},
      {author: '', book: '',  slug: ''},
      ]
    const renderItems = Items.map(item => {
      return (
        <tr key={item.slug}>
          <td >{item.author}</td>
          <td>{item.book}</td>
        </tr>
      )
    })
    const renderBooksToRead = BooksToRead.map(item => {
      return (
        <tr key={item.slug}>
          <td >{item.author}</td>
          <td>{item.book}</td>
        </tr>
      )
    })
      return (
        <div>
        <h3>Books</h3>
        <table>
          <tr>
            <th>Author</th>
            <th>Book</th>
          </tr>
        {renderItems}
        </table>
        <h3>Books to Read</h3>
        <table>
          <tr>
            <th>Author</th>
            <th>Book</th>
          </tr>
        {renderBooksToRead}
        </table>
        </div>
      );
    }
  }

export default Books;
