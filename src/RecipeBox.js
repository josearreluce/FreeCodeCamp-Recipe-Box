var React = require('react');
var ReactDOM = require('react-dom');
class Recipe extends React.Component {
	render () {
		var key = Object.keys(this.props.ingredients);
		var ingredients = this.props.ingredients[key];
		var listedIngredients = [];
		for(var i = 0; i < ingredients.length; i++) {
			listedIngredients.push(<li key={i}>{ingredients[i]}</li>);
		}

		return (
			<div>
				<h4> {this.props.name} </h4>
				<ul> {listedIngredients} </ul>
			</div>
		);
	}
}

class RecipeBox extends React.Component {
	render () {
		var recipes = this.props.recipes;
		var names = this.props.names;

		var recipesList = [];
		for(var i = 0; i < recipes.length;i++) {
			var currRecipe =(<li className="btn" key={i}> 
								<Recipe name={names[i]} ingredients={recipes[i]} />
							</li>);
			console.log("Ingredients: ");
			console.log(recipes[i]);
			recipesList.push(currRecipe);
		}

		return (
			<div className="row" id="recipe-box">
				<div className="col-offset-md-2 col-md-12">				
					<h1 className="text-center"> Recipes </h1>
					<div className="well">
						<ul>
							{recipesList}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = {RecipeBox: RecipeBox, Recipe: Recipe};