import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmojiCard from "../components/emojiCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container emoji-list-wrapper">
      <div className="row text-center">
        <div className="col-xs-12">One of three columns</div>
        <EmojiCard />
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
