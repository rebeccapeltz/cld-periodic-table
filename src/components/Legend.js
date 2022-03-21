import React from 'react';
import '../styles/Legend.scss';

class Legend extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick = () => {
    console.log(this.props.data);
  };

  handleMouseOver(group) {
    this.props.handleMouseOver(group);
  }

  handleMouseOut() {
    this.props.handleMouseOut();
  }

  render() {
    return (
      <div className='legend'>
        <div className='classify aesthetic' data- onClick={this.handleClick}>
          aesthetic
        </div>
        <div className='classify attention' onClick={this.handleClick}>
          attention
        </div>
        <div className='classify audio' onClick={this.handleClick}>
          audio
        </div>
        <div className='classify audio-video' onClick={this.handleClick}>
          audio-video
        </div>
        <div className='classify custom' onClick={this.handleClick}>
          custom
        </div>
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
