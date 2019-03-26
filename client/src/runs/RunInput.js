import React, { Component } from 'react';

import uuid from 'uuid';
import { addRun } from '../actions/runActions.js';

class RunInput extends Component {

  state = {
    course: '',
    distance: '',
    time: '',
    review: '',
    rating: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleTextAreaChange = (event) => {
    this.setState({
      ...this.state, review: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const run = {...this.state, id: uuid() };

    this.props.addRun(run);
    this.setState({
      course: '',
      distance: '',
      time: '',
      review: '',
      rating: ''
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="course"
          value={this.state.course}
          placeholder="course"
        />
        <br />
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="distance"
          placeholder="distance"
        />
        <br />
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="time"
          placeholder="time"
        />
        <br />
        <textarea
          onChange={(event) => this.handleOnChange(event)}
          name="review"
          value={this.state.review}
          placeholder="Please write a review"
        />
        <br />
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="rating"
          placeholder="rating"
        />
        <br />
        <input type="submit" />
      </form>
    )
  }

}

export default RunInput;