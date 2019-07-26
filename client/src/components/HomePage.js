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
                    color: 'white'
                }}
                >
                    <h1 className="display-4">Fantasy Tracker</h1>
                    <p className="lead">Manage your fantasy rosters. Track player performance. All in one place.</p>
                    <div><Button variant="primary" href='/teams'>View Teams</Button></div>
                </Jumbotron>

            </div>

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