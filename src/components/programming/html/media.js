import React from 'react';

class Media extends React.Component {
  render () {
    return (
      <div>
        <h2>Media</h2>
        <h3>Links</h3>
          &lt;a href = 'http:....' target="_blank" &gt;Link Name&lt;/a&gt;<br />
          <a href=''>Link Name</a><br />
          Internal links:<br />
          &lt;a href = '#idName' &gt;Link Name&lt;/a&gt;<br />
        <h3>Images</h3>
          &lt;img src="smiley.gif" alt="Smiley face" height="42" width="42"&gt;
        <h3>Video</h3>
          &lt;video&gt;<br />
          &lt;source src='path.mp4 type='video/mp4'&gt;<br />
          &lt;/video&gt;<br />
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



      </div>
    );
  }
}

export default Media;
