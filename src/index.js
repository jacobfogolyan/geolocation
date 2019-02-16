import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
	//Constructor functions run before anything else. and override React.Components constructor function
	constructor(props) {
		// we initialize state first for now.
		//calling super method is compulsory
		super(props);

		//set state This is the only time we do direct assignment to this.state
		this.state = {
			lat: null,
			errorMessage: ''
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
			err => {
				console.log(err);
				this.setState({
					errorMessage: err.message
				});
			}
		);
	}
	//components require a render() method
	render() {
		//add condition statments to hide and show error message if error message is needed.
		//if state errorMessage has a value and no latitude return error
		if ( this.state.errorMessage && !this.state.lat ) {
			return <div>Error: { this.state.errorMessage }</div>
		}

		//if errorMessage is still not set and latitude is available return latitude.
		if ( !this.state.errorMessage && this.state.lat ) {
			return <div>Latitude: { this.state.lat }</div>
		}

		//if neither of the above instances happen then say loading.
		return <div>Loading!</div>
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
	10. We get result of Geo location
	11. We update our state object with a call to 'this.setState'
	12. React Sees that we updated the state of a component
	13. React Calls our 'render' method a second time
	14. Check if latitude state is available
	15. Check if Error Message object has message
	16. If neither work then display Loading!
	17. Render method returns some (updated) JSX.
	18. React takes that JSX and updates content on the screen
*/
