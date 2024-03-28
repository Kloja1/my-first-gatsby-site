import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="About Me" />

export default AboutPage