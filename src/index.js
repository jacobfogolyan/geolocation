import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	//this compiles into constructor through babel.
	state = {
		lat: null,
		errorMessage: ''
	};
/*  lifecycle methods
	sit and wait for updates
	Best practice is to use DATA Loading requests in Component Did Mount */
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}
	//runs every time the component updates
	componentDidUpdate() {
		console.log('My Component was just updated');
	}
	renderContent() {
		if ( this.state.errorMessage && !this.state.lat ) {
			return <div>Error: { this.state.errorMessage }</div>
		}
		if ( !this.state.errorMessage && this.state.lat ) {
			return <SeasonDisplay lat={ this.state.lat } />
		}
		//if neither of the above instances happen then say loading.
		return <Spinner message="Please accept Location Request"/>;
	}
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDom.render(<App /> , document.querySelector("#root"));