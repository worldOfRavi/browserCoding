import { Trash } from "lucide-react";
import React, { useRef, useState } from "react";

function DragableTodoReloaded({ initialState }) {
  const [data, setData] = useState(initialState);
  const dragItem = useRef();
  const dragContainer = useRef();

  const [inputValue, setInputValue] = useState("");

//   function to add item in TOdo container
  function handleAdd() {
    if (inputValue !== "") {
      setData((prev) => {
        const newData = { ...prev };
        newData["Todo"] = [...newData["Todo"], inputValue];
        return newData;
      });
      setInputValue("");
    }
  }

//   finction triger when the drag starts
  function handleDragStart(e, item, container) {
    e.target.style.opacity = 0.5;
    dragItem.current = item;
    dragContainer.current = container;
  }

//   function triger when the drag ends
  function handleDragEnd(e) {
    e.target.style.opacity = 1;
  }
  function handleDrop(targetContainer) {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (elm) => elm !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  }

//   function trigger when the item drag over any container
  function handleDragOver(e) {
    e.preventDefault();
  }

//   function to delete the todo item
function handleDelete(){
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev)=>{
        const newData = {...prev};
        newData[sourceContainer] = newData[sourceContainer].filter((todo)=>todo !== item);
        return newData
    })
}
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col gap-4">
      <div className="flex justify-center items-center gap-3 mt-2">
        <input
          type="text"
          placeholder="New Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleAdd();
          }}
          className="w-[400px] p-2 outline-none rounded-md"
        />
        <button
          className="border text-white bg-slate-400 py-2 px-4 rounded-md"
          onClick={handleAdd}
        >
          Add
        </button>
        <div 
        onDragOver={handleDragOver}
        onDrop={handleDelete}
        className="py-2 px-4 bg-red-700 text-white rounded-md cursor-pointer">
          <Trash />
        </div>
      </div>
      <div className=" flex gap-10 justify-center items-start flex-wrap">
        {data &&
          Object.keys(data).map((container, index) => {
            return (
              <div
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(container)}
                key={index}
                className="bg-slate-300 p-3"
              >
                <h1 className="font-semibold mb-2">{container}</h1>
                {data[container].map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, container)}
                      onDragEnd={handleDragEnd}
                      className="bg-white mb-2 p-3 cursor-move"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DragableTodoReloaded;
