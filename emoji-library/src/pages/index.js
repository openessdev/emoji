import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container border">
      <div className="row text-center">
        <div className="col-xs-12">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
