var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');






const Slider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {

    return (
      <div>

        <h2 className="headers">Featured Work</h2>
      <Carousel>
        <img src="../assets/hood.png"/>
        <img src="../assets/resume.png"/>
        <img src="../assets/sideScroller.png"/>
        <img src="../assets/frogger.png"/>
        <img src="../assets/reader.png"/>
        <img src="../assets/webOpt.png"/>


      </Carousel>
      </div>
    )
  }
});

module.exports = Slider;
