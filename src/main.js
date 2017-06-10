var React = require('react');
var ReactDOM = require('react-dom');
var ModalBox = require('./ModalBox.js');
var RecipeBoxComponents = require('./RecipeBox.js');

var Recipe = RecipeBoxComponents.Recipe;
var RecipeBox = RecipeBoxComponents.RecipeBox

if(localStorage.recipes == null) {
	localStorage.setItem('recipes', JSON.stringify([{'cheese': ['cheese']}]));
}

if(localStorage.names == null) {
	localStorage.setItem('names', JSON.stringify(['cheese']));
}

class App extends React.Component {
  constructor() {
    super();

    this.addRecipe = this.addRecipe.bind(this);
    this.clearModal = this.clearModal.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.startEditRecipe = this.startEditRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateName = this.updateName.bind(this);

    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')),
      names: JSON.parse(localStorage.getItem('names')),
      currRecipe: "",
      currIngredients: "",
      modalMode: false,
      index: -1
    }
  }

  addRecipe(name, ingredients) {
    var currentRecipes = this.state.recipes;
    var currentNames = this.state.names;

    var newRecipe = {};
    newRecipe[name] = ingredients;
    this.setState({
      recipes: currentRecipes.concat(newRecipe),
      names: currentNames.concat(name)
    });

    localStorage.setItem("names", JSON.stringify(this.state.names.concat(name)));
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes.concat(newRecipe)));
    
    this.clearModal();
  }

  editRecipe(index, newName, newIngredients) {
  	var currentRecipes = this.state.recipes;
  	var currentNames = this.state.names;

  	var editedRecipe = {};
  	editedRecipe[newName] = newIngredients;
  	
  	currentRecipes[index] = editedRecipe;
  	currentNames[index] = newName;

  	this.setState({
  		recipes: currentRecipes,
  		names: currentNames
  	});

  	localStorage.setItem("names", JSON.stringify(this.state.names));
  	localStorage.setItem("recipes", JSON.stringify(this.state.recipes));

  	this.clearModal();
  }

  removeRecipe(index) {
  	var currentRecipes = this.state.recipes;
  	var currentNames = this.state.names;

  	currentRecipes.splice(index, 1);
  	currentNames.splice(index, 1);
  	this.setState({
  		recipes: currentRecipes,
  		names : currentNames
  	});

  	localStorage.setItem("names", JSON.stringify(this.state.names));
  	localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  }

  startEditRecipe(index, name, ingredients) {
  	this.setState({
  		index: index,
  		currRecipe: name,
  		currIngredients: ingredients,
  		modalMode: "Edit"
  	});
  }

  updateName(e) {
    this.setState({
      currRecipe: e.target.value
    });
  }

  updateIngredients(e) {
    this.setState({
      currIngredients: e.target.value
    });
  }

  clearModal () {
  	this.setState({
  		currRecipe: "",
  		currIngredients: "",
  		index: -1,
  		modalMode: "Add New"
  	});
  }

  render () {
    return (
      <div className="col-md-8 col-md-offset-2">
        <RecipeBox recipes={this.state.recipes} 
          names={this.state.names} edit={this.startEditRecipe} removeRecipe={this.removeRecipe}/>
        <ModalBox addRecipe={this.addRecipe} editRecipe={this.editRecipe}
        	modalMode={this.state.modalMode} currRecipe={this.state.currRecipe} 
        	currIngredients={this.state.currIngredients} updateName={this.updateName}
        	updateIngredients={this.updateIngredients} endEdit={this.endEdit}
        	index={this.state.index}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);