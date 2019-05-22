import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: "100px",
    fontWeight: "bold",
    color: 134553
  };

  //Any data that this components needs
  state = {
    count: 2,
    imgUrl: "https://picsum.photos/200"
  };

  render() {
    //Below is a jsx expression which will get complied to
    //React.creteElement
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        {/* //class name is bootstrap components */}

        <span styles={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        {/* <h1>{this.state.count}</h1> */}
        <button className="b2 b2-secondary btn-sm">Increment</button>
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
