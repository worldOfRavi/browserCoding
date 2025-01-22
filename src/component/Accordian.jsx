import React, { useState } from "react";
import { accordian } from "../config";

const Accordian = () => {
  const [answerId, setAnswerId] = useState(null);
  const [mode, setMode] = useState("single");
  const [listOfAnswer, setListOfAsnwer] = useState([]);


  function toggleAnswer(getAnswerId){
    if(mode==="single"){
      setAnswerId(getAnswerId === answerId ? null : getAnswerId)
    }
    else{
      let cpyList = [...listOfAnswer];
      if(cpyList.includes(getAnswerId)){

        cpyList = cpyList.filter(id=>id!==getAnswerId)
        setListOfAsnwer(cpyList)
      }
      else{
      cpyList.push(getAnswerId);
      setListOfAsnwer(cpyList)
      }
    }
    
     
  }
  return (
    <div className="w-[600px] mx-auto mt-5" >
    <div className="flex justify-center gap-2">
    <button onClick={()=>setMode("single")} className={`${mode === "single" ? "bg-slate-600" :"bg-slate-300"} py-2 px-4 rounded-md font-semibold`}>Single</button>
    <button onClick={()=>setMode("multiple")} className={`${mode === "multiple" ? "bg-slate-600" :"bg-slate-300"} py-2 px-4 rounded-md font-semibold`}>Multiple</button>
    </div>
      {accordian.map((item) => (
        <div key={item.id} className="flex flex-col  ">
          <div className="flex justify-between gap-2 bg-slate-300 my-2 p-2">
            <span className="">{item.id}.</span>
            <h2>{item.question}</h2>
            <span onClick={()=>toggleAnswer(item.id)} className="font-extrabold rounded-lg w-10 h-10 flex justify-center items-center cursor-pointer bg-slate-700 px-2">+</span>
          </div>
          {mode === "single" ? item.id === answerId && <p className={`bg-slate-100`}  >{item.answer}</p>   : 
          <p className={`${listOfAnswer.includes(item.id) ? '' : 'hidden'} bg-slate-100`}>{item.answer}</p>
          }
        </div>
      ))}
    </div>
  );
};

export default Accordian;
