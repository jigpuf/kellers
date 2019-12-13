import React from 'react';

class Calendar extends React.Component {
  render () {
    return (
      <div>
      Calendar:<br />
      Week:<br />
        <table>
          <tr><th>Symbolism</th><th>Name</th><th>Day</th><th>Day</th><th>Name</th><th>Symbolism</th></tr>
          <tr><td>Sun</td><td>Sun</td><td>Sunday</td><td>Domingo</td><td>The Lord</td><td>The Lord</td></tr>
          <tr><td>Moon</td><td>Moon</td><td>Monday</td><td>Lunes</td><td>Moon</td><td>Moon</td></tr>
          <tr><td>God of War</td><td>Tiu</td><td>Tuesday</td><td>Martes</td><td>Mars</td><td>God of War</td></tr>
          <tr><td>Swift God</td><td>Woden</td><td>Wednesday</td><td>Miercoles</td><td>Mercury</td><td>Quick Messenger God</td></tr>
          <tr><td>God of Thunder</td><td>Thor</td><td>Thursday</td><td>Jueves</td><td>Jupiter</td><td>King of Gods</td></tr>
          <tr><td>Goddess of Love</td><td>Frigg</td><td>Friday</td><td>Viernes</td><td>Venus</td><td>Goddess of Love</td></tr>
          <tr><td>God of Agriculture</td><td>Saturn</td><td>Saturday</td><td>Sabado</td><td>Sabath</td><td>Sabath</td></tr>
        </table>

      </div>
    );
  }
}

export default Calendar;
