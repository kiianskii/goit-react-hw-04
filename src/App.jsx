import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import { fetchImages } from './images-api'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Loader from './components/Loader/Loader'
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from './components/ImageModal/ImageModal'

function App() {
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imgURL, setImgURL] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      try {

        const data = await fetchImages(searchQuery, page)
        setItems([...items, ...data.results])
        setTotalItems(data.total)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
    getData()
  },[searchQuery, page])

  function onSearchQuery(querry) {
    setSearchQuery(querry)
    setItems([])
    setLoading(true)
  }

  function onLoadMore() {
    setLoading(true)
    setPage(page+1)
  }

  function openModal(imgURL) {
    setIsOpen(true);
    setImgURL(imgURL)
  }

  function closeModal() {
    setIsOpen(false);
  }

  const notify = () => {
    toast('Field is empty...')
    setLoading(false)
  };
  
  return (
    <>
      <SearchBar onSearchQuery={onSearchQuery} setPage={setPage} notify={notify} />
      {error && <ErrorMessage />}
      {totalItems !== 0 && !error && <ImageGallery images={items} openModal={openModal} />}
      {loading && <Loader />}
      {totalItems !== 0 && items.length < totalItems && !error && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster position="top-right" />
      <ImageModal  closeModal={closeModal} modalIsOpen={modalIsOpen} imgURL={imgURL} />
    </>
  )
}

export default App
