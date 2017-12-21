import React from 'react'

const SOCIALS = [
  {
    facebook: 'https://www.facebook.com/aobo.yang.3',
    twitter: 'https://twitter.com/Aobo_Y',
    github: 'https://github.com/yangaobo',
    linkedin: 'http://www.linkedin.com/pub/aobo-yang/85/122/5a1'
  },
  {
    'google-plus': 'https://plus.google.com/109879626672663714090/posts?gclid=CjkKEQjwqsCcBRDt7_Gts5a91YYBEiQAm-wYEe9Rs8cK-uTMRo-RSTo-keHvbQ81fGuDpgGImaj_Kcrw_wcB',
    'stack-overflow': 'http://stackoverflow.com/users/2516428/aobo-yang',
    weibo: 'http://weibo.com/1978767307/profile?rightmod=1&wvr=5&mod=personinfo',
    instagram: 'http://instagram.com/yangaobo'
  }
]

const CONTACT_DETAILS = {
  phone: {
    value: '+852 64282076',
    icon: 'phone'
  },
  email: {
    value: 'yangaobo@gmail.com',
    icon: 'envelope'
  },
  addr: {
    value: 'Hung Hom, Kowloon, Hong Kong',
    icon: 'map-marker'
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
                    <i className={`fa fa-${CONTACT_DETAILS[key].icon} fa-2x`} /> {CONTACT_DETAILS[key].value}
                  </div>
                ))
              }
            </div>

            <hr className='invisible-hr' />

            {
              SOCIALS.map((chunk, index) => (
                <div>
                  {
                    Object.keys(chunk).map(key => (
                      <a className='social-icon' href={chunk[key]}>
                        <i className={`fa-social-icon fa fa-${key} fa-2x`} />
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
