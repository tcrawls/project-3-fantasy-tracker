import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import BgImage from '../background-image-field.jpg'


export default class HomePage extends Component {

    render() {
        return (



            <div>
                <Jumbotron style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
                >
                    <h1 className="display-4">Fantasy Tracker</h1>
                    <p className="lead">Manage your fantasy rosters. Track player performance. All in one place.</p>
                    <a class="waves-effect waves-light btn-large" href='/teams'>Get Started</a>
                </Jumbotron>
            </div>


            /* <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                  <div class="container">
                    <br></br>
                    <h1 class="header center teal-text text-lighten-2">Fantasy Tracker</h1>
                    <div class="row center">
                      <h5 class="header col s12 light">Manage your fantasy rosters. Track player performance. All in one place.</h5>
                    </div>
                    <div class="row center">
                      <a href="/teams" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                    </div>
                    <br></br>
                  </div>
                </div>
                <div class="parallax"><img src="../background-image-field.jpg" alt="Football field background image"/></div>
              </div> */


            // <div className="homepage-body">
            //     <h1 className="display-4">Fantasy Tracker</h1>
            //     <p className="lead">Manage your fantasy rosters. Track player performance. All in one place.</p>
            //     {/* <hr className="my-4"></hr> */}
            //     {/* <p>Some text included here</p> */}
            //     <div><Button variant="primary" href='/teams'>View Teams</Button></div>
            // </div>

        )
    }
}