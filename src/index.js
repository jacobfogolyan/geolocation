import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
	//constructor functions run before anything else. and override React.Components constructor function
	constructor(props) {
		// we initialize state first for now.
		//calling super method is compulsory
		super(props);

		//set state This is the only time we do direct assignment to this.state
		this.state = {
			lat: null
		};

		window.navigator.geolocation.getCurrentPosition(
			position => {
				//set state is a special required function for changing state in react.
				this.setState({
					lat: position.coords.latitude
				});

				//the wrong way to set state in React is
				//this.state.lat = position.coords.lattitue;
			},
			err => console.log(err)
		);
	}
	//components require a render() method
	render() {
		return <div>Latitude: { this.state.lat }</div>
	}
}

ReactDom.render(<App /> , document.querySelector("#root"));


//steps that occured flow diagram

/*

	1. Loaded Index.html
	2. Browser Loads JS
	3. instance of App component is created
	4. App Components Constructor function gets called
	5. State Object is created and assigned to the 'this.state' property
	6. we call geolocation server
	7. React calls the component render method
	8. App returns JSX, gets rendered to page as HTML
	9. Created new Javascript Object for Latitude.

*/