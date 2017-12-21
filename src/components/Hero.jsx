import React from 'react'

const SOCIALS = {
  facebook: 'https://www.facebook.com/aobo.yang.3',
  twitter: 'https://twitter.com/Aobo_Y',
  github: 'https://github.com/yangaobo',
  linkedin: 'http://www.linkedin.com/pub/aobo-yang/85/122/5a1',
  'google-plus': 'https://plus.google.com/109879626672663714090/posts?gclid=CjkKEQjwqsCcBRDt7_Gts5a91YYBEiQAm-wYEe9Rs8cK-uTMRo-RSTo-keHvbQ81fGuDpgGImaj_Kcrw_wcB',
  'stack-overflow': 'http://stackoverflow.com/users/2516428/aobo-yang',
  weibo: 'http://weibo.com/1978767307/profile?rightmod=1&wvr=5&mod=personinfo',
  instagram: 'http://instagram.com/yangaobo'
}

const Hero = () => {
  return (
    <div id='header'>
      <div id='header-content'>
        <h1>Yang Aobo</h1>
        <h3>A Programmer</h3>
        <div id='header-social-bar' className='hidden-xs'>
          {Object.keys(SOCIALS).map(key => (
            <a key={key} className='circle-social-icon' href={SOCIALS[key]}>
              <i className={`fa-social-icon fa fa-${key} fa-2x`} />
            </a>
          ))}
        </div>
      </div>
      <a id='find-more-button' href='#me'>Find out more</a>
    </div>
  )
}

export default Hero
