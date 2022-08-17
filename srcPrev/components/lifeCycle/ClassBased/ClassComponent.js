// import React, { Component } from "react";

// class ClassComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       Employees: ["Ali", "Ahmad", "Ammar"],
//       myName: "",
//       empName: "Shahzaib",
//       newEmp: "",
//       showInput: false,
//     };
//   }
//   IncrementHandler = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   decrementHandler = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   onChangeHandler = (e) => {
//     this.setState({ myName: e.target.value });
//   };
//   updateHandler() {
//     this.setState({ showInput: true });
//     this.setState({ empName: this.state.newEmp });
//   }
//   render() {
//     return (
//       <>
//         {/* {document.title = `I'm clicked ${this.state.count} times`} */}
//         <h2>Hello Class Based Component</h2>

//         <hr />
//         <h5>Name: {this.state.myName}</h5>
//         <input
//           type="text"
//           placeholder="Type your name here"
//           onChange={this.onChangeHandler}
//         />

//         <hr />
//         <h3>Employees list</h3>
//         {this.state.Employees.map((val) => {
//           return <li>{val}</li>;
//         })}

//         <hr />
//         <h5>Count: {this.state.count}</h5>
//         {/* {console.log(this.state.count)} */}
//         <button onClick={() => this.IncrementHandler()}>Increment</button>
//         <button onClick={() => this.decrementHandler()}>Decrement</button>
//         <hr />
//         {/* <h4>Employee Name: {this.state.empName}</h4>
//         {console.log(this.state.empName)}
//         {this.state.showInput ? (
//           <input
//             type="text"
//             onChange={(e) => {
//               this.setState({ newEmp: e.target.value });
//             }}
//           />
//         ) : (
//           <button onClick={() => this.updateHandler()}>
//             Update Eemployee Name
//           </button>
//         )} */}
//       </>
//     );
//   }
// }

// export default ClassComponent;
