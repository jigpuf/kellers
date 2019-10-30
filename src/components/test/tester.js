import React from 'react';
import Multiple, {OtherThing as OtherThing2} from '/multiple';

class Tester extends React.Component {
  const OtherThing = () => {
    return (
      <div>Thing</div>
    )
  }
  render () {
    return (
      <div>
        <Multiple />
        <OtherThing />
        <OtherThing2 />
      </div>
    );
  }
}

export default Tester;
