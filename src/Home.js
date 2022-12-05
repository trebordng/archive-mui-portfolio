import React from 'react'
import Layout from './components/Layout'
import Landing from './components/Anchors/Landing'
import About from './components/Anchors/About'

const Home = () => {
  return (
    <Layout>
        <Landing />
        <About />
    </Layout>
  )
}

export default Home