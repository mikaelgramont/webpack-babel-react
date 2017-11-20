import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

// This will go fetch the "compiled" version of the image, copied over from src to dist.
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));