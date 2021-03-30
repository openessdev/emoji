import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row text-center">
        <div className="col-xs-12">One of three columns</div>
        <div className="col-sm">
          <div
            className=""
            style={{
              border: `1px solid blue`,
              padding: `0 15px`,
            }}
          >
            One of three columns
          </div>
        </div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
