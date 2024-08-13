import { useState } from 'react';
import { fetchSearch } from './api';

import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState('');
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState({});

  const searchHandler = async searchData => {
    setCards([]);
    setPage(1);
    setErrorMessage(false);
    setLoader(true);

    try {
      console.log(searchData)
      setCards(await fetchSearch({ searchData }));
      setSearchData(searchData);
    } catch (error) {
      setErrorMessage(true);
      console.log(error)
    } finally {
      setLoader(false);
    }
  };

  const loaderHandler = async () => {
    setLoader(true);
    const nextPage = page + 1;

    try {
      const newCards = await fetchSearch({ searchData, page: nextPage });
      if (newCards.length === 0) {
        return;
      }
      setCards(prevCards => [...prevCards, ...newCards]);
      setPage(nextPage);
    } catch (error) {
      setErrorMessage(true);
      console.log(error)
    } finally {
      setLoader(false);
    }
  };

  const onOpenModal = data => {
    setIsOpen(true);
    setParams(data);
  };

  return (
    <>
      <SearchBar onSubmit={searchHandler} />

      {!!cards.length && (<ImageGallery onOpenModal={onOpenModal} cards={cards} />)}

      {loader && <Loader />}

      {errorMessage && <ErrorMessage />}

      {cards.length > 0 && !loader && !errorMessage && (<LoadMoreBtn onLoadMore={loaderHandler} />)}

      <ImageModal {...params} isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </>
  );
};

export default App;