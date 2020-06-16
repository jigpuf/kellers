import React from 'react';

class ObjectLiterals extends React.Component {
  render () {
    return (
      <div>
        <h2>Object Literals</h2>
          <p>Object have properties and Methods</p>
        <h3>Object Literal Notation, Adding Properties</h3>
          let user = &#123;<br />
            name:'Crystal',<br />
            age: 30,<br />
            email:'sefn@yahoo...',<br />
            &#125;;<br />
        <h3>Calling/assigning value using key</h3>
          console.log(user.name) //Crystal
          user.age = 35; //changes age to 35
        <h3>Another way to access value</h3>
          console.log(user['name']);<br />
          user['name'] = 'Crab Man';<br />
        <h3>Adding Methods to Objects</h3>
          let user =&#123;<br />
            login: function()&#123;<br />
            code<br />
            &#125;<br />
          &#125;;<br />
        <h3>This Keyword</h3>
          This refers to the object<br />
          this.methodName;<br />
          this.propertyName;<br />
      </div>
    );
  }
}

export default ObjectLiterals;
