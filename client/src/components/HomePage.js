import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import BgImage from '../background-image-field.jpg'


export default class HomePage extends Component {

    render() {
        return (
            <Jumbotron style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: 'cover',
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                height: '600px',
            }}
            >
                <h1 className="display-4">Fantasy HQ</h1>
                <p className="lead">Manage fantasy rosters. Track player performance. All in one place.</p>
                <a class="waves-effect waves-light btn-large" href='/teams'>Get Started</a>
            </Jumbotron>
        )
    }
}