import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Me = () => {
  return (
    <section id='section-about' className='section--blue section__me'>
      <Grid>
        <Row>
          <Col md={2} mdOffset={1} className='text-center'>
            <h3 className='section__me__header'>ME</h3>
          </Col>
          <Col md={6}>
            <p>
              I am a software engineer, who is interested in both computing theoretical knowledge and practical skills.
              I have already had years experience in software development across web, mobile, and database. My major focus now is tightly tied with Javascript
            </p>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export default Me
