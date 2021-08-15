import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={260}
    viewBox="0 0 260 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
  </ContentLoader>
)

export default ImageLoader