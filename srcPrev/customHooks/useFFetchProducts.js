// import { useState, useEffect } from "react";
// export function useFetchProducts() {
//   const [products, setProducts] = useState([]);
//   const [loader, setLoader] = useState(false);
//   async function fetchProducts  () {
//     setLoader(true)
//     try{

//       let productRes = await fetch("https://fakestoreapi.com/products");
//       let Allproducts = await productRes.json();
//       setProducts(Allproducts);
//     }catch(err){
//       console.log(err)
//     }
//     finally{
//       setLoader(false)
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return [products,loader];
// }
