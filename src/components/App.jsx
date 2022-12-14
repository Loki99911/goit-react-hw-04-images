import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { apiGet } from 'Service/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    name: '',
    imgArr: [],
    page: 1,
    totalImg: 0,
    loaderOn: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const newName = this.state.name;
    const currentPage = this.state.page;
    if (prevState.name !== newName || prevState.page !== currentPage) {
      this.setState({ loaderOn: true });
      apiGet(newName, currentPage)
        .then(data => {
          if (data.hits.length === 0) {
            toast.error(
              `Sorry((( Nothing found for your request "${newName}" `
            );
          }
          this.setState(prevState => ({
            imgArr: [...prevState.imgArr, ...data.hits],
            totalImg: data.total,
            largeImg: '',
            text: '',
          }));
        })
        .catch(error => toast.error(`${error.massage}`))
        .finally(() => this.setState({ loaderOn: false }));
    }
  }

  handleSubmit = name => {
    this.setState({ name, imgArr: [], page: 1 });
  };

  changePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  toggleModal = (largeImg, text) => {
    this.setState({
      showModal: !this.state.showModal,
      largeImg,
      text,
    });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          fontSize: 16,
          color: 'red',
        }}
      >
        <Searchbar onSubmitForm={this.handleSubmit} />
        <ToastContainer position="top-center" autoClose={3000} theme="light" />
        <ImageGallery
          imgArr={this.state.imgArr}
          funcToggle={this.toggleModal}
        />
        {this.state.loaderOn && <Loader />}
        {this.state.imgArr.length < this.state.totalImg &&
          !this.state.loaderOn && <Button page={this.changePage} />}
        {this.state.showModal && (
          <Modal
            url={this.state.largeImg}
            text={this.state.text}
            funcCloseClick={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
