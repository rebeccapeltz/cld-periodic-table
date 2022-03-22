import React from 'react';
import '../styles/PeriodicTable.scss';
import Legend from './Legend';
import Element from './Element';

import data from '../data/transformations.json';
const elements = data.elements;

function PeriodicTable() {
    let classes = ['PeriodicTable'];

    return (
      <div>
        <Legend/>
        <div className={classes.join(' ')}>
          <div className='elements'>
            {elements.map((element) => (
              <Element key={element.number} data={element} />
            ))}
          </div>
        </div>
      </div>
    );
  }
// }
export default PeriodicTable;
