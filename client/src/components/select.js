import React, { Component } from 'react';
import '../App.css'

class SelectWay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data : 'shabi',
        value: 'by name'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert( this.state.value);
      event.preventDefault();
    }

    show = () => {
    if (this.props.onSubmit) {
      const { data } = this.state
      this.props.onSubmit({data})
    }
    this.setState({ data: "dahsabi" })
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <p/>
            Please select the sorting way&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="name">filtering by name</option>
              <option value="stars">sorting by stars</option>
              <option value="price">sorting by price</option>
              <option value="distance">sorting by distance</option>
            </select>
          </label>&nbsp; &nbsp;  
          <input type="submit" value="query" />
        </form>
      );
    }
  }
export default SelectWay  