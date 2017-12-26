import React, { PureComponent } from 'react'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Icon from '@fortawesome/react-fontawesome'
import GoogleMap from 'google-map-react'
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedinIn,
  faGooglePlusG,
  faStackOverflow,
  faWeibo,
  faInstagram
} from '@fortawesome/fontawesome-free-brands'
import {
  faComment,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/fontawesome-free-solid'

const SOCIALS = [
  {
    facebook: {
      href: 'https://www.facebook.com/aobo.yang.3',
      icon: faFacebookF
    },
    twitter: {
      href: 'https://twitter.com/Aobo_Y',
      icon: faTwitter
    },
    github: {
      href: 'https://github.com/yangaobo',
      icon: faGithub
    },
    linkedin: {
      href: 'http://www.linkedin.com/pub/aobo-yang/85/122/5a1',
      icon: faLinkedinIn
    }
  },
  {
    'google-plus': {
      href: 'https://plus.google.com/109879626672663714090/posts?gclid=CjkKEQjwqsCcBRDt7_Gts5a91YYBEiQAm-wYEe9Rs8cK-uTMRo-RSTo-keHvbQ81fGuDpgGImaj_Kcrw_wcB',
      icon: faGooglePlusG
    },
    'stack-overflow': {
      href: 'http://stackoverflow.com/users/2516428/aobo-yang',
      icon: faStackOverflow
    },
    weibo: {
      href: 'http://weibo.com/1978767307/profile?rightmod=1&wvr=5&mod=personinfo',
      icon: faWeibo
    },
    instagram: {
      href: 'http://instagram.com/yangaobo',
      icon: faInstagram
    }
  }
]

class ContactMap extends PureComponent {
  onLoad = ({map, maps}) => {
    const marker = new maps.Marker({
      position: new maps.LatLng(22.303325, 114.186659),
      map: map,
      animation: maps.Animation.DROP,
      title: 'Spend most of time here'
    })

    maps.event.addListener(marker, 'mouseover', () => {
      if (marker.getAnimation() == null) {
        marker.setAnimation(maps.Animation.BOUNCE)
        setTimeout(() => { marker.setAnimation(null) }, 3500)
      }
    })
  }

  render () {
    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyAnE_5cOTU1CqS21QgP04N026hrA9dn1ZI',
          language: 'en'
        }}
        onGoogleApiLoaded={this.onLoad}
        yesIWantToUseGoogleMapApiInternals
        zoom={8}
        center={[22.303325, 114.186659]}
      />
    )
  }
}

const CONTACT_DETAILS = {
  phone: {
    value: '+852 64282076',
    icon: faPhone
  },
  email: {
    value: 'yangaobo@gmail.com',
    icon: faEnvelope
  },
  addr: {
    value: 'Hung Hom, Kowloon, Hong Kong',
    icon: faMapMarkerAlt
  }
}

const Contact = () => {
  return (
    <section id='section-contact' className='section--gray'>
      <Grid>
        <Row>
          <Col lg={5}>
            <h3 className='text-primary'>
              {Object.keys(Icon).length !== 0 && <Icon icon={faComment} />} Say Hello
            </h3>
            <form role='form' className='contact__form'>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type='text' name='name' placeholder='Your Name' />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type='email' name='email' placeholder='Your Email' />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Message</ControlLabel>
                <FormControl componentClass='textarea' name='message' rows='4' placeholder={'What\'s on your mind?'} />
              </FormGroup>
              <Button block type='submit' bsStyle='primary'>
                Send Message
              </Button>
            </form>

            {
              Object.keys(CONTACT_DETAILS).map(key => (
                <div key={key} className='contact__detail'>
                  {Object.keys(Icon).length !== 0 && <Icon icon={CONTACT_DETAILS[key].icon} className='contact__detail__icon text-primary' />} {CONTACT_DETAILS[key].value}
                </div>
              ))
            }

            <div className='contact__social'>
              {
                SOCIALS.map((chunk, index) => (
                  <div key={index} className='contact__social__row'>
                    {
                      Object.keys(chunk).map(key => (
                        <a key={key} className='contact__social-icon' href={chunk[key].href} target='_blank'>
                          {Object.keys(Icon).length !== 0 && <Icon fixedWidth icon={chunk[key].icon} />}
                        </a>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </Col>

          <Col lg={6} lgOffset={1} className='visible-lg visible-md'>
            <div className='contact__map'>
              <ContactMap />
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export default Contact
