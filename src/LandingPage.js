import React from 'react';
import './css/LandingPage.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
             <MuiThemeProvider>
              <Card>

                <CardMedia
                  overlay={<CardTitle title="CATCHPHRASE" subtitle="Overlay subtitle" />}
                >
                  <img id="headlinePicture" src="/img/uw.png" className="cover" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" icon={<ActionAndroid />} />
                  <FlatButton label="Action2" />
                  <FlatButton label="Action3" />
                </CardActions>
              </Card>
              </MuiThemeProvider>
            </div>
        )
    }
});

export default LandingPage;
