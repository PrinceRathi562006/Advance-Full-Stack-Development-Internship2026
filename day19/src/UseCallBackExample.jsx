import { useCallback, useState } from "react";
import Child from "./Child"

const UsecallbackExample =()=>{
    const [count, setCount]=useState(0);
    const sayHello = useCallback(()=>{
        console.log("Hello");
    }, []);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <Child hello = {sayHello}/>
        </div>
    )
}

export default UsecallbackExample;