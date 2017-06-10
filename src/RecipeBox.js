var React = require('react');
var ReactDOM = require('react-dom');
class Recipe extends React.Component {
	constructor () {
		super();
		this.delete = this.delete.bind(this);
		this.edit = this.edit.bind(this);
	}

	delete () {
		this.props.remove(this.props.num);
	}

	edit () {
		var key = Object.keys(this.props.ingredients);
		var ingredients = this.props.ingredients[key];
		this.props.edit(this.props.num, this.props.name, ingredients);
	}

	render () {
		var idNum = this.props.num;
		var key = Object.keys(this.props.ingredients);
		var ingredients = this.props.ingredients[key];
		var listedIngredients = [];
		for(var i = 0; i < ingredients.length; i++) {
			listedIngredients.push(<li key={i}>{ingredients[i]}</li>);
		}

		return (
			<div className="panel panel-success">
				<div className="panel-heading" role="tab" id={"heading" + idNum}>
				<h4 className="panel-title">				
					<a role="button" data-toggle="collapse" data-parent="#accordion" 
						href={"#collapse" + idNum} aria-expanded="true" aria-controls={"collapse" + idNum}> 
						{this.props.name}
					</a>
				</h4>
				</div>

				<div id={"collapse" + idNum} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading" + idNum}>
					<div className="panel-body">
						<h5 className="text-center">  Ingredients </h5>
						<ul>{listedIngredients}</ul>				
					</div>
					<div className="panel-footer">
					<button className="btn btn-danger" onClick={this.delete}>
						Delete
					</button>
					<button className="btn btn-default" onClick={this.edit}>
						Edit
					</button>         
					</div>
				</div>
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
			var currRecipe =(<Recipe name={names[i]} ingredients={recipes[i]} 
				num={i} remove={this.props.removeRecipe} edit={this.props.edit}/>);
			recipesList.push(currRecipe);
		}

		return (
			<div className="row" id="recipe-box">
				<div className="col-offset-md-2 col-md-12">				
					<h1 className="text-center"> Recipes </h1>
					<div className="well panel-group" id="accordion" role="tablist" aria-multiselectable="true">						
						{recipesList}						
					</div>
				</div>
			</div>
		);
	}
}

module.exports = {RecipeBox: RecipeBox, Recipe: Recipe};