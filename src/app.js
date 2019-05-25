import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { isTSThisType } from "@babel/types";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 2 }, { id: 3, value: 100 }]
  };

  onhandleDelete = counterId => {
    // this.state.counters.map(count => console.log(count));

    const countersFiltered = this.state.counters.filter(c => c.id != counterId);
    this.setState((this.state.counters = countersFiltered));
  };

  onhandleIncrememt = counter => {
    //this will return a copy of the array
    const countersCopy = [...this.state.counters];
    const index = countersCopy.indexOf(counter);
    countersCopy[index] = { ...counter };
    countersCopy[index].value++;
    this.setState((this.state.counters = countersCopy));
  };

  onResetHandle = () => {
    console.log("testing reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState((this.state.counters = counters));
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            resetHandle={this.onResetHandle}
            handleDelete={this.onhandleDelete}
            handleIncrememt={this.onhandleIncrememt}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
