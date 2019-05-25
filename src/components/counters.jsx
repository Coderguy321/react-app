import React, { Component } from "react";
import Counter from "./counter"; //here because of the default ecport no curly braces

class Counters extends Component {
  //this is called after the render mentod
  componentDidMount() {
    //Basically used for making ajax calls to the server
    console.log("component mount");
  }
  render() {
    //OBJECT DESTRUCTURING
    const { resetHandle, counters, handleDelete, handleIncrememt } = this.props;
    return (
      <div>
        <button
          className="btn22 btn22-primary btn22-sm m-2"
          onClick={resetHandle}
        >
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            selected={true}
            counter={counter}
            onDelete={this.props.handleDelete}
            onClickIncrement={this.props.handleIncrememt}
          >
            <h2>"this can be printed as this.props.childred"</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
