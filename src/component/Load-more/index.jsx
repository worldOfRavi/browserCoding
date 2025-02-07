import React, { useEffect, useState } from "react";

function LoadMore() {
  const [imageList, setImageList] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count=== 0 ? 0 : count*20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setImageList((prev)=>[...prev,...data.products]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("Something went wrong ", error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [count]);
  console.log(imageList);

  if (laoding) {
    return <p>Loading please wait...!</p>;
  }
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {imageList && imageList.length > 0
          ? imageList.map((item, index) => (
              <div
                className="w-[300px] h-[250px] border border-slate-400"
                key={index}
              >
                <img
                  src={item.images[0]}
                  alt="random image"
                  className="w-full h-full object-cover p-3"
                />
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center">
        <button onClick={()=>setCount(count+1)} className="border py-2 px-4 bg-slate-400 my-4 text-white">Load More</button>
      </div>
    </React.Fragment>
  );
}

export default LoadMore;
