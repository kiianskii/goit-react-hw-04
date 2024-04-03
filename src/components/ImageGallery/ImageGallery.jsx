import ImageCard from "../ImageCard/ImageCard"


function ImageGallery({ images }) {
  return (
    <ul>
          {images.map(img => {
              return <ImageCard img={img} key={img.id}/>
          })}
    </ul>
  )
}

export default ImageGallery