import React from 'react';

class Media extends React.Component {
  render () {
    return (
      <div>
        <h2>Media</h2>
        <h3>Links</h3>
          &lt;a href = '....' target="_blank" &gt;Link Name&lt;/a&gt;<br />
          <a href=''>Link Name</a><br />

          <table>
            <tr><th>Path type</th><th>Syntax</th></tr>
            <tr><td>External Link</td><td>href = 'http:....'</td></tr>
            <tr><td>Up a folder</td><td>href='../'</td></tr>
            <tr><td>In same folder</td><td>href='nothing required'</td></tr>
            <tr><td>Internal to page</td><td>href='#idName'</td></tr>
            <tr></tr>
          </table>
        <h3>Images</h3>
          &lt;img src="smiley.gif" alt="Smiley face" height="42" width="42"&gt;
          <ul>
            <li>JPEG- Photos and complex Graphics</li>
            <li>PNG- still simple images</li>
            <li>GIF- moving images</li>
            <li>SVG- Vector</li>
          </ul>
        <h3>Video</h3>
          &lt;video id='idName' controls src='path.mp4' poster='path.png'&gt;<br />
          &lt;/video&gt;<br />
          <video controls autoplay
          source src='' type='video/mp4'>
          </video>
        <h3>Audio</h3>
          &lt;audio controls&gt;<br />
          &lt;source src="horse.ogg" type="audio/ogg"&gt;<br />
          &lt;source src="horse.mp3" type="audio/mpeg&gt;<br />
          &lt;/audio&gt;<br />
        <h3>PDF</h3>
          &lt;a href="path" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes');
          return false;" &gt;visibleName &lt;&#47;a&gt;
          <br />
          <a href='https://drive.google.com/open?id=15roj--KrhNHGiRgd3C_mxXGqmvO9ict-' target ='_blank'
          >hyrum</a><br />

          <a href="https://drive.google.com/open?id=1JlsWQXM9qxZ0WNG6zmmAt21cs1c0ja3S"
          onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;"
          >MyPDF</a>
        <h3>API</h3>
          <li>Set up account with API provider</li>
          <li>Look at documentation to find out if you need a key</li>
          <li>App name you are using as well as local host name</li>
          <li>Create App using npm create-react-app appName</li>
          <li>Get fetch comands from documentation</li>
          <li>Manipulate data</li>
        <h3>Meter</h3>
        <h3>Progress</h3>
        <h3>Canvas</h3>

        <h3>Figure</h3>


      </div>
    );
  }
}

export default Media;
