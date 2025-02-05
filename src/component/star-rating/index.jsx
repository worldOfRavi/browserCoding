// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// const StarRating = ({ noOfStar = 10 }) => {
//   // Different methods to create an array.
//   // const arr = Array.from({noOfStar}, (_, index)=>index)
//   // console.log(arr);
//   //   let arr = Array.from({length:noOfStar},(_,i)=>i);
//   // let arr = [...Array(noOfStar)];
//   //   console.log(arr);



//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   function handleClick(getCurrentIndex){
//     setRating(getCurrentIndex)
//   }
//   function handleMouseEnter(getCurrentIndex){
//     setHover(getCurrentIndex)
//   }
//   function handleMouseLeave(){
//     setHover(rating)

//   }
//   return (
//     <React.Fragment>
//       <div className=" w-full flex items-center justify-center ">
//         {[...Array(noOfStar)].map((_, index) => {
//             index += 1;
//           return <FaStar key={index} size={40}
//           onClick={()=>handleClick(index)}
//           onMouseMove={()=>handleMouseEnter(index)}
//         //   onMouseEnter={}
//           onMouseLeave={()=>handleMouseLeave(index)}
//           //active and inactive is required if we use external css
//         //   className={`cursor-pointer ${index <= hover || rating ? 'active' : "inactive"}`} />;
//           className={`cursor-pointer ${index <= (hover || rating) ? 'text-yellow-400' : "text-slate-900"}`} />;
//         })}
//       </div>
//     </React.Fragment>
//   );
// };

// export default StarRating;



import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
function index({noOfStart = 10}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) =>{
        // when the star is clicked the rating would be the index of the star
        setRating(getCurrentIndex);
    }

    const handleMouseEnter = (getCurrentIndex) =>{
        // when the mouse enter to a start its it should be highlited
        setHover(getCurrentIndex)

    }
    const handleMouseLeave = () =>{
        // when the mouse leave it rating and hover shoule be the same, it means only the clicked rated starts will only be hilighted.
        setHover(rating)
    }

  return (
    <div className='w-full h-screen'>
    <div className="flex justify-center items-center">
        {
            [...Array(noOfStart)].map((_, index)=>{
                index += 1;
                return <FaStar key={index} size={40}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                 className={`cursor-pointer ${index <= (hover || rating) ? "text-yellow-500" : "text-black"}`} />
            })
        }
    </div>
      
    </div>
  )
}

export default index
