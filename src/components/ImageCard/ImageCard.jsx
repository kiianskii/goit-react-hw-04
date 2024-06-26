import s from "./ImageCard.module.css"

function ImageCard({ img, openModal}) {

  return (
      <li onClick={() => { openModal(img.urls.full) }} className={s.item}>
        <div className={s.div}>
        <img className={s.img} src={img.urls.small} alt={img.description} />
        </div>
      </li> 
  )
}

export default ImageCard