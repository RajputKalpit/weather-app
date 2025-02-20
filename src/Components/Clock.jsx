import { useState } from "react";

const Clock = (props) => {

    let [currTime, setCurrTime] = useState(new Date());
    setInterval(()=>{
        setCurrTime(new Date())
    },1000)
    
    return (
       <>
       <p className="text-3xl font-roboto text-white">
        <time>
            {currTime.getHours().toString().padStart(2, '0')} : {currTime.getMinutes().toString().padStart(2, '0')} : {currTime.getSeconds().toString().padStart(2, '0')}
        </time>
        </p>
       </> 
    );
};
export default Clock;