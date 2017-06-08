var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
class ModalBox extends React.Component {
  constructor () {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.edit = this.edit.bind(this);
    this.handleRecipe = this.handleRecipe.bind(this);
    this.newRecipe = this.newRecipe.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.state = {
      showModal: false,
      recipeName: '',
      ingredients: [],
    };
  }

  handleRecipe() {
    if(this.props.modalMode === 'Edit') {
      this.edit();
    } else {
      this.newRecipe();
    }
  }

  edit () {
    var name = this.props.currRecipe;
    var ingredients = this.props.currIngredients.split(",");
    this.props.editRecipe(this.props.index,name, ingredients);
  }

  closeModal () {
    if(this.props.modalMode === "Edit") {
      this.props.endEdit();
    }

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
    this.props.updateName(e);
  }

  updateIngredients(e) {
    this.props.updateIngredients(e);
  }

  newRecipe() {
    var name = this.props.currRecipe;
    var ingredients = this.props.currIngredients.split(",");
    this.props.addRecipe(name, ingredients);
    this.closeModal();
  }

  render () {
    var showModal = this.state.showModal;
    var action = "Add New ";
    var recipeName = this.props.currRecipe;
    var ingredients = this.props.currIngredients;
    if(this.props.modalMode === "Edit") {
      showModal = true;
      action = "Edit ";
    }

    return (
      <div>
        <button className="btn btn-primary" type="button" onClick={this.openModal}>
          Add Recipe
        </button>
        <Modal show={showModal} >
          <Modal.Header closeButton>
            <Modal.Title> {action + "Recipe"} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="recipe-name">Recipe</label>
              <div className="col-md-10">
                <input className="form-control" 
                  type="text" id="recipe-name" 
                  placeholder="Recipe Name" 
                  value={recipeName} 
                  onChange={e => this.props.updateName(e)}
                  />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label" for="ingredients"> Recipe Ingredients </label>
              <div className="col-md-10">
                <input className="form-control" 
                  type="text" id="ingredients" 
                  placeholder="Enter Ingredients, separated by commas." 
                  value={ingredients}
                  onChange={e => this.props.updateIngredients(e)}
                  />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={this.handleRecipe}>
              {action}
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