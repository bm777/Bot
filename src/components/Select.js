import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'text', label: 'Text' },
    { value: 'yn', label: 'Yes/No' },
    { value: 'options', label: 'Options' },
    { value: 'share', label: 'Share' } 
  ];
  
export default class SelectApp extends React.Component {

    render(){
      return (
          <div className="select_option">
            <Select options={options} placeholder="Type" />
          </div>

      );
    }
  }