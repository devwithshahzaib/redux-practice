import React from "react";
import "./App.css";
// import ClassLifeCycle from "./components/lifeCycle/ClassBased/ClassLifeCycle";
// import FunctionalLifeCycle from "./components/lifeCycle/FunctionBased/FunctionalLifeCycle";
// import { BrowserRouter as Router } from "react-router-dom";
// import Nav from "./components/routingPractice/nav/Nav";
// import Routing from "./routng/Routing";
// import ClassComponent from "./components/lifeCycle/ClassBased/ClassComponent"
// import FunctionalComponent from "./components/lifeCycle/FunctionBased/FunctionalComponent";
// import { useFetchStudents } from "./customHooks/useFetchStudents";
// import { useFetchProducts } from "./customHooks/useFFetchProducts";
function App() {
  // const [students, setStudents] = useFetchStudents();
  // const [products, loader] = useFetchProducts();
  // console.log( products.map((productItem)=>{
  //  return console.log(productItem)
  //  }))
  // if(loader){
  //   return <div>Loading...</div>
  // }
  console.log("hello")
  return (
    <>
    App
      {/* Routing and ClassVfunctional Components here */}

      {/* <Router>
        <Nav />
        <Routing />
      <hr />
      </Router> */}
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}

      {/* React Life Cycle of Class and Functional Components here */}
      {/* <ClassLifeCycle/> */}
      {/* <FunctionalLifeCycle/> */}
      {/* {students.map((val, index) => {
        return  (
          <>

          <p>{val.name}</p>
          <p>{val.age}</p>
          </>
        )
        ;
      })} */}
      {/* {setStudents(students.pop())}
      {console.log(students)}  */}

      {/*Api*/}
      {/* {products.map((item) => {
        return (
          <>
            <img style={{ width: 100 }} src={item.image} alt={item.title} />
            <h6>{item.title}</h6>
            <p>Price: {item.price}</p>
            <hr />
          </>
        );
      })} */}



      
    </>
  );
}

export default App;
