import React, { Component } from "react";

class Counter extends Component {
  //PASSING PROPS TO THE CONSTRUCTOR
  constructor(props) {
    super(props);
    //here we are returning a new function which will basically
    //have reference to the variable this
    // this.onClickhandle = this.onClickhandle.bind(this);
  }

  //Any data that this components needs
  state = {
    imgUrl: "https://picsum.photos/200",
    tags: [
      { id: "key1", value: "tagvalue" },
      { id: "key2", value: 2 },
      { id: "key", value: 100 }
    ]
  };

  //   onClickhandle() {
  //     this.setState({ count: this.state.count + 1 });
  //     // return console.log("button clicket count = " + this.state.count);
  //   }
  //   onClickhandle = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //passing an argument to the functino
  onClickhandle2 = product => {
    console.log(product);
  };

  styles = {
    fontSize: "100px",
    fontWeight: "bold"
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    let product = "testing_argument_passing";
    //Below is a jsx expression which will get complied to
    //React.creteElement
    return (
      <div>
        {/* {this.props.children} */}
        <span styles={this.styles} className={classes}>
          {this.formatCount(this.props.counter.value)}
        </span>
        <button
          onClick={() => this.props.onClickIncrement(this.props.counter)}
          className="b2 b2-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          DELETE
        </button>
      </div>
    );
  }
  formatCount = count => {
    console.log(count);
    return count === 0 ? "zero" : count;
  };
}

export default Counter;
