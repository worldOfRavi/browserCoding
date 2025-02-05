// import React, { useEffect, useState } from "react";

// function randomFunctionUtility(colorLength) {
//   return Math.floor(Math.random() * colorLength);
// }

// const RandomColorGenerator = () => {
//   const [colorType, setColorType] = useState("hex");
//   const [color, setColor] = useState("#000");

//   //   hex color range in between array [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E']. this is the main logic
//   const generateHexColor = () => {
//     let hexColor = "#";
//     const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
//     for (let i = 0; i < 6; i++) {
//       hexColor += hex[randomFunctionUtility(hex.length)];
//     }
//     setColor(hexColor);
//   };

//   const generateRGBColor = () => {
//     const r = randomFunctionUtility(256);
//     const g = randomFunctionUtility(256);
//     const b = randomFunctionUtility(256);
//     const rgbColor = `rgb(${r},${b},${b})`
//     setColor(rgbColor)
//   };

//   useEffect(()=>{
//     colorType === 'hex' ? generateHexColor()  : generateRGBColor()
//   },[colorType])
//   return (
//     <React.Fragment>
//       <div
//         style={{ backgroundColor: color }}
//         className={`w-full h-screen `}
//       >
//        <div className="flex justify-center items-center gap-2">
//        <button
//           onClick={() => setColorType("hex")}
//           className="border border-slate-600 p-2 text-white"
//         >
//           Create Hex color
//         </button>
//         <button
//           onClick={() => setColorType("rgb")}
//           className="border border-slate-400 p-2 text-white"
//         >
//           Create RGB color
//         </button>
//         <button
//           onClick={() => {
//             colorType === "hex" ? generateHexColor() : generateRGBColor();
//           }}
//           className="border border-slate-400 p-2 text-white"
//         >
//           Generate Random Color
//         </button>
//        </div>
//        <div className="flex flex-col gap-4 items-center justify-center mt-20">
//         <p className="text-3xl text-white">Color: {colorType === 'hex' ? "Hex Color" : "RGB Color"}</p>
//         <p className="text-3xl text-white">{colorType === 'hex' ? "Hex Color" : "RGB Color"} : {color}</p>
//        </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default RandomColorGenerator;



import React, { useEffect, useState } from 'react'
const randomFunctionUtility = (getNumber) =>{
  return Math.floor((Math.random())*getNumber)
}

function RandomColorGenerator() {
  const [color, setColor] = useState("#000");
  const [type, setType] = useState("hex");
  

  function generateHexColor(){
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for(let i = 0;i<6;i++){
      hexColor += hex[randomFunctionUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function generateRGBColor(){

    // rgb color ranges from 0 to 256
    const r = randomFunctionUtility(256);
    const g = randomFunctionUtility(256);
    const b = randomFunctionUtility(256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  useEffect(()=>{
    type === 'hex' ? generateHexColor() : generateRGBColor()
  },[type])
  
  
  return (
    <div style={{backgroundColor:color}} className={`w-full h-screen flex flex-col gap-4`}>
      <div className="flex items-center justify-center gap-3 mt-4">
        <button onClick={()=>setType("hex")} className='border border-slate-700 p-2 text-white shadow-2xl' >Generate Hex Color</button>
        <button onClick={()=>setType("rgb")} className='border border-slate-700 p-2 text-white shadow-2xl'>Generate RGB Color</button>
        <button onClick={()=>{type === 'hex' ? generateHexColor() : generateRGBColor()}} className='border border-slate-700 p-2 text-white shadow-2xl'>Generate Ranodm Color</button>
      </div>
      <div className="flex  flex-col items-center justify-center gap-3 mt-4 text-white">
      <h1 className='text-3xl'>{type === 'hex' ? "HEX Color" : "RGB Color"}</h1>
      <p className="">Color : {color}</p>
      </div>
    </div>
  )
}

export default RandomColorGenerator
