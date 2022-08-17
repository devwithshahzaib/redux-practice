// import { logDOM } from "@testing-library/react";
// import React, { useState } from "react";

// function FunctionalComponent() {
//   const [Employees, setEmployees] = useState(["Ali", "Ahmad", "Ammar"]);
//   const [myName, setMyName] = useState(" ");
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <h2>Hello Functional Component</h2>

//       <hr />
//       <h5>Name: {myName || "Text Will Show here"}</h5>
//       {/* {console.log(myName)} */}
//       <input
//         type="text"
//         placeholder="Type your name here "
//         onChange={(e) => setMyName(e.target.value)}
//       />

//       <hr />
//       <h3>Employee List</h3>
//       <ol>
//         {Employees.map((name) => {
//           return (
//             <li>{name}</li>
//             )
//         })}
//       </ol>

//       <hr />
//       <h5>Count: {count}</h5>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//     </>
//   );
// }

// export default FunctionalComponent;
