var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');

const Slider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <div>
        <h1>Featured Work</h1>
      <Carousel>
        <img src="../assets/hood.png" className="img-responsive"/>
        <img src="../assets/reader.png" className="img-responsive"/>
        <img src="../assets/frogger.png" className="img-responsive"/>
        <img src="../assets/sidescroller.png" className="img-responsive"/>
        <img src="../assets/webOpt.png" className="img-responsive"/>
        <img src="../assets/hood.png" className="img-responsive"/>
        <img src="../assets/resume.png" className="img-responsive"/>
      </Carousel>
      </div>
    )
  }
});

module.exports = Slider;
