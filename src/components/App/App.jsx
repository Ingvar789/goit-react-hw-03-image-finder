// імпорт компонент
import React, { Component } from 'react';
import getImages from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import css from './App.module.css';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

export default class App extends Component {
  state = {
    pictures: [],
    searchQuery: '',
    page: 1,
    pending: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    // console.log(`prevPage=${prevPage}`, `page=${page}`);
    // console.log(`prevQuery=${prevQuery}`, `nextQuery=${nextQuery}`);

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      if (prevQuery !== nextQuery) {
        this.setState({ pictures: [], page: 1 });
      }
      this.setState({ pending: true });
      try {
        const pictures = await getImages(nextQuery, nextPage);

        if (pictures.length !== 0) {
          if (this.state.page === 1) {
            this.setState({ pictures });
            return;
          } else {
            this.setState(prevState => {
              return {
                pictures: [...prevState.pictures, ...pictures],
              };
            });
          }
          return;
        }
        toast.warning('There are no pictures for your request.');
        return;
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ pending: false });
      }
    }
  }

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { pictures, pending } = this.state;
    return (
      <div className={css.app}>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {pictures.length !== 0 && (
          <>
            <ImageGallery pictures={pictures} />{' '}
            {pending ? <Loader /> : <Button onLoadMore={this.incrementPage} />}
          </>
        )}
      </div>
    );
  }
}
