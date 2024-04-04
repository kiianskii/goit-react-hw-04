import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import { fetchImages } from './images-api'


function App() {
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [searchQuerry, setSearchQuerry] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchImages(searchQuerry, page)
        setItems([...items, ...data.results])
        setTotalItems(data.total)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[searchQuerry, page])

  function onSearchQuerry(querry) {
    setSearchQuerry(querry)
    setItems([])
  }

  function onLoadMore() {
    setPage(page+1)
  }
  
  return (
    <>
      <SearchBar onSearchQuerry={onSearchQuerry} />
      {totalItems !==0 && <ImageGallery images={items} />}
      {totalItems !==0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  )
}

export default App
