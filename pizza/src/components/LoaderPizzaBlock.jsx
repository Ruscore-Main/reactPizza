import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPizzaBlock = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#eeeded"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="139" cy="111" r="110" /> 
    <rect x="1" y="239" rx="4" ry="4" width="280" height="25" /> 
    <rect x="1" y="279" rx="8" ry="8" width="280" height="84" /> 
    <rect x="1" y="373" rx="0" ry="0" width="65" height="25" /> 
    <rect x="160" y="374" rx="10" ry="10" width="120" height="25" />
  </ContentLoader>
)

export default LoaderPizzaBlock;