import React, {useState}  from 'react';

const START_WEIGHT = 303.8

const WeightLoss = () => {
  const [today, setToday] = useState({day:10, wt:292.2, ff:179.1});


  const items = [
      {day: 0, date:'Feb 8', wt:303.8, bmi:41.2, bf:39.7, wtr:44.5, mus:41.5, ff:183.2, sf:25.4, vf:20.9, mm:171.9, bone:9.5, diet:'keto' },
      {day: 1, date:'Feb 9', wt:302.6, bmi:41.0, bf:39.6, wtr:44.5, mus:41.5, ff:182.8, sf:25.4, vf:20.8, mm:171.6, bone:9.5, diet:'keto' },
      {day: 2, date:'Feb 10', wt:299.6, bmi:40.6, bf:39.3, wtr:44.6, mus:41.7, ff:181.9, sf:25.2, vf:20.5, mm:170.5, bone:9.5, diet:'keto' },
      {day: 4, date:'Feb 12', wt:299.0, bmi:40.5, bf:39.3, wtr:44.7, mus:41.7, ff:181.6, sf:25.2, vf:20.4, mm:170.2, bone:9.5, diet:'keto' },
      {day: 5, date:'Feb 13', wt:298.4, bmi:40.4, bf:39.2, wtr:44.7, mus:41.8, ff:181.5, sf:25.2, vf:20.4, mm:170.1, bone:9.5, diet:'keto' },
      {day: 6, date:'Feb 14', wt:295.4, bmi:40.0, bf:39.0, wtr:44.8, mus:41.9, ff:180.2, sf:25.0, vf:20.1, mm:169.0, bone:9.5, diet:'keto' },
      {day: 7, date:'Feb 15', wt:295.8, bmi:40.0, bf:39.0, wtr:44.8, mus:41.9, ff:180.3, sf:25.0, vf:20.1, mm:169.1, bone:9.5, diet:'keto' },
      {day: 8, date:'Feb 16', wt:294.8, bmi:39.9, bf:38.9, wtr:44.9, mus:42.0, ff:180.1, sf:25.0, vf:20.0, mm:168.6, bone:9.5, diet:'keto 8h 7.5k' },
      {day: 9, date:'Feb 17', wt:292.2, bmi:39.6, bf:38.7, wtr:45.0, mus:42.1, ff:179.1, sf:24.9, vf:19.8, mm:168.0, bone:9.3, diet:'keto' },
      {day: 10, date:'Feb 18', wt:292.2, bmi:39.6, bf:38.7, wtr:45.0, mus:42.1, ff:179.1, sf:24.9, vf:19.8, mm:168.0, bone:9.3, diet:'keto 8h 4k' },
      {day: 11, date:'Feb 19', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 12, date:'Feb 20', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 13, date:'Feb 21', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 14, date:'Feb 22', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 15, date:'Feb 23', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 16, date:'Feb 24', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 17, date:'Feb 25', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 18, date:'Feb 26', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 19, date:'Feb 27', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 20, date:'Feb 28', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 21, date:'Mar 1', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 22, date:'Mar 2', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 23, date:'Mar 3', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 24, date:'Mar 4', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 25, date:'Mar 5', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 26, date:'Mar 6', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 27, date:'Mar 7', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 28, date:'Mar 8', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 29, date:'Mar 9', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 30, date:'Mar 10', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 31, date:'Mar 11', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 32, date:'Mar 12', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 33, date:'Mar 13', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 34, date:'Mar 14', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 35, date:'Mar 15', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 36, date:'Mar 16', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 37, date:'Mar 17', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 38, date:'Mar 18', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 39, date:'Mar 19', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 40, date:'Mar 20', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 41, date:'Mar 21', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 42, date:'Mar 22', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },
      {day: 43, date:'Mar 23', wt:0, bmi:0, bf:0, wtr:0, mus:0, ff:0, sf:0, vf:0, mm:0, bone:0, diet:'keto' },

      {day: 70, date:'Apr 19', wt:225.0, bmi:30.5, bf:21.4, wtr:50.0, mus:40, ff:177.0, sf:15.0, vf:14.0, mm:172.0, bone:9.5, diet:'keto' },




    ]
    const changeToday = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setToday({...today,[name]:value});
    }
  const renderItems = items.map(item => {
    const weightToGoal = (item.wt-(item.ff*1.25)).toFixed(1);
    const weightLost = (START_WEIGHT-item.wt).toFixed(1);
    const weightPerDay = ((START_WEIGHT-item.wt)/item.day).toFixed(1);
    const daysLeft = (weightToGoal/weightPerDay).toFixed(1);
    const isOnTrack = ((70-item.day)>daysLeft) ? 'Good' : 'Fast';
    return (
      <tr key={item.slug}>
        <td>{item.day}</td>
        <td>{item.date}</td>
        <td>{item.wt}</td>
        <td>{item.bmi}</td>
        <td>{item.bf}</td>
        <td>{item.wtr}</td>
        <td>{item.mus}</td>
        <td>{item.ff}</td>
        <td>{item.sf}</td>
        <td>{item.vf}</td>
        <td>{item.mm}</td>
        <td>{item.bone}</td>
        <td>{item.diet}</td>
        <td>{weightLost}</td>
        <td>{weightToGoal}</td>
        <td>{daysLeft}</td>
        <td>{isOnTrack}</td>
      </tr>

    )
  })
  return(
    <div>
    <table>
      <tr>
        <th>Day</th>
        <th>Weight</th>
        <th>Fat Free Wt</th>
        <th>Rowing (m)</th>
      </tr>
      <tr>
        <td><input type='number' value ={10} name='day' onChange={changeToday}/></td>
        <td><input type='number' value ={292.2} name='wt' onChange={changeToday}/></td>
        <td><input type='number' value ={179.1} name='ff' onChange={changeToday}/></td>
        <td>{(((70-today.day)/((today.wt-(today.ff*1.25)))*1600).toFixed(0))}</td>
      </tr>

    </table>
      <table>
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>Weight(LB)</th>
          <th>BMI</th>
          <th>BF%</th>
          <th>Water%</th>
          <th>Muscle %</th>
          <th>Fat Free(LB)</th>
          <th>Sub Fat%</th>
          <th>Vis Fat%</th>
          <th>Muscle(LB)</th>
          <th>Bone(LB)</th>
          <th>Diet</th>
          <th>LB Lost</th>
          <th>LB to Go</th>
          <th>Days Left</th>
          <th>On Track</th>
        </tr>
        {renderItems}
      </table>
    </div>
  )
};

export default WeightLoss;
