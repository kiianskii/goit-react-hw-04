import s from "./LoadMoreBtn.module.css"

function LoadMoreBtn({ onLoadMore }) {
  return (
      <div className={s.btndiv}>
          <button type="button" onClick={onLoadMore}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn