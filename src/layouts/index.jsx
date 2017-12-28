import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap'
import {capitalize} from 'lodash'
import scrollTo from '../utils/scrollTo'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const NavItems = [
  'about',
  'resume',
  'work',
  'contact'
]

class NavHeader extends PureComponent {
  static propTypes = {
    history: PropTypes.object
  }

  onBrandClick = e => {
    this.props.history.push('/')
    scrollTo()
    e.preventDefault()
  }

  onSelect = key => {
    this.props.history.push(`/#${key}`)
    // temp handle the scroll here because gatsby's issue in location hash update
    scrollTo(key)
  }

  render () {
    return (
      <Navbar inverse fixedTop collapseOnSelect role='navigation'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/' onClick={this.onBrandClick}>
              <span className='navbar-brand-gn'>Aobo</span>
              &nbsp;
              <span className='navbar-brand-fn'>Yang</span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {
              NavItems.map((i, index) =>
                <NavItem key={index} onSelect={this.onSelect} eventKey={i} href={`/#${i}`}>{capitalize(i)}</NavItem>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const TemplateWrapper = props => {
  return (
    <div>
      <Helmet
        title='Aobo Yang'
        meta={[
          { name: 'description', content: 'Personal site of Aobo Yang' },
          { name: 'keywords', content: 'aobo, yang aobo' }
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' }
        ]}
      >
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-111675562-1' />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-111675562-1');
        `}</script>
      </Helmet>
      <NavHeader history={props.history} />
      <div className='page'>
        {props.children()}
      </div>
      <div className='footer'>
        <Grid>
          A Web Site by <b className='text-primary'>Aobo Yang</b>
        </Grid>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  history: PropTypes.object
}

export default TemplateWrapper
