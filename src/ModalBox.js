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
        <button className="btn btn-primary" type="button" onClick={this.openModal}>
          Add Recipe
        </button>
        <Modal show={this.state.showModal} >
          <Modal.Header closeButton>
            <Modal.Title> Add New Recipe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="recipe-name">Recipe</label>
              <div className="col-md-10">
                <input className="form-control" type="text" id="recipe-name" 
                  placeholder="Recipe Name"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="ingredients"> Recipe Ingredients </label>
              <div className="col-md-10">
                <input className="form-control" type="text" id="ingredients" 
                  placeholder="Enter Ingredients, separated by commas."/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.addRecipe}>
              Add Recipe
            </button>
            <button className="btn btn-default" onClick={this.closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = ModalBox;