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



  render () {
    return (
      <div>
        <RecipeBox recipes={this.state.recipes} 
          names={this.state.names} />
        <ModalBox addRecipe={this.addRecipe}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);