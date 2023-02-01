import React, { Component } from "react";
import ReactDOM from 'react-dom';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const name = "Learner";
 
const element = <h1>Hello, { name }. Build Bank Application to Learn ReactJS.</h1>;

class App extends Component {
  render() {
    // return (
    // <div>
    //   <h1>Hello, Learn ReactJS by Building Bank Application</h1>
    // </div>
    // );
    return (ReactDOM.render(
      element,
      document.getElementById("root")
  ));
  }
}

export default App;