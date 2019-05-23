import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    //here we are returning a new function which will basically
    //have reference to the variable this
    this.onClickhandle = this.onClickhandle.bind(this);
  }

  //   onClickhandle() {
  //     this.setState({ count: this.state.count + 1 });
  //     // return console.log("button clicket count = " + this.state.count);
  //   }
  onClickhandle = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //passing an argument to the functino
  onClickhandle2 = product => {
    console.log(product);
  };

  styles = {
    fontSize: "100px",
    fontWeight: "bold",
    color: 134553
  };

  //Any data that this components needs
  state = {
    count: this.props.value,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2"]
  };

  render() {
    console.log(this.props);
    //if you don't want a constant use let
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    let product = "testing_argument_passing";
    //Below is a jsx expression which will get complied to
    //React.creteElement
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        {/* //class name is bootstrap components */}
        <span styles={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        {/* <h1>{this.state.count}</h1> */}(
        <button onClick={this.onClickhandle} className="b2 b2-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.onClickhandle2(product)}
          className="b2 b2-secondary btn-sm"
        >
          Argument passiing test
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag.id}>{tag}</li>
          ))}
        </ul>
      </div>

      //here if you don't want a div inside this
      //   <ReactFragment>
      //     <h1>Hello!</h1>
      //     <button>Increment</button>
      //   </ReactFragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h2>zero</h2> : count;
  }
}

export default Counter;
