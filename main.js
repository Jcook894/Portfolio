var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./Portfolio.jsx');
var AboutMe = require('./app.jsx');


ReactDOM.render(<Carousel />
, document.getElementById('Portfolio'));

ReactDOM.render(
  <AboutMe />,
  document.getElementById('About')
);
