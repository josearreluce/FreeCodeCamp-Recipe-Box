var React = require('react');
var ReactDOM = require('react-dom');
var ModalBox = require('./ModalBox.js');
var RecipeBoxComponents = require('./RecipeBox.js');

var Recipe = RecipeBoxComponents.Recipe;
var RecipeBox = RecipeBoxComponents.RecipeBox
class App extends React.Component {
  constructor() {
    super()

    this.addRecipe = this.addRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.state = {
      recipes: new Array(0),
      names: new Array(0)
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

  render () {
    return (
      <div>
        <RecipeBox recipes={this.state.recipes} 
          names={this.state.names} removeRecipe={this.removeRecipe}/>
        <ModalBox addRecipe={this.addRecipe}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);