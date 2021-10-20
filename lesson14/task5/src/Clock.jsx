import React, { useEffect, useState } from "react";
import moment from 'moment';

const Clock = ({location,offset}) => {
      const [time, setTime] = useState(moment
      .utc(new Date())
      .utcOffset(Number(offset) * 60)
      .format("LTS"));

      useEffect(()=>{
        const myInterval = setInterval(() => 
              setTime(moment
      .utc(new Date())
      .utcOffset(Number(offset) * 60)
      .format("LTS"))
          , 1000)
        return clearInterval(myInterval)
        }
      ,)
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
