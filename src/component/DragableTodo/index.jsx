import React, { useRef, useState } from "react";

/*
Note:  the by default html elements are neither dragable nore dropable
so the item to be dragged need to pass attribute draggable
also on the container that you want to drop the dragged item on need to handle the event, onDragOver and change the default behaviour

important events need to remember in this project are

on item to be dragged
- need to pass the attribute draggable
- onDragStart
- onDragEnd


on the container on which the item need to be dropped
- onDragOver
- onDrop
*/ 

function DragableTodo({ initialState }) {
  const [data, setData] = useState(initialState);
//   we need to use use ref when we have to direct communicate with dom
//aslo when we want a variable to remember the old value even after the page gets reloaded as the state gets changed after the page gets reloaded.

  const dragItem = useRef();
  const dragContainer = useRef();
  
//   function gets triggered when the item drag starts
  const handleDragStart = (e, item, container) =>{
    dragItem.current = item;
    dragContainer.current  = container;
    e.target.style.opacity = 0.5;
  }

  //function gets triggered when the item drag ends
  const handleDragEnd = (e) =>{
    e.target.style.opacity = 1;
  }

//   this function triggered when the item dropped to the another container
  const handleOnDrop = (e, targetContainer) =>{
    const item =  dragItem.current;
    const sourceContainer = dragContainer.current;

    setData((prev)=>{
        const newData = {...prev};
        newData[sourceContainer] = newData[sourceContainer].filter((i)=>i!== item);
        newData[targetContainer] = [...newData[targetContainer], item];
        return newData;
    })
  }

  const handleDragOver = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="w-full h-screen bg-slate-200 flex gap-4 justify-center p-5 items-start">
      {data &&
        Object.keys(data).map((container, index) => {
          return (
            <div
            onDrop={(e)=>handleOnDrop(e, container)}
            onDragOver={handleDragOver}
              className="bg-slate-400 p-5 w-[250px] min-h-[300px] max-h-[500px] overflow-auto rounded-lg shadow-md"
              key={index}
            >
              <h1 className="text-2xl mb-2 font-semibold">{container}</h1>
              {data[container].map((item, idx) => {
                return (
                  <p
                    draggable
                    onDragStart={(e)=>handleDragStart(e, item, container)}
                    onDragEnd={handleDragEnd}
                    className="bg-white mb-2 p-2 cursor-move shadow rounded-md"
                    key={idx}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default DragableTodo;
