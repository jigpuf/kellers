import React from 'react';

class Cardio extends React.Component {
  render () {
    return (
      <div>
      <h3>Rowing Machine:</h3>
      <h4>The Meat</h4>
      <table>
        <tr><th>Dist.</th><th>Total Time</th><th>Moving Avg 500m</th></tr>
        <tr><td>Best 1K</td><td>3:43.8</td><td>1:51.9</td></tr>
        <tr><td>Best 2K</td><td>7:42.1</td><td>1:55.5</td></tr>
        <tr><td>Best 3K</td><td>11:44.5</td><td>1:57.4</td></tr>
        <tr><td>Best 4K</td><td>15:48</td><td>1:58.5</td></tr>
        <tr><td>Best 5K</td><td>19:44.7</td><td>1:58.4</td></tr>
        <tr><td>Worst 5K</td><td>21:20</td><td>2:07.9</td></tr>
      </table>
      <h4>The Details</h4>
      <table>
        <tr><th>Dist.</th><th>Time</th><th>Total Time</th><th>Avg 500m</th><th>Moving Avg 500m</th><th>Moving Avg Change</th></tr>
        <tr><td>Best 1K</td><td>3:43.8</td><td>3:43.8</td><td>1:51.9</td><td>1:51.9</td><td>N/A</td></tr>
        <tr><td>Best 2K</td><td>3:58.3</td><td>7:42.1</td><td>1:59.1</td><td>1:55.5</td><td>3.6</td></tr>
        <tr><td>Best 3K</td><td>4:02.4</td><td>11:44.5</td><td>2:01.2</td><td>1:57.4</td><td>1.9</td></tr>
        <tr><td>Best 4K</td><td>4:03.5</td><td>15:48</td><td>2:01.7</td><td>1:58.5</td><td>1.1</td></tr>
        <tr><td>Best 5K</td><td>3:56.8</td><td>19:44.7</td><td>1:58.4</td><td>1:58.4</td><td>-0.1</td></tr>
        <tr><td>Worst 5K</td><td>21:20</td><td>21:20</td><td>2:07.9</td><td>2:07.9</td><td>N/A</td></tr>
      </table>
      <h4>Best by Month</h4>
      <table>
        <tr><th>Month</th><th>Total Rowing Distance</th><th>Total Rowing Time</th><th>Best 5K Time</th><th>Worst 5K time</th></tr>
        <tr><td>Aug 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>July 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>June 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>May 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Apr 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Mar 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Feb 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Jan 19</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Dec 18</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Nov 18</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Oct 18</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>Sep 18</td><td></td><td></td><td></td><td></td></tr>

      </table>
      <h3>5K Run</h3>
      <table>
        <tr><th>Dist.</th><th>Time</th><th>Avg/1K</th></tr>
        <tr><td>Best 1K</td><td></td><td></td></tr>
        <tr><td>Best 2K</td><td></td><td></td></tr>
        <tr><td>Best 3K</td><td></td><td></td></tr>
        <tr><td>Best 4K</td><td></td><td></td></tr>
        <tr><td>Best 5K</td><td></td><td></td></tr>
        <tr><td>Worst 5K</td><td>1:00:00</td><td></td></tr>
      </table>
      </div>
    );
  }
}

export default Cardio;
