import React from "react"
import Accordian from "./component/accordian"
import IamgeSlider from "./component/image-slider"
import UseContext from "./hooks/UseContext"
import Counter from "./component/hooksUsages/Counter"
import RandomColorGenerator from "./component/random-color"
import StarRating from "./component/star-rating"
import ImageSliderSecond from "./component/image-slider/ImageSlider"
import DragableTodo from "./component/DragableTodo"
import { initialData } from "./component/DragableTodo/config"
import DragableTodoReloaded from "./component/DragableTodo/DragableTodo"
import LoadMore from "./component/Load-more"


const App = () => {
  return (
    <React.Fragment>
    {/* accordian project */}
      {/* <Accordian /> */}

      {/* image slider */}
      {/* <IamgeSlider /> */}

      {/* counter */}
      {/* <Counter />  */}

      {/* random color generator */}
      {/* <RandomColorGenerator /> */}

      {/* Star rating */}
      {/* <StarRating /> */}

      {/* image slider second one */}
      {/* <ImageSliderSecond url = {"https://picsum.photos/v2/list"} limit={10} /> */}

      {/* dragable todo */}
      {/* <DragableTodo initialState={initialData} /> */}
      {/* <DragableTodoReloaded initialState={initialData} /> */}

      {/* load more project */}
      <LoadMore />
    </React.Fragment>
  )
}

export default App
