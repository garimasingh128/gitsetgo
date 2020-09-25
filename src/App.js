import React, { Component, PropTypes } from "react";
//import logo from './logo.svg';
import "./App.css";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";


const ref = React.createRef();


export default class App extends Component {
  constructor(props) {
    super(props);
  }

   printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  
  render() {
    return (<div className="App">

      <Header/>
     

       <Profile/>
        
      
      <Footer>
     
      </Footer>
      
        {/* <Header />
         
     <div id="divToPrint" className="mt4" >
    
      <Profile />
      
      </div>
    
      
      <Footer/>
       <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      */}
    </div>);
  }
}

