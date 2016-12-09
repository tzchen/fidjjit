import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './css/Testimonial.css'

var Testimonial = React.createClass({
  render:function() {

    return(
    <Card className="testimonials">
      <CardMedia
        overlay={<CardTitle title={this.props.overlayTitle} subtitle={this.props.overlaySubtitle} />}
      >
      <img className="picture cover" src={this.props.image} />
      </CardMedia>

      <CardText>
        <p className="description">
        {this.props.description}
        </p>
        <br/><br/>
        {this.props.button}
      </CardText>
    </Card>

  )},
});

export default Testimonial;
