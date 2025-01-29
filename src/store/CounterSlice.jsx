// import { createSlice } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit";


// const initialState  = {
//     count : 0
// }

// const CounterSlice = createSlice({
//     name:"counter",
//     initialState,
//     reducers :{
//         increment: (state, action) =>{
//             state.count = state.count + 1
//         },
//         decrement : (state, action) =>{
//             state.count--;
//         },
//         incrementByValue: (state, action) =>{
//             console.log(action.payload);
            
//             state.count += action.payload
//         }
        
//     }
// })

// export const {increment, decrement, incrementByValue} = CounterSlice.actions; 
// export default CounterSlice.reducer;





const initialState = { count: 0};


const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state, action) =>{
            state.count++
        },
        decrement:(state, action) =>{
            if(state.count > 0){
                state.count--
            }
        },
        incrementByValue :(state,action) =>{
            state.count += action.payload
        }
    }
})

export const { increment, decrement, incrementByValue}  = CounterSlice.actions;
export default CounterSlice.reducer;
