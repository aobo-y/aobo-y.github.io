import React from 'react'
import { Jumbotron } from 'react-bootstrap'
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

const SOCIALS = {
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
  },
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

const Hero = () => {
  return (
    <Jumbotron className='section--jumbotron'>
      <h1 className='jumbotron__h1'>Aobo Yang</h1>
      <h2>Software Engineer</h2>
      <div className='hidden-xs'>
        {Object.keys(SOCIALS).map(key => (
          <a key={key} className='circle-icon' href={SOCIALS[key].href} target='_blank'>
            <Icon icon={SOCIALS[key].icon} />
          </a>
        ))}
      </div>
      <a id='find-more-button' href='#me'>Find out more</a>
    </Jumbotron>
  )
}

export default Hero
