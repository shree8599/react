
// learning props

// these method is done without destructuring
// const Greet = (props) => {
//   return (
//     <div>
//         <h1>Hello {props.name} is a {props.role} </h1>
//         {
//             props.children
//         }
//     </div>
//   )
// }

// // these method is done with destructuring
// const Greet = ({name, role, children}) => {
//   return (
//     <div>
//          <h1>Hello {name} is a {role} </h1>
//         {children}
//     </div>
//   )
// }



// export default Greet

export const Greet = ({isLoggedin}) => {
   if (isLoggedin) {
        return <h1>Welcome back</h1>;
      }else {
        return <h1>Please sign in </h1>
      }

}


