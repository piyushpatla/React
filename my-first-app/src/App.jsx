// Example1 - Normal JS Variable

// import React from "react";

// function App(){

//   let count = 0

//   function increase(){
//     count = count + 1
//     console.log(count)
//   }
//   return(
//     <div>
//       <h2>Count is {count} </h2>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// export default App


//Example 2 - useState is Hook React - Special variable In React Which stores  updated Value and update Screen As well

// import { useState } from "react";

// function App(){

//   const [count, setCount] = useState(0)

//   function add(){
//      setCount (count +1)
//     console.log(count)
//   }

//   return(
//     <div>
//       <h2>Count is {count}</h2>
//       <button onClick={add}>Add</button>
//     </div>

//   )
// }

// export default App


//Example 3 - Show Password and Hide the Password
// import { useState } from "react";

// function App(){

//   const[show, setShow]= useState(true)

//   return(
//     <div>
//       <input type= {show ? "text" : "password"}     placeholder="Enter Your Password"></input>
//       <button onClick={ ()=> setShow(!show) }>Show/Hide</button>
//     </div>
//   )

// }
// export default App

//Example 4 - write a code to create a InstaGram Follow button .when user click on Follow button, it  should change to unfollow and when useer click on unfollow button, it should change to follow

