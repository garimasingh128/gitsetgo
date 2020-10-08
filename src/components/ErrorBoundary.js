//Author:Shubham Rampurkar
//ErrorBoundary Component can be used anywhere as a boundary to catch errors and exceptions and display some HTML info
import React, { Component } from "react";

class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    console.log("HEllo");
    this.state = {hasError: false};
  }
  //This method works similar to catch statement and catches the arised error
  componentDidCatch(error, info){

    this.setState({hasError: true});
    console.log(error,info);

  }

  render(){
    if(this.state.hasError==true){
      return(
        <h1>User Not Found!!!</h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
