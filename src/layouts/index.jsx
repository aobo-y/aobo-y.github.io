import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './carousel.css'

const NavHeader = () => (
  <nav id='navbar' className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#aobops-navbar'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <a className='navbar-brand' href='#header'>
          <p id='brand-fn'>Yang&nbsp;<span id='brand-gn'>Aobo</span></p>
        </a>
      </div>

      <div className='collapse navbar-collapse' id='aobops-navbar'>
        <ul id='nav-btn-list' className='nav navbar-nav navbar-right'>
          <li><a href='#me'>About</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Yang Aobo'
      meta={[
        { name: 'description', content: 'Personal site of Yang Aobo' },
        { name: 'keywords', content: 'aobo, yang aobo' }
      ]}
    />
    <NavHeader />
    {children()}
    <div id='footer'>
      <div className='container'>
        A Web Site by <b>Yang Aobo</b>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
