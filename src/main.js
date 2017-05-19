var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
class ModalBox extends React.Component {
  constructor () {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      showModal: false
    };
  }
  
  closeModal () {
    this.setState({
      showModal: false
    });
  }
  
  openModal () {
    this.setState({
      showModal: true
    });
  }
  
  render () {
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        <Modal show={this.state.showModal} >
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> hello world </h4>
            <p> This is a modal box.</p>
            <p> Enjoy ! </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ModalBox />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);