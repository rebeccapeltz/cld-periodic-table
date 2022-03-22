import React from 'react';
import '../styles/Legend.scss';

function Legend(){
  const handleClick = (e) => {
    const classify = e.target.getAttribute('data-classify')
    let elements = document.getElementsByClassName(classify);
  
    for (let element of elements){
      if (element.classList.contains('highlight')) {
        element.classList.remove('highlight')
      } else {
        element.classList.add('highlight')
      }
    }
  };


    return (
      <div className='legend'>
        <div
          className='classify aesthetic'
          data-classify='aesthetic'
          onClick={handleClick}
        >
          aesthetic
        </div>
        <div
          className='classify attention'
          data-classify='attention'
          onClick={handleClick}
        >
          attention
        </div>
        <div
          className='classify audio'
          data-classify='audio'
          onClick={handleClick}
        >
          audio
        </div>
        <div
          className='classify audio-video'
          data-classify='audio-video'
          onClick={handleClick}
        >
          audio-video
        </div>
        <div
          className='classify custom'
          data-classify='custom'
          onClick={handleClick}
        >
          custom
        </div>
        <div
          className='classify effect'
          data-classify='effect'
          onClick={handleClick}
        >
          effect
        </div>
        <div
          className='classify layer'
          data-classify='layer'
          onClick={handleClick}
        >
          layer
        </div>
        <div
          className='classify optimization'
          data-classify='optimization'
          onClick={handleClick}
        >
          optimization
        </div>
        <div
          className='classify photoshop'
          data-classify='photoshop'
          onClick={handleClick}
        >
          photoshop
        </div>
        <div
          className='classify resize'
          data-classify='resize'
          onClick={handleClick}
        >
          resize
        </div>
        <div
          className='classify sprite'
          data-classify='sprite'
          onClick={handleClick}
        >
          sprite
        </div>
        <div
          className='classify template'
          data-classify='template'
          onClick={handleClick}
        >
          template
        </div>
      </div>
    );
  }


export default Legend;
