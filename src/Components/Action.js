import React from 'react';
// import 'normalize.css/normalize.css';
// import '../Styles/styles.scss';
const Action = (props) => 
(
  <div className="container">
      <button 
        className="big_button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      > What I do
      </button>
    </div>
)

  export default Action;

