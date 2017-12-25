import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './carousel.css'
import './index.css'

const NavHeader = () => (
  <Navbar inverse fixedTop collapseOnSelect role='navigation'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#header'>
          <span className='navbar-brand-gn'>Aobo</span>
          &nbsp;
          <span className='navbar-brand-fn'>Yang</span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey='1' href='#me'>About</NavItem>
        <NavItem eventKey='2' href='#resume'>Resume</NavItem>
        <NavItem eventKey='3' href='#work'>Work</NavItem>
        <NavItem eventKey='4' href='#contact'>Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Aobo Yang'
      meta={[
        { name: 'description', content: 'Personal site of Aobo Yang' },
        { name: 'keywords', content: 'aobo, yang aobo' }
      ]}
    />
    <NavHeader />
    <div className='page'>
      {children()}
    </div>
    <div id='footer'>
      <div className='container'>
        A Web Site by <b>Aobo Yang</b>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
