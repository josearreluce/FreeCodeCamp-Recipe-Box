var React = require('react');
var ReactDOM = require('react-dom');
var ModalBox = require('./ModalBox.js');
var RecipeBox = require('./RecipeBox.js');

class App extends React.Component {
  render () {
    return (
      <div>
        <RecipeBox />
        <ModalBox />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);