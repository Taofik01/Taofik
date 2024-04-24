import './styles.scss';
import React from 'react'

export default function PageHeaderContent(props) {

    const {headerText, icon } = props;
  return (
    <div className='wrapper'>
      <h2 className='wrapper_text'>{headerText}</h2>
      <span className='wrapper_icon'>{icon}</span>
    </div>
  );
};
