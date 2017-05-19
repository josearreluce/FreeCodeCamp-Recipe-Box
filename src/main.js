var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./ModalBox.js');
var ModalBox = Modal.ModalBox;
class App extends React.Component {
  render () {
    return (
      <div>
        <ModalBox />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);