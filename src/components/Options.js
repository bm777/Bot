import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
  <div className="widget-header">
  <h3 className="widget-header__title">Questions</h3>
    <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
    
    
    </div>
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    {props.options.length === 0 && <p className="widget__message">Please add questions for the bot to get ask!</p>}
  </div>
);

export default Options;
