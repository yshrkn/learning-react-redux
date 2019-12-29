import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor='bar'>bar</label>
//       <input id='bar' type='text' onChange={() => {console.log("I am clicked!")}} />
//     </React.Fragment>
//   );
// }

// class comp[onent
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor='bar'>bar</label>
//         <input id='bar' type='text' onChange={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     );
//   }
// }

// functional component
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
