import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'

const EXPERIENCES = [
  {
    position: 'Software Engineer',
    organization: 'Aftership Ltd',
    location: 'Hong Kong',
    duration: 'Jul 2015 - Now',
    desc: 'Lead the web development'
  },
  {
    position: 'Software Engineer',
    organization: 'Harmonic Inc',
    location: 'Hong Kong',
    duration: 'Aug 2014 - Jul 2015',
    desc: 'Built the RESTful API and web portal of the customer cloud system'
  },
  {
    position: 'Graduate Trainee',
    organization: 'PCCW Solutions',
    location: 'Hong Kong',
    duration: 'Aug 2012 - Jan 2014',
    desc: 'Handled data conversion for the system of Social Security Department, HKSAR Government'
  },
  {
    position: 'Developer Intern',
    organization: 'Perugia University',
    location: 'Italy',
    duration: 'Jun 2012 - Aug 2012',
    desc: 'Built cross-platform mobile applications in web technologies, with Cordova and jQuery'
  },
  {
    position: 'Placement',
    organization: 'HSBC',
    location: 'Hong Kong',
    duration: 'May 2010 - May 2011',
    desc: 'Delivered programs for the visualization of enterprise architecture data'
  }
]

const MAIN_SKILLS = [
  {name: 'Javascript', progress: 80},
  {name: 'Python', progress: 50},
  {name: 'Photoshop', progress: 65}
]

const SKILLS = [
  'Node.js',
  'React',
  'Redux',
  'Java',
  'C',
  'Express',
  'Koa',
  'D3',
  'AngularJS',
  'Electron',
  'Cordova',
  'Docker',
  'Socket.io',
  'MongoDB'
]

const ResumeRow = ({ label, title, org, date, desc }) => {
  return (
    <Row className='resume__row'>
      <Col md={3} className='text-center'>
        {label && <h4 className='section__resume__header'>{label}</h4>}
      </Col>
      <Col md={6} className='resume__title'>
        {title}
        <br />
        <i>{org}</i>
      </Col>
      <Col md={3} className='resume__date'>
        {date}
      </Col>
      {
        desc &&
          <Col md={6} mdOffset={3}>
            <p className='text-muted'>
              {desc}
            </p>
          </Col>
      }
    </Row>
  )
}

ResumeRow.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  org: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  desc: PropTypes.string
}

const Resume = () => {
  return (
    <section id='section-resume' className='section--white'>
      <Grid>
        <ResumeRow
          label='EDUCATION'
          title='Bachelor of Science in Computing Studies'
          org='Hong Kong Baptist University'
          date={
            <span>
              Sep 2007 - May 2012
              <br />
              <span className='text-muted'>Job placement in 2010</span>
            </span>
          }
        />
        <hr />
        {
          EXPERIENCES.map((exp, index) => (
            <ResumeRow
              key={index}
              label={index === 0 ? 'JOB' : null}
              title={exp.position}
              org={`${exp.organization}, ${exp.location}`}
              date={exp.duration}
              desc={exp.desc}
            />
          ))
        }
        <hr />
        <ResumeRow
          label='AWARD'
          title='Silver Award'
          org='HKEIA Innovation & Technology Project Competition'
          date='Nov 2012'
          desc='Held by Hong Kong Electronic Industries Association and aims to recognize and reward bachelor or higher diploma graduates of electronic engineering or related engineering fields with outstanding projects demonstrating excellence in technology and innovation'
        />
        <hr />
        <Row>
          <Col md={3} className='text-center'>
            <h4 className='section__resume__header'>SKILL</h4>
          </Col>
          <Col md={7}>
            {MAIN_SKILLS.map((skill, index) => (
              <div key={index} className='resume__progress-bar'>
                {skill.name}
                <ProgressBar striped now={skill.progress} />
              </div>
            ))}
          </Col>
          <Col md={7} mdOffset={3}>
            {SKILLS.map((skill, index) =>
              <div key={index} className='resume__skill-tag'>{skill}</div>)
            }
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export default Resume
