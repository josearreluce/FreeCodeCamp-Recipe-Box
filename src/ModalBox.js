var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
class ModalBox extends React.Component {
  constructor () {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.edit = this.edit.bind(this);
    this.editingModal = this.editingModal.bind(this);
    this.handleRecipe = this.handleRecipe.bind(this);
    this.newRecipe = this.newRecipe.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.state = {
      showModal: false,
      recipeName: '',
      ingredients: [],
      mode: 'Add',
      index: -1
    };
  }

  handleRecipe() {
    if(this.state.mode === 'Edit') {
      console.log("Calling editingmodal");
      this.editingModal(this.props.index, this.props.currRecipe,
        this.props.currIngredients);
    } else {
      this.newRecipe();
    }
  }

  edit () {
    var name = this.state.recipeName;
    var ingredients = this.state.ingredients.split(",");
    this.props.editRecipe(this.state.index,name, ingredients);
  }

  editingModal (index, name, ingredients) {
    this.setState({
      showModal: true,
      recipeName: name,
      ingredients: ingredients,
      mode: 'Edit',
      index: index
    });
  }

  closeModal () {
    this.setState({
      showModal: false,
      recipeName: '',
      ingredients: [],
      mode: 'Add'
    });
  }
  
  openModal () {
    this.setState({
      showModal: true
    });
  }
  
  updateName(e) {
    this.setState({
      recipeName: e.target.value
    });
  }

  updateIngredients(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

  newRecipe() {
    var name = this.state.recipeName;
    var ingredients = this.state.ingredients.split(",");
    this.props.addRecipe(name, ingredients);
    this.closeModal();
  }

  render () {
    var showModal = this.state.showModal;
    if(this.props.modalMode === "Edit") {
      showModal = true;
    }
    return (
      <div>
        <button className="btn btn-primary" type="button" onClick={this.openModal}>
          Add Recipe
        </button>
        <Modal show={showModal} >
          <Modal.Header closeButton>
            <Modal.Title> Add New Recipe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="recipe-name">Recipe</label>
              <div className="col-md-10">
                <input className="form-control" 
                  type="text" id="recipe-name" 
                  placeholder="Recipe Name" 
                  value={this.state.recipeName} 
                  onChange={e => this.updateName(e)}
                  />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="ingredients"> Recipe Ingredients </label>
              <div className="col-md-10">
                <input className="form-control" 
                  type="text" id="ingredients" 
                  placeholder="Enter Ingredients, separated by commas." 
                  value={this.state.ingredients}
                  onChange={e => this.updateIngredients(e)}
                  />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.handleRecipe}>
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