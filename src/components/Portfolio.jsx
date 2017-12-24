import React from 'react'
import psImage from './images/ps-2.png'
import ccImage from './images/campuscontacts.png'
import tssImage from './images/tss.png'

const WORKS = [
  {
    name: 'This site',
    src: psImage,
    desc: 'Of course, as a programmer, I made my personal website myself. This site is not only wriiten for introducing me to someone who concern, but also a practice to show my web programming & design skills. Therefore, I may keep embedding some even unnescessary functions or animations here merely to see if I can do something like that or have fun myself. I used jQuery and Bootstrap for this. Since it\'s a responsive web site, I strongly wish you could browse it in your mobile phone or tablet to help me check its performance.'
  },
  {
    name: 'CampusContacts',
    src: ccImage,
    desc: 'CampusContacts is a mobile app of Yellow Pages for intra-organization contacts. It\'s designed to let smartphones directly access others\' open contacts instead of through any other medias. The app supports four native functions of phone to take use of the contacts information: make phone call, send message, write email and add contact.\nThis app is based on the idea I brought up while working in Perugia University, so the sample organization in the app is a dummy university. I made my app with PhoneGap and thus I wish it may cross several platforms. However, I only tested in Android so far.'
  },
  {
    name: 'Table Status System',
    src: tssImage,
    desc: 'This is a ‘Software as a Service’ version of catering management system determined to reduce the technical requirements, costs and risks of traditional catering industry to use IT to optimize their working flow.\nI built the system in Flex so that it’s able to run across desktops, tablets, and mobile phones. The system is my personal honour project which help me won the silver award of HKEIA Innovation & Technology Project Competition in 2012.'
  }
]

const Portfolio = () => {
  return (
    <section>
      <div className='work-banner'>
        <h3 className='work-banner__title'>Work Portfolio</h3>
      </div>
      <div className='work-sample' style={{backgroundColor: '#ffffff'}}>
        <div className='container'>
          {
            WORKS.map((work, index) => (
              <div key={index} className='row'>
                <div className='col-md-7'>
                  <img className='img-responsive work-img' src={work.src} />
                </div>
                <div className='col-md-4 col-md-offset-1'>
                  <p>{work.name}</p>
                  <p className='work-description'>{work.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
