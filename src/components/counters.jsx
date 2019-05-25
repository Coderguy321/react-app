import React, { Component } from "react";
import Counter from "./counter"; //here because of the default ecport no curly braces

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 100 }]
  };
  render(props) {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
          >
            <h2>"this can be printed as this.props.childred"</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
