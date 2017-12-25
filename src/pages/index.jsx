import React from 'react'
import Hero from '../components/Hero'
import Me from '../components/Me'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contacts from '../components/Contacts'

const IndexPage = props => {
  console.log(props)
  return (
    <div>
      <Hero />
      <Me />
      <Resume />
      <Portfolio />
      <Contacts />
    </div>
  )
}

export default IndexPage
