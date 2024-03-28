import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`



const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage