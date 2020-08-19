import React, { Component } from 'react';
import './App.css';
import data from './data';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: data.length,
      imageCounter: { 1: 1, 2: 0, 3: 0, 4: 0 }
    };
  }

  // Changes activeIndex in state when backward arrow is pushed
  prevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }
    this.setState({
      activeIndex: index,
    });
  }

  // Changes activeIndex in state when forward arrow is pushed
  nextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index === length - 1) {
      index = 0
    }
    else {
      index++;
    }
    this.setState({
      activeIndex: index,
    });
  }

  // Updates the imageCounter in state every time that state is changed by one of the arrow buttons
  componentDidUpdate(prevProps, prevState) {
    let count = this.state.imageCounter;
    let index = this.state.activeIndex;
    if (prevState.activeIndex !== index) {
      count[index + 1] = count[index + 1] + 1;
      this.setState({
        imageCounter: count
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='slideShow'>
          <div className="slide" style={{ backgroundImage: `url(${data[this.state.activeIndex].image})` }}>
            <LeftArrow
              prevSlide={() => this.prevSlide()}
            />
            <div className="counter">
              {this.state.imageCounter[this.state.activeIndex + 1]}
            </div>
            <RightArrow
              nextSlide={() => this.nextSlide()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;


