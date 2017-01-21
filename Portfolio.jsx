var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');

var hood = require('../assets/hood.png');
var reader = require('../assets/reader.png');
var frogger = require('../assets/frogger.png');
var sideScroller = require('../assets/sidescroller.png');
var webOpt = require('../assets/webOpt.png');
var resume  = require('../assets/reader.png');





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
