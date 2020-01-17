import React from 'react';

class HtmlSetup extends React.Component {
  render () {
    return (
      <div>
        <h2>Setup from HTML</h2>
          <h3>Software Needs</h3>
            <li>Browser:</li>
            <a href='https://www.google.com/chrome/' target='_blank'
            >Google</a><br />
            <li>Text Editor:</li>
            <a href='https://www.sublimetext.com/' target='_blank'
            >Sublime(Mac)</a><br />
            <a href='https://notepad-plus-plus.org/' target='_blank'
            >Notepad ++(Windows)</a><br />
          <h3>Software setup</h3>
            Sublime- to create html file<br />
            file&rarr;save with encoding&rarr;File Name:index.html
      </div>
    );
  }
}

export default HtmlSetup;
