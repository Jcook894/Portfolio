import { Line, Circle } from 'rc-progress';

var React = require('react');
var ReactDOM = require('react-dom');




ReactDOM.render(<div>
  <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
  <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
</div>, getElementById('Skills'));
