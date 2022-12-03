import React, { useState , useEffect } from 'react';

function Timer() {

    const [second , setSecond] = useState(59);
  const [minute , setMin] = useState(59);

  const [hour , setHour] = useState(23);

//   const [start , setstart] = useState(false);


  let timer;
  useEffect(()=>{
      timer = setInterval(()=>{
        setSecond(second-1);

        if(second == 0){
          setMin(minute - 1);
          setSecond(59);
        }

        if(minute == 0){
            setMin(59)
            setHour(hour - 1);
        }

      },1000);


    return () => {clearInterval(timer)}
  })
    
    return (
        <>
          <span>&nbsp;{hour < 10 ? "0"+hour : hour}: {minute < 10 ? "0"+minute : minute} : {second < 10 ? "0"+second : second}</span>  
        </>
    );
}

export default Timer;