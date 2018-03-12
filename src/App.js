import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import ModalRoot from './ModalRoot';

import './dist/css/template.css';
import './App.css';

import { showModal, hideModal } from './actions/modal'

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.openPromptModal = this.openPromptModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  closeModal(event) {
    this.props.hideModal();
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  showInput(event) {
    console.log(this.state);
  }

  openAlertModal(event) {
    this.props.showModal({
      open: true,
      title: 'Alert Modal',
      message: 'Great work!',
      closeModal: this.closeModal
    }, 'alert')
  }

  openConfirmModal(event) {
    this.props.showModal({
      open: true,
      title: 'Confirm Modal',
      message: 'Great work!',
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'confirm')
  }

  openDeleteModal(event) {
    this.props.showModal({
      open: true,
      title: 'Delete Modal',
      message: 'Great work',
      deleteAction: this.closeModal,
      closeModal: this.closeModal
    }, 'delete')
  }

  openPromptModal(event) {
    this.props.showModal({
      open: true,
      title: 'Generate Address',
      fields: [{
        label: 'Address name',
        name: 'addressName',
        placeholder: 'Enter address name',
      }],
      onInputChange: this.onInputChange,
      confirmAction: this.showInput
    }, 'prompt')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Redux Modal Component</h1>
        </header>
        <div className="container">
          <div className="modal-types row d-flex justify-content-center align-items-center">
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openAlertModal}
              >alert</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openConfirmModal}
              >confirm</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openDeleteModal}
              >delete</button>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={this.openPromptModal}
              >prompt</button>
            </div>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ModalRoot />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
