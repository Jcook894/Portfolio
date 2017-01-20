var React = require('react');
var Carousel = require('./Portfolio.jsx');

var Skills = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="headers">About Me </h1>
        <img className="img-circle" src="../assets/pic.JPG"></img>

        <p> Hey everyone! My name is Julian and im a junior Front-End Dev with dreams of becoming a Full-stack Developer! As well as making web sites, I love to playing video games and skateboard in my spare time.</p>

      <h1> Languages | Frameworks</h1>
      <p> HTML5, CSS3, Javascript, jQuery, Bootstrap</p>
      </div>

      );
  }
}) ;


module.exports = Skills;
