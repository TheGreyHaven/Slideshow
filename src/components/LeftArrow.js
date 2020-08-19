import React, { Component } from 'react';

class LeftArrow extends Component {
	render() {
		return (
			<button className='arrow backArrow' onClick={this.props.prevSlide}>
				<span>&#x3c;</span>
			</button>
		)
	}
}
export default LeftArrow;