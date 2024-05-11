"use client";
import React, { useEffect, useState } from "react";
interface propsType {
  day: number;
  min: number;
}
const Counter = ({ day, min }: propsType) => {
  const [days, setDays] = useState(day);
  const [hours, setHours] = useState(23);
  const [mins, setMins] = useState(min);
  const [secs, setSecs] = useState(60);
  const [timesUp, setTimesUp] = useState(0);

  useEffect(() => {
    // set the time out actions
    setTimeout(() => {
      if (days >= 0) {
        setSecs(secs - 1);

        if (hours === 0) {
          setDays(days - 1);
        }
        if (mins === 0) {
          setHours(hours - 1);

          setMins(59);
        }
        if (secs === 0) {
          setMins(mins - 1);

          setSecs(59);
        }
      } else if (days < 0) {
        setTimesUp(1);
      }
    }, 1000);
  }, [days, hours, mins, secs]);

  return (
    <>
      {!timesUp ? (
        <>
          <div className="timer">
            <div className="d-flex" data-countdown="2020/4/11">
              <span className="cdown days">
                <span className="time-count"> {days} </span> <p>Days</p>
              </span>
              <span className="cdown hour">
                <span className="time-count"> {hours} </span> <p>HRS</p>
              </span>
              <span className="cdown minutes">
                <span className="time-count"> {mins} </span> <p>Min</p>
              </span>
              <span className="cdown second">
                {" "}
                <span>
                  <span className="time-count"> {secs} </span> <p>Sec</p>
                </span>
              </span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Counter;
