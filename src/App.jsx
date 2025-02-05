import React from "react"
import Accordian from "./component/accordian"
import IamgeSlider from "./component/image-slider"
import UseContext from "./hooks/UseContext"
import Counter from "./component/hooksUsages/Counter"
import RandomColorGenerator from "./component/random-color"
import StarRating from "./component/star-rating"
import ImageSliderSecond from "./component/image-slider/ImageSlider"


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
      <ImageSliderSecond />
    </React.Fragment>
  )
}

export default App
