var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');

var hood = '../assets/hood.png';
var reader = '../assets/reader.png';
var frogger = '../assets/frogger.png';
var sideScroller = '../assets/sidescroller.png';
var webOpt = '../assets/webOpt.png';
var resume  = '../assets/reader.png';





const Slider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {

    return (
      <div>

        <h2 className="headers">Featured Work</h2>
      <Carousel>
        <img src={hood}/>
        <img src={reader}/>
        <img src={frogger}/>
        <img src={sideScroller}/>
        <img src={webOpt}/>
        <img src={resume}/>
      </Carousel>
      </div>
    )
  }
});

module.exports = Slider;
