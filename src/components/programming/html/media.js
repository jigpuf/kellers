import React from 'react';

class Media extends React.Component {
  render () {
    return (
      <div>
        <h2>Media</h2>
        <h3>Links</h3>
          &lt;a href = 'http:....'&gt;Link Name&lt;/a&gt;<br />
          <a href=''>Link Name</a>
        <h3>Images</h3>
          &lt;img&gt;
        <h3>Video</h3>
          &lt;video&gt;<br />
          &lt;source src='path.mp4 type='video/mp4'&gt;<br />
          &lt;/video&gt;<br />
        <h3>Audio</h3>
          &lt;&gt;&lt;/&gt;
      </div>
    );
  }
}

export default Media;
