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
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    // this.state = {backgroundColor: "green"}
    this.state = {backgroundColor: "green"}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // this.setState({backgroundColor: "blue"})
    this.setState(state => {
      if(state.backgroundColor === "blue"){
        return {backgroundColor: "green"}
      }
      else if(state.backgroundColor === "green") {
        return {backgroundColor: "blue"}
      }
    })
  }
  render() {
    if(this.state.backgroundColor){
      return(<div style={{backgroundColor: this.state.backgroundColor , height:"100vh", paddingTop: '20rem'}}><button onClick={this.handleClick} className="btn">Click Me</button></div>)
    }
    // else{
    //   return(<div style={{backgroundColor: this.state.backgroundColor , height:"100vh"}}><button onClick={this.handleClick} className="btn">Click Me1</button></div>)
    // }
    
    // return (
    //   <div style={{backgroundColor: this.state.backgroundColor , height:"100vh"}}><button onClick={this.handleClick} >Click Me</button></div>
    // )
  }
}

