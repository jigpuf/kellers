import React from 'react';

class Apostles extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>J.Reuben Clark</li>
          <li>Jeffrey R. Holland:</li>
            <ul>
              <li><a href='https://www.youtube.com/watch?v=u50__Z2P89Q&t=25s'
              >The First Great Commandment</a></li>
            </ul>
          <li>Bruce R. mckonkie:</li>
            <ul>
              <li><a href='https://www.youtube.com/watch?v=qn7boTBtn3w&t=67s'
              >Final Testimony (1985)</a></li>
            </ul>
          <li>Dallin H. Oaks:</li>
            <ul>
              <li><a href='https://www.youtube.com/watch?v=Jnj2USUG_qQ'
              >Preparation for the Second Coming</a></li>
            </ul>
        </ul>
      </div>
    );
  }
}

export default Apostles;
