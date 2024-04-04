import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

function ImageGallery({ images }) {
  return (
    <ul className={s.list}>
          {images.map(img => {
              return <ImageCard img={img} key={img.id}/>
          })}
    </ul>
  )
}

export default ImageGallery