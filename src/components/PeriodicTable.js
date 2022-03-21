import React from 'react';
import '../styles/PeriodicTable.scss';
import Legend from './Legend';
import Element from './Element';

import data from '../data/transformations.json';
const elements = data.elements;

class PeriodicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formatted_elements: [],
    };

  

  }

  componentDidMount() {
    this.setState({
      formatted_elements: elements,
    });
  }

  render() {
    let classes = ['PeriodicTable'];

    return (
      <div>
        <Legend/>
        <div className={classes.join(' ')}>
          <div className='elements'>
            {this.state.formatted_elements.map((element) => (
              <Element key={element.number} data={element} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PeriodicTable;
