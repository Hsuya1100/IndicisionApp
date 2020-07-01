import React from 'react';
// import './App.css';

import  Action from './Components/Action.js';
import  AddOptions from './Components/AddOptions.js';
import  Options from './Components/Options.js';
import  Header from './Components/Header.js';
import  OptionModal from './Components/OptionModal.js';
import 'normalize.css/normalize.css';
import './Styles/styles.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.handleDeleteOptions   = this.handleDeleteOptions.bind(this);
    this.handlePick            = this.handlePick.bind(this);
    this.handleAddOptions      = this.handleAddOptions.bind(this);
    this.handleDeleteOption    = this.handleDeleteOption.bind(this);
    this.handleClear           = this.handleClear.bind(this);
    this.state = {
      options : [],
      selectedOption : undefined
    }
  }
  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options != null)
        this.setState( ()=> ({options:options}))
    }catch(e){
      // do nothing
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if( prevState.options.length != this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  componentWillUnmount() {
    console.log("unmount")
  }

  // passing functions
  handleDeleteOptions () {
    this.setState( ()=> ({options:[]}) );
  }
  handlePick() {
    const randNum = Math.floor((Math.random() * this.state.options.length ));
    const option  = this.state.options[randNum];
    this.setState( () => ({selectedOption:option}))
    // alert(option);
  }
  handleClear() {
    this.setState( ()=> ({selectedOption:undefined}));
  }

  handleAddOptions(option) {
    if(!option) {
      return 'Enter valid value to add item';
    }else if (this.state.options.indexOf(option) > -1)
      return 'Value Already Exists'

    this.setState( (prevState) => (
      {
      options: prevState.options.concat([option])
      })
    )
  }
  handleDeleteOption(deloption) {
    this.setState( (prevState) => {
      return(
        {
          options : prevState.options.filter( (option) =>{
              return (option != deloption);
          })
        }
      )
    })
  }
  render() {
    const title = 'Indicision App';
    return (
      <div className="App">
        <Header title={title} />
        <div className="app__body">
          <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        
          <div className="container widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOptions 
              handleAddOptions={this.handleAddOptions}
            />
          </div>
        </div>
        
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClear={this.handleClear}
        />
      </div>
      
    )
  }
}

// functions.defaultProps = {
//   options:[]
// }
export default App;