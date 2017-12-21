import React from 'react'
import Icon from '@fortawesome/react-fontawesome'

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

const Contacts = () => {
  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <h3 id='contact-title'><i className='fa fa-comment fa-lg' /> Say Hello</h3>
            <hr className='invisible-hr' />
            <form role='form'>
              <div className='row'>
                <div className='col-md-6 form-group has-feedback'>
                  <label htmlFor='your-name'>Name</label>
                  <input type='text' className='form-control' name='name' placeholder='Your Name' />
                  <span className='glyphicon glyphicon-remove form-control-feedback' />
                </div>
                <div className='col-md-6 form-group has-feedback'>
                  <label htmlFor='your-email'>Email</label>
                  <input type='email' className='form-control' name='email' placeholder='Your Email' />
                  <span className='glyphicon glyphicon-remove form-control-feedback' />
                </div>
              </div>

              <div className='form-group has-feedback'>
                <label htmlFor='your-email'>Mesage</label>
                <textarea type='text' className='form-control' rows='4' name='message' placeholder={'What\'s on your mind?'} />
                <span className='glyphicon glyphicon-remove form-control-feedback' />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </div>

            </form>

            <hr className='invisible-hr' />

            <div id='contact-info'>
              {
                Object.keys(CONTACT_DETAILS).map(key => (
                  <div key={key}>
                    <Icon icon={CONTACT_DETAILS[key].icon} size='2x' /> {CONTACT_DETAILS[key].value}
                  </div>
                ))
              }
            </div>

            <hr className='invisible-hr' />

            {
              SOCIALS.map((chunk, index) => (
                <div key={index}>
                  {
                    Object.keys(chunk).map(key => (
                      <a key={key} className='social-icon' href={chunk[key].href}>
                        <Icon icon={chunk[key].icon} className='fa-social-icon' size='2x' />
                      </a>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div id='contact-right' className='col-lg-6 col-lg-offset-1 visible-lg visible-md'>
            <div id='map-component'>
              <div id='map-top-bar' />
              <div id='map-canvas' />
              <div id='map-bottom-bar' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
