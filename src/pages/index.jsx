import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Me from '../components/Me'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import scrollTo from '../utils/scrollTo'

class IndexPage extends PureComponent {
  static propTypes = {
    location: PropTypes.object
  }

  componentDidMount () {
    const { hash } = this.props.location
    if (hash) {
      const section = hash.replace(/^#/, '')
      if (['about', 'resume', 'work', 'contact'].includes(section)) {
        scrollTo(section)
      }
    }
  }

  render () {
    return (
      <div>
        <Hero />
        <Me />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default IndexPage
