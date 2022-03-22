import React from 'react';
import '../styles/Element.scss';

function Element(props) {
  function handleClick() {
    window.open(
      `https://cloudinary.com/documentation/transformation_reference#${props.data.path}`,
      '_blank'
    );
  }

  if (props.data.name === 'Number') {
    return <div className='Element number'>{props.data.number}</div>;
  } else if (props.data.name === 'Blank') {
    return <div className='Element blank'></div>;
  } else {
    let classes = ['Element'];
    classes.push(props.data.class);
    if (props.highlight) {
      classes.push('highlight');
    }
    return (
      <div
        className={classes.join(' ')}
        onClick={handleClick}
        data-classify={props.data.class}
      >
        <div className='number'>{props.data.number}</div>
        <div className='symbol'>{props.data.symbol}</div>
        <div className='line1'>{props.data.name}</div>
        <div className='line2'>{props.data.line2}</div>
        <div className='overlay'>
          <div className='text'>{props.data.name}</div>
        </div>
      </div>
    );
  }
}

export default Element;
