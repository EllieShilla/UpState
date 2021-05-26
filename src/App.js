import './App.css';
import React from 'react';


function translit()
{
let abc={
  'a':'а',
  'b':'б',
  'c':'к',
  'd':'д'
};
document.getElementById("trns").innerHTML="dfdf";
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      text:''
    };
  }

  handleChange(e){
    // this.setState({text:e.target.value});
    this.props.onTextChange(e.target.value);

  }
  
 render(){
   const text=this.props.text;
   const another=this.props.another;
   return(
     <div>
       <p id="trns"></p>
     </div>
   )
 }
}

export default App;