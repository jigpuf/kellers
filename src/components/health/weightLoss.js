import React from 'react';

const WeightLoss = () => {
  const items = [
      {day: 0, date:'Feb 8', wt:303.8, bmi:41.2, bf:39.7, wtr:44.5, mus:41.5, ff:183.2, sf:25.4, vf:20.9, mm:171.9, bone:9.5, diet:'keto' },
      {day: 1, date:'Feb 9', wt:302.6, bmi:41.0, bf:39.6, wtr:44.5, mus:41.5, ff:182.8, sf:25.4, vf:20.8, mm:171.6, bone:9.5, diet:'keto' },
      {day: 2, date:'Feb 10', wt:299.6, bmi:40.6, bf:39.3, wtr:44.6, mus:41.7, ff:181.9, sf:25.2, vf:20.5, mm:170.5, bone:9.5, diet:'keto' },
      {day: 4, date:'Feb 12', wt:299.0, bmi:40.5, bf:39.3, wtr:44.7, mus:41.7, ff:181.6, sf:25.2, vf:20.4, mm:170.2, bone:9.5, diet:'keto' },
      {day: 5, date:'Feb 13', wt:298.4, bmi:40.4, bf:39.2, wtr:44.7, mus:41.8, ff:181.5, sf:25.2, vf:20.4, mm:170.1, bone:9.5, diet:'keto' },
    ]

  const renderItems = items.map(item => {
    const startWeight = 303.8;
    const weightToGoal = (item.wt-(item.ff*1.25)).toFixed(1);
    const weightLost = (startWeight-item.wt).toFixed(1);
    const weightPerDay = ((startWeight-item.wt)/item.day).toFixed(1);
    const daysLeft = (weightToGoal/weightPerDay).toFixed(1);
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
      </tr>

    )
  })
  return(
    <div>
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
        </tr>
        {renderItems}
      </table>
    </div>
  )
};

export default WeightLoss;
