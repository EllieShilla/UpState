import './App.css';
import React from 'react';

const LangName={
  eng:"Enaglish",
  rus:"Russian"
}
const abc=[
  {eng:'a',
    rus:'а'},
    {eng:'b',
    rus:'б'},
    {eng:'c',
    rus:'к'},
    {eng:'d',
    rus:'д'},
    {eng:'e',
    rus:'е'},

    {eng:'f',
    rus:'ф'},
    {eng:'g',
    rus:'жи'},
    {eng:'h',
    rus:'х'},
    {eng:'i',
    rus:'и'},
    {eng:'j',
    rus:'жей'},
    {eng:'k',
    rus:'к'},
    {eng:'l',
    rus:'л'},

    {eng:'m',
    rus:'ь'},
    {eng:'n',
    rus:'н'},
    {eng:'o',
    rus:'о'},
    {eng:'p',
    rus:'п'},
    {eng:'q',
    rus:'к'},
    {eng:'r',
    rus:'р'},
    {eng:'s',
    rus:'с'},

    {eng:'t',
    rus:'т'},
    {eng:'u',
    rus:'у'},
    {eng:'v',
    rus:'в'},
    {eng:'w',
    rus:'въ'},
    {eng:'x',
    rus:'кс'},
    {eng:'y',
    rus:'о'},
    {eng:'z',
    rus:'з'},
];


function ToRus(rusLang)
{
  rusLang=rusLang.split('');

  let str="";
  var arr;
  rusLang.forEach(function(j, i, rusLang) {
     arr= abc.filter(item=>item.eng.toLowerCase().includes(j));
     arr.map(function(i){
      str+=i.rus;
    });
  });

return str;
}

function ToEng(engLang)
{
  engLang=engLang.split('');

  let str="";
  var arr;
  engLang.forEach(function(j, i, engLang) {
     arr= abc.filter(item=>item.rus.toLowerCase().includes(j));
     arr.map(function(i){
      str+=i.eng;
    });
  });

return str;
}

function Translit(text,translit){
  return translit(text);
}

class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state={
    //   text:''
    // };
  }

  handleChange(e){
    //this.setState({text:e.target.value});
    this.props.onTextChange(e.target.value);

 }

 render(){
   const text=this.props.text;
  //const text=this.state.text;
   const language=this.props.language;
   return(
     <div className="App">
       <p>Введите текст {LangName[language]}:</p>
       <input value={text} onChange={this.handleChange}/>
     </div>
   )
 }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleRusChange=this.handleRusChange.bind(this);
    this.handleEngChange=this.handleEngChange.bind(this);
    this.state={
      text:'',
      language:'eng'
    }
  }

  handleRusChange(text){
     this.setState({language:"rus",text});
  }

  handleEngChange(text){
       this.setState({language:"eng",text});
  }

render(){
  const text=this.state.text;
  const language=this.state.language;
  const toEng=language==='rus'?Translit(text,ToEng):text;
  const toRus=language==='eng'?Translit(text,ToRus):text;

  return(
    <>
    <TextInput language="eng" text={toEng} onTextChange={this.handleEngChange}/>
    <TextInput language="rus" text={toRus} onTextChange={this.handleRusChange}/>
</>
  )
}
}

export default App;