import React, { Component } from 'react';
import { Grid, Col, Row, Jumbotron, Button, Well } from 'react-bootstrap';

import { TopNav, Footer } from './TopNav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Grid>
          <Row>
            <Col>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4} xsOffset={3} mdOffset={1}>
              <h2>Breadth</h2>
              <p> I love learning new technologies, getting my hands dirty, and witness its potential for myself.</p>
              <p>I am a unique problem solver due to a variety of experiences; ranging from leadership, to research.</p>
            </Col>
            <Col xs={6} md={4} xsOffset={6} mdOffset={1}>
              <h2>Depth</h2>
              <p> I love diving in deep into a topic, accumulating an unshakeable mental model of it.</p>
              <p>I am a generalist, capable of being specialist when necessary, whilst melding cross-domain knowledge to aid in problem solving.</p>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Well>Well,</Well>
            </Col>
            <Col xs={6} md={4}>
              <Well>Well,</Well>
            </Col>
            <Col xsHidden md={4}>
              <Well>Well,</Well>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
              <Well>Well,</Well>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <Well>Well,</Well>
            </Col>
            <Col md={6} mdPull={6}>
              <Well>Well.</Well>
            </Col>
          </Row>

          <Row>
            <Col>
              <Footer/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
