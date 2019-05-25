import React, { Component } from "react";
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           <h4>{this.props.totalCount}</h4>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;

//STATELESS FUNCTION COMPONENT SFC
//Here object destructuring is possible
//that is in place of props we can use the variable name itself
//eg ------
//const Navbar = ({totalCount}) => {} can be used here
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <h4>{props.totalCount}</h4>
      </a>
    </nav>
  );
};

export default Navbar;
