var React = require('react');
var ReactDOM = require('react-dom');

class RecipeBox extends React.Component {
	constructor () {
		super();
		this.state = {
			recipes: []
		};	
	}

	render () {
		return (
			<div className="row" id="recipe-box">
				<div className="col-offset-md-2 col-md-12">				
					<h1 className="text-center"> Recipes </h1>
					<div className="well">
						{this.state.recipes}
					</div>
				</div>
			</div>
		);
	}
}

module.exports = RecipeBox;