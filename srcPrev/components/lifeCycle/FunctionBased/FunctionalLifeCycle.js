// import React, { useState, useEffect } from "react";

// function FunctionalLifeCycle() {
//   const [date, setDate] = useState(new Date().toISOString());

//   useEffect(() => {
//     console.log("component did Mount >> useEffect with empty array");
//   }, []);
//   useEffect(() => {
//     return console.log(
//       "component will Unmount >> useEffect return with empty array"
//     );
//   }, []);
//   useEffect(() => {
//     console.log(
//       "state changed or update WillReceiveProps >> useEffect return with dependencies array"
//     );
//   }, [date]);
//   useEffect(() => {
//     console.log("Component Did Update >>useEffect with No Array Parameter");
//   });
//   return (
//     <div>
//       {console.log("Render Called")}
//       <h5> FunctionalLifeCycle</h5>

//       <strong>{date}</strong>
//     </div>
//   );
// }

// export default FunctionalLifeCycle;
