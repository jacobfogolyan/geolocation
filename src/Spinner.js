import React from 'react';

const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message || "Loading..."}</div>
		</div>
	);
}
//alternate value for our props.
Spinner.defaultProps = {
	message: 'Loading...'
};

export default Spinner;