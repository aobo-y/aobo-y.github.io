import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import psImage from './images/ps-2.png'
import ccImage from './images/campuscontacts.png'
import tssImage from './images/tss.png'

const WORKS = [
  {
    name: 'This site',
    src: psImage,
    desc: 'This site is not only wriiten for introducing me to someone who concern, but also a playground for my web programming & design skills. So I may keep embedding some even unnescessary stuff here merely to for fun.\nThis site was originally written in vanilla HTML. With increasing web development experience, I rebuilt it with Gatsby and React as a monument of my growth in these years.'
  },
  {
    name: 'CampusContacts',
    src: ccImage,
    desc: 'CampusContacts is a mobile app of Yellow Pages for intra-organization contacts. It\'s designed to let smartphones directly access others\' contacts. Taking use of the contacts information, the app supports four native mobile functions: make phone call, send message, write email and add contact.\nThis app is based on the idea I brought up while working in Perugia University. I made it with Cordova and it is capable of crossing several platforms.'
  },
  {
    name: 'Table Status System',
    src: tssImage,
    desc: 'The system is my Bachelor honor project, which has won the silver award of HKEIA Innovation & Technology Project Competition in 2012.\nIt was developed with only one set of code but could run both as web and native app, which crossed all major desktop and mobile systems. It also achieved real-time synchronization among multiple clients with WebSocket. These ideas were quite new then, but very common now.'
  }
]

const Portfolio = () => {
  return (
    <section>
      <div className='work__banner'>
        <h3 className='work__banner__title'>Work Portfolio</h3>
      </div>
      <div className='section--white'>
        <Grid>
          {
            WORKS.map((work, index) => (
              <Row key={index} className='work__row'>
                <Col md={7}>
                  <Image responsive className='work__row__img' src={work.src} />
                </Col>
                <Col md={4} mdOffset={1}>
                  {work.name}
                  {work.desc.split('\n').map((s, index) =>
                    <p key={index} className='work__row__desc text-muted'>{s}</p>
                  )}
                </Col>
              </Row>
            ))
          }
        </Grid>
      </div>
    </section>
  )
}

export default Portfolio
