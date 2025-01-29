// // Counter example using useContext hook

// // import React, { useContext } from 'react'
// // import { useContextHook } from '../../hooks/UseContext'

// // const Counter = () => {
// //     const {count, increment, decrement} = useContext(useContextHook)
// //   return (
// //     <div>
// //         <p className='w-20 text-center font-bold text-xl'>{count}</p>
// //         <button className='border py-1 px-2 bg-slate-800 text-white' onClick={increment}>INCR</button>
// //         <button className='border py-1 px-2 bg-slate-800 text-white' onClick={decrement}>DECR</button>
// //     </div>
// //   )
// // }

// // export default Counter

// // Another example using useReducer hook;

// // import React, { useReducer } from "react";

// // reducer function 
// // const reducer = (state, action) => {
// //   let count = state;
  
// //   switch (action.type) {
// //     case "incr":
// //         count = count + 1;
// //         break;
// //     case "decr":
// //         count = count -1;
// //         break;
// //     default:
// //       return state
// //   }
// //   return count;
// // };

// // recommended one
// // const reducer = (state, action) => {
    
// //     switch (action.type) {
// //       case "incr":
// //            return state + 1;
// //       case "decr":
// //         state > 0 ? state= state -1 : null
// //         return state
          
// //       default:
// //         return state
// //     }
// //   };
// // const initialVal = 0;

// // const Counter = () => {
// //   const [count, dispatch] = useReducer(reducer, initialVal);
// //   const increment = () => {
// //     dispatch({ type: "incr" });
// //   };

// //   const decrement = () => {
// //     dispatch({ type: "decr" });
// //   };
// //   return (
// //     <div>
// //       <p className="w-20 text-center font-bold text-xl">{count}</p>
// //       <button
// //         className="border py-1 px-2 bg-slate-800 text-white"
// //         // onClick={increment}
// //         onClick={()=>dispatch({type:"incr"})}
// //       >
// //         INCR
// //       </button>
// //       <button
// //         className="border py-1 px-2 bg-slate-800 text-white"
// //         // onClick={decrement}
// //         onClick={()=>dispatch({type:"decr"})}
// //       >
// //         DECR
// //       </button>
// //     </div>
// //   );
// // };

// // export default Counter;

// example using Redux tool kit 

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../../store/CounterSlice';

const Counter = () => {
    const {count} = useSelector((state)=>state.counter);
    const [value, setValue]  = useState("");
    // console.log(value);
    
    
    const dispatch = useDispatch();
  return (
    <div className='w-1/2 mx-auto border bg-slate-400 text-white text-center'>
   <p className=''>{count}</p>
   <div className="flex gap-2">
    <button onClick={()=>dispatch(increment())} className='py-1.5 px-3 border border-white'>INCR</button>
    <button onClick={()=>dispatch(decrement())} className='py-1.5 px-3 border border-white'>DECR</button>
    <input type="number" className='text-black outline-none p-1' placeholder='Value' value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
    <button className='py-1.5 px-3 border border-white' onClick={()=>{
        dispatch(incrementByValue(value));
        setValue("")
    }}>Add</button>
   </div>
    </div>
  )
}

export default Counter
