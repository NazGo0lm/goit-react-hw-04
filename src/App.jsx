//import { getPhotos } from "apiService/photos";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./components/apiPhotos/photos";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
//import { Audio } from 'react-loader-spinner';

const App = () => {
  //query,images,pages,error,loader,empty,visible,modal,modalUrl,modalAlt
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  //const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoader(true)
      try{
        const {total_pages ,results } = await getPhotos(
          
          query,
          pages
        );
        if (results.length === 0) {
          toast.error("There is no matches to yout request. PLS Try again!");
          setLoader(false);
          setEmpty(true);
          return;
        
        }
        setImages(previmages => [...previmages, ...results]);
        setVisible(pages < total_pages)
        //setTotalPage(0 + total_pages)
        //console.log(total_pages)
        //console.log(totalPage)
      } catch(error) {
        setError(error.message)
        
      } 
      finally {
        setLoader(false)
      }
    }
    fetchImages();
    
  }, [query, pages]
  )

//console.log(images)
  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
     setImages([]);
    setPages(1);
    setError(null);
    setEmpty(false);
    setVisible(false); 
    //console.log(searchQuery)
  }
  const onLoadMore = () => {
      setPages((page) => page + 1); 
      //totalPage === pages && console.log('sadas');
      

  }  
  const openModal = (image) => {
    setModal(true);
    setModalUrl(image.urls.regular);
    setModalAlt(image.alt_description);
    //console.log(modalUrl);
  }
  const onCloseModal = () => {
    setModal(false);
    setModalUrl("");
    setModalAlt("");
  } 
  //console.log(visible)
  
  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />}
      {visible && <LoadMoreBtn onClick={onLoadMore} /* disabled={loader} */ >Load More</LoadMoreBtn>}
      



      {loader && <Loader />}
      
      

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {empty && <ErrorMessage >Sorry, there are no images...</ErrorMessage>}
      <ImageModal
        modalIsOpen={modal}
        src={modalUrl}
        alt={modalAlt}
        closeModal={onCloseModal}
      />
    </>
  )
};


export default App
