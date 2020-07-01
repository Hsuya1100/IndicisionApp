import React from 'react';
import logo from './logo.svg';
import './App.css';

class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleShow = this.handleToggleShow.bind(this);
        this.state = {
          visibility : false
        }
    }
    handleToggleShow() {
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
    }
    render() {
      return (
        <div>
          <p>show</p>
          <button onClick={this.handleToggleShow}>{this.state.visibility? 'Hide details':'show details'}</button>
          {this.state.visibility && (
            <div>
              <p>Hey ! These Are Some of The Details</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default VisibilityToggle;