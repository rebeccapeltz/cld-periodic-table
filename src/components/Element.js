import React from 'react';
import '../styles/Element.scss';

class Element extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick() {
    console.log(this.props.data);
    window.open(`https://cloudinary.com/documentation/transformation_reference#${this.props.data.path}`, '_blank');
    // this.props.handleElementClick(this.props.data);
  }

  handleMouseOver(group) {
    this.props.handleMouseOver(group);
  }

  handleMouseOut() {
    this.props.handleMouseOut();
  }

  render() {
    if (this.props.data.name === 'Number') {
      return <div className='Element number'>{this.props.data.number}</div>;
    } else if (this.props.data.name === 'Blank') {
      return <div className='Element blank'></div>;
    } else {
      let classes = ['Element'];
      classes.push(this.props.data.class)
      if (this.props.highlight) {
        classes.push('highlight');
      }
      return (
        <div
          className={classes.join(' ')}
          onClick={this.handleClick}
          data-category={this.props.data.category}
        >
          <div className='number'>{this.props.data.number}</div>
          <div className='symbol'>{this.props.data.symbol}</div>
          <div className='line1'>{this.props.data.name}</div>
          <div className='line2'>
            {this.props.data.line2}
          </div>
        </div>
      );
    }
  }
}

export default Element;
