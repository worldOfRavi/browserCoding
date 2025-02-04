import React, { useEffect, useState } from "react";

function randomFunctionUtility(colorLength) {
  return Math.floor(Math.random() * colorLength);
}

const RandomColorGenerator = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  //   hex color range in between array [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E']. this is the main logic
  const generateHexColor = () => {
    let hexColor = "#";
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomFunctionUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRGBColor = () => {
    const r = randomFunctionUtility(256);
    const g = randomFunctionUtility(256);
    const b = randomFunctionUtility(256);
    const rgbColor = `rgb(${r},${b},${b})`
    setColor(rgbColor)
  };

  useEffect(()=>{
    colorType === 'hex' ? generateHexColor()  : generateRGBColor()
  },[colorType])
  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: color }}
        className={`w-full h-screen `}
      >
       <div className="flex justify-center items-center gap-2">
       <button
          onClick={() => setColorType("hex")}
          className="border border-slate-600 p-2 text-white"
        >
          Create Hex color
        </button>
        <button
          onClick={() => setColorType("rgb")}
          className="border border-slate-400 p-2 text-white"
        >
          Create RGB color
        </button>
        <button
          onClick={() => {
            colorType === "hex" ? generateHexColor() : generateRGBColor();
          }}
          className="border border-slate-400 p-2 text-white"
        >
          Generate Random Color
        </button>
       </div>
       <div className="flex flex-col gap-4 items-center justify-center mt-20">
        <p className="text-3xl text-white">Color: {colorType === 'hex' ? "Hex Color" : "RGB Color"}</p>
        <p className="text-3xl text-white">{colorType === 'hex' ? "Hex Color" : "RGB Color"} : {color}</p>
       </div>
      </div>
    </React.Fragment>
  );
};

export default RandomColorGenerator;
