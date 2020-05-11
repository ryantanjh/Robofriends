import React from 'react';

const Scroll=(props) =>{
	return (
		<div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}}>
		{props.children}
		</div>
		);
};

export default Scroll;

//this method is for components that require 2 tags unlike those self wrapping tags