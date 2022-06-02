// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      Akhona
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "green", count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState((state) => { 
      if(state.count <= 0){
        return 0;
      }
      else{
      return {count: state.count - 1} 
    }});
  }

  handleClick() {
    this.setState((state) => {
      if (state.backgroundColor === "blue") {
        return { backgroundColor: "green" };
      } else if (state.backgroundColor === "green") {
        return { backgroundColor: "blue" };
      }
    });
  }

  render() {
    if (this.state.backgroundColor) {
      return (
        <div
          style={{
            backgroundColor: this.state.backgroundColor,
            height: "100vh",
            paddingTop: "20rem",
          }}
        >
          <h1>{this.state.count}</h1>
          <button onClick={this.increment} className="btn" >
            Counter-Plus
          </button><br />
          <button onClick={this.handleClick} className="btn">
            Background
          </button><br />
          <button onClick={this.decrement} className="btn">
            Counter-Minus
          </button>
        </div>
      );
    }
  }
}
