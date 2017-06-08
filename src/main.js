var React = require('react');
var ReactDOM = require('react-dom');
var ModalBox = require('./ModalBox.js');
var RecipeBoxComponents = require('./RecipeBox.js');

var Recipe = RecipeBoxComponents.Recipe;
var RecipeBox = RecipeBoxComponents.RecipeBox
class App extends React.Component {
  constructor() {
    super();

    this.addRecipe = this.addRecipe.bind(this);
    this.startEditRecipe = this.startEditRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.state = {
      recipes: new Array(0),
      names: new Array(0),
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
    console.log(newRecipe);
    this.setState({
      recipes: currentRecipes.concat(newRecipe),
      names: currentNames.concat(name)
    });
  }

  editRecipe(index, newName, newIngredients) {
  	var currentRecipes = this.state.recipes;
  	var currentNames = this.state.names;

  	var editedRecipe = {};
  	editedRecipe[newName] = newIngredients;
  	
  	currentRecipes[i] = editedRecipe;
  	currentNames[i] = newName;

  	this.setState({
  		recipes: currentRecipes,
  		names: currentNames
  	});
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
  }

  startEditRecipe(index, name, ingredients) {
  	this.setState({
  		index: index,
  		currRecipe: name,
  		currIngredients: ingredients,
  		modalMode: "Edit"
  	});
  }

  render () {
    return (
      <div>
        <RecipeBox recipes={this.state.recipes} 
          names={this.state.names} edit={this.startEditRecipe} removeRecipe={this.removeRecipe}/>
        <ModalBox addRecipe={this.addRecipe} editRecipe={this.editRecipe}
        	modalMode={this.state.modalMode} currRecipe={this.state.currRecipe} 
        	currIngredients={this.state.currIngredients}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);