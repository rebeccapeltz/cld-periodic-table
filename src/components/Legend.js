import React from 'react';
import '../styles/Legend.scss';

class Legend extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick() {
    this.props.handleElementClick(this.props.data);
  }

  handleMouseOver(group) {
    this.props.handleMouseOver(group);
  }

  handleMouseOut() {
    this.props.handleMouseOut();
  }

  render() {
    return (
      <div className='legend'>
        <div className='classify aesthetic'>aesthetic</div>
        <div className='classify attention'>attention</div>
        <div className='classify audio'>audio</div>
        <div className='classify audio-video'>audio-video</div>
        <div className='classify custom'>custom</div>
        <div className='classify effect'>effect</div>
        <div className='classify layer'>layer</div>
        <div className='classify optimization'>optimization</div>
        <div className='classify photoshop'>photoshop</div>
        <div className='classify resize'>resize</div>
        <div className='classify sprite'>sprite</div>
        <div className='classify template'>template</div>
      </div>
    );
  }
}

export default Legend;
