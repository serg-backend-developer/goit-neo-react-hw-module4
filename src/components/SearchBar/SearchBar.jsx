import { FaMagnifyingGlass } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';

import css from './SearchBar.module.css';


const SearchBar = ({ onSubmit }) => {
  const validateSearchData = (event) => {
      event.preventDefault();

      const searchQuery = event.target.elements.query.value.trim();

    if (!searchQuery) {
      toast.error('Enter correct search data!');
    } else {
      onSubmit(searchQuery);
    }

    event.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchBar} onSubmit={ validateSearchData }>
        <input type="text" autoComplete="off" autoFocus placeholder="Search..."/>
        <button type="submit" ><FaMagnifyingGlass size={20} />Search</button>
      </form>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </header>
  );
};

export default SearchBar;