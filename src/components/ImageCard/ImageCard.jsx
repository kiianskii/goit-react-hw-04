

function ImageCard({img}) {
  return (
      <li>
        <div>
        <img src={img.urls.small} alt={img.description} />
        </div>
      </li> 
  )
}

export default ImageCard