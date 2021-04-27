import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactTooltip from "react-tooltip"
import { graphql, Link, useStaticQuery } from "gatsby"
import EmojiCard from "../components/emojiCard"
import Logo from "../images/background/openess-logo.svg"
import Cover from "../images/background/BgCover.png"
import Helmet from "react-helmet"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allEmojiDataJson {
        nodes {
          emoji
          id
          name
          description
          code
          openess_images {
            color {
              png {
                childImageSharp {
                  gatsbyImageData(
                    width: 100
                    placeholder: BLURRED
                    formats: PNG
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const domain = "https://openess-test.netlify.app"
  return (
    <Layout>
      <Helmet>
        <meta property="og:image" content={domain + "/og-image/index.png"} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:width" content="50" />
      </Helmet>

      <SEO title="Home" />

      <div
        className="container emoji-collage"
        style={{
          maxWidth: 1100,
          marginTop: `50px`,
        }}
      >
        <img
          src={Cover}
          alt=""
          style={{
            width: `100%`,
            height: `auto`,
          }}
        />
      </div>
      <div className="container mt-4">
        <div className="row g-4">
          <div className="col">
            <div className=" row" style={{ position: `sticky`, top: `50px` }}>
              <div className="col-xl-12 col">
                <div
                  className=" platform--image m-md-2"
                  data-tip="Download all"
                >
                  <ReactTooltip />
                  <FontAwesomeIcon icon={"download"} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Github">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Discord">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={["fab", "discord"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Slack">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={["fab", "slack"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Mail">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={"envelope"} />
                </div>
              </div>
              {/* <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Whatsapp">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image m-md-2" data-tip="Telegram">
                  <ReactTooltip />
                  <FontAwesomeIcon icon={"paper-plane"} />
                </div>
              </div>*/}
            </div>
          </div>
          <div className="col-sm-11">
            <div className=" row g-4">
              <div className="col-xl-12 ">
                <div className="">
                  <div className="page-detail-wrapper">
                    <h1 className="page-detail--title">
                      Open-source Emoji Pack for Devs
                    </h1>
                    <p className="page--detail--header">
                      Creating open-source software can be a thankless job. This
                      capsule collection of 22 handcrafted emojis (inspired by
                      NFT art colorways & aesthetics) is our small way of saying
                      “thank you!” & recognizing the tireless work of OSS
                      contributors, builders & makers.
                    </p>
                    <p className="link--intro">
                      The emojis are designed to fill gaps in a typical
                      developer’s day - from “busy coders” to “bugs” &
                      “databases on fire”.
                    </p>

                    <p>
                      These emoji packs are 100% free & open-source. Download
                      these emoji packs by clicking on the icons to the left or
                      below. {""}
                      <span style={{ color: `purple` }}>
                        Available on WhatsApp, iMessage & Telegram by searching
                        "Openess" in the Top Stickers app.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {data.allEmojiDataJson.nodes.map(item => (
                <EmojiCard key={item.id} item={item} />
              ))}
              <div className="my-4 credits">
                <p>Illustrations & graphic design: Sarah Kim</p>
                <p>Website development & data structures: Muhammad Bashir</p>
                <p>Creative direction & production: Julia Che</p>
                <p>
                  A big thank you to David Di Biase & all our friends who
                  provided feedback & support in the making of this project!
                </p>
              </div>
              <div className="d-flex bottom-logo justify-content-end">
                <img
                  src={Logo}
                  alt=""
                  style={{
                    width: `230px`,
                    height: `230px`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
