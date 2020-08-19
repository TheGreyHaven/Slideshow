import React, { Component } from 'react';

class RightArrow extends Component {
	render() {
		return (
			<button className='arrow forwardArrow' onClick={this.props.nextSlide}>
				<span>&#x3e;</span>
			</button>
		)
	}
}
export default RightArrow;