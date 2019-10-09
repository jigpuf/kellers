import React from 'react';

class Reading extends React.Component {
  render () {
    return (
      <div>
        <h2>Reading</h2>
          <h3>Scheduling</h3>
            The Book of Mormon has 239 Chapters and 532 pages
            <table>
              <tr><th>Time period</th><th>pages/week</th><th>chapters/week</th></tr>
              <tr><td>1 Year</td><td>11</td><td>5</td></tr>
              <tr><td>26 Weeks</td><td>21</td><td>10</td></tr>
              <tr><td>12 Weeks</td><td>45</td><td>20</td></tr>
              <tr><td>1 Month</td><td>133</td><td>60</td></tr>
              <tr><td>1 Week</td><td>107/day</td><td>48/day</td></tr>
            </table>
          <h3>Sections</h3>
            <table>
              <tr><th>Book and Chapters</th><th>Theme</th><th>pages</th></tr>
              <tr><td>1 Ne 1-7</td><td>Leaving Jerusalem</td><td>1-14</td></tr>
              <tr><td>1 Ne 8-15</td><td>Visions in the Valley</td><td>14-33</td></tr>
              <tr><td>1 Ne 16-18</td><td>Travels to the Promised Land</td><td>33-43</td></tr>
              <tr><td>1 Ne 19-22</td><td>Nephi's sermon in the Land of First Inheritance</td><td>43-53</td></tr>
              <tr><td>2 Ne 1-4</td><td>Lehi's Last words</td><td>53-65</td></tr>
              <tr><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td></tr>
            </table>


      </div>
    );
  }
}

export default Reading;
