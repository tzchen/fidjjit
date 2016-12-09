import React from 'react';
import './css/LandingPage.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';
import Chat from 'material-ui/svg-icons/communication/forum';
import History from 'material-ui/svg-icons/action/history';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Testimonial from './Testimonial.js'

var LandingPage = React.createClass({
    render() {
        return(
          <div>
            <div className="container">
             <MuiThemeProvider>
              <Card>
                <CardMedia overlay={<CardTitle title="" subtitle="" />}>
                  <img id="headlinePicture" src="/img/mainHeader.png" className="cover" />
                </CardMedia>
                <CardTitle className="center" title="So What Exactly is Fidjjit?" subtitle="(pronounced fi-jit)" />
                <CardText>
                  <p id="small-text">
                  Fidjjit is a tool to help people visualize and understand information created by the popular social networking
                  site Twitter. Our goal is to help users discover new perceptions through manipulating existing tweet data
                  and displaying it in a unique and meaningful way.
                  <br/><br/>
                  </p>
                  <hr/>
                  <Container>
                  <Row>
                      <Col sm={4} >
                      <MuiThemeProvider>
                      <Testimonial
                        overlayTitle="Explore"
                        overlaySubtitle=""
                        description="Have you ever wondered where your fellow tweeters are tweeting from? Ever feel like you're living in a bubble? Come find out with our explore page!"
                        button={<Link className="link" activeClassName='active' to="/explore"> <RaisedButton className="button" label="Explore" icon={<Search />} /></Link>}
                      />
                      </MuiThemeProvider>
                      </Col>
                      <Col sm={4} >
                      <MuiThemeProvider>
                      <Testimonial
                        overlayTitle="Top Tweets"
                        overlaySubtitle=""
                        cardTitle=""
                        description="When was the last time you heard about Harambe? With Top Tweets, you can find out this week's hottest posts on any subject of your choice!"
                        button={<Link className="link" activeClassName='active' to="/topTweets"><RaisedButton className="button" label="Top Tweets" icon={<Chat />} /></Link>}
                      />
                      </MuiThemeProvider>
                      </Col>
                      <Col sm={4} >
                      <MuiThemeProvider>
                      <Testimonial
                        overlayTitle="Search History"
                        overlaySubtitle=""
                        cardTitle=""
                        description="Do you like facebook stalking and seeing what other people are searching on the internet? Then come check out our Search History page!"
                        button={<Link className="link" activeClassName='active' to="/searchHistory"><RaisedButton className="button" label="Search History" icon={<History />} /></Link>}
                      />
                      </MuiThemeProvider>
                      </Col>
                  </Row>
                  </Container>
                </CardText>
                <CardActions className="buttons">
                  <br/><br/>
                </CardActions>
              </Card>
              </MuiThemeProvider>
              {this.props.children}
            </div>
            <br/>
            <div className="container people">
            <h3 id="testimonialTitle">Testimonials</h3>
            <Container>
            <Row>
                <Col sm={6} >
                <MuiThemeProvider>
                <Testimonial
                  overlayTitle="Nika Lin"
                  image="/img/Person1.jpeg"
                  description="&quot;Fidjjit has so many different interesting uses and everytime I come here I learn something new!&quot;"
                />
                </MuiThemeProvider>
                </Col>
                <Col sm={6} >
                <MuiThemeProvider>
                <Testimonial
                  overlayTitle="Lee Sutton"
                  image="/img/Person2.jpg"
                  description="&quot;This site has definitely caught my eye. It's awesome to see data filtered down for easy comprehension.&quot;"
                />
                </MuiThemeProvider>
                </Col>
            </Row>
            </Container>
            </div>
          </div>


        )
    }
});

export default LandingPage;
