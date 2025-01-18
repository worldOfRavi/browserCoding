import React from "react";
import { accordian } from "../config";

const Accordian = () => {
  return (
    <div>
      {accordian.map((item) => (
        <div key={item.id} className="flex flex-col w-[600px] mx-auto">
          <div className="flex justify-between gap-2 bg-slate-300 my-2 p-2">
            <span className="">{item.id}.</span>
            <h2>{item.question}</h2>
            <span className="font-extrabold rounded-lg bg-slate-700 px-2">+</span>
          </div>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
