import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactTooltip from "react-tooltip"
import { graphql, useStaticQuery } from "gatsby"
import EmojiCard from "../components/emojiCard"
import Logo from "../images/background/openess-logo.svg"
import Cover from "../images/background/BgCover.png"
import Helmet from "react-helmet"
import "../components/font-awesome"

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
  
  const domain = "https://emoji.openess.dev"
  return (
    <Layout>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="msapplication-TileColor" content="#2c4f7c" />
        <meta name="theme-color" content="#2c4f7c" />
        <meta name="msapplication-TileColor" content="#2c4f7c" />
      </Helmet>
      <SEO title="Open-source emoji!" />
      <div
        className="container emoji-collage mb-4"
        style={{
          marginTop: 35,
          maxWidth: 1100,
        }}
      >
          <img
            src={Cover}
            alt="Twitter"
            style={{
              width: `100%`,
              height: `auto`
            }}
          />
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col">
            <div className=" row" style={{ position: `sticky`, top: `50px` }}>
              <div className="col-xl-12 col">
                <a href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AABtT-dwyt0jj0d7xdq7Qhgsa?dl=0 ">
                  <ReactTooltip />
                  <div
                    className=" platform--image m-md-2"
                    data-tip="Download all"
                  >
                    <FontAwesomeIcon icon={"download"} />
                  </div>
                </a>
              </div>
              <div className="col-xl-12 col">
                <a href="https://github.com/openessdev/emoji">
                  <ReactTooltip />
                  <div className=" platform--image m-md-2" data-tip="Github">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </div>
                </a>
              </div>
              <div className="col-xl-12 col">
                <a href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AADUK_nMqIlk64Knd6FFFdnua/discord-emojis?dl=0&subfolder_nav_tracking=1 ">
                  <ReactTooltip />
                  <div className=" platform--image m-md-2" data-tip="Discord">
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </div>
                </a>
              </div>
              <div className="col-xl-12 col">
                <a href=" https://www.dropbox.com/sh/cmxl0agdg08o4cn/AAB8CvdBvWBLXezDvAr9Pig2a/slack-emojis?dl=0&subfolder_nav_tracking=1">
                  <ReactTooltip />
                  <div className=" platform--image m-md-2" data-tip="Slack">
                    <FontAwesomeIcon icon={["fab", "slack"]} />
                  </div>
                </a>
              </div>
              <div className="col-xl-12 col">
                <a href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AACaafCIjeKSqbxl7oa-gx_da/email-emojis?dl=0&subfolder_nav_tracking=1 ">
                  <ReactTooltip />
                  <div className=" platform--image m-md-2" data-tip="Mail">
                    <FontAwesomeIcon icon={"envelope"} />
                  </div>
                </a>
              </div>
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
                      these emoji packs by clicking on the white icons or below.{" "}
                      {""}
                      <span style={{ color: `#BB96D8` }}>
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
                <p>
                  Illustrations & graphic design:{" "}
                  <a target="_blank" rel="noreferrer" href="https://dribbble.com/skim">Sarah Kim</a>{" "}
                </p>
                <p>
                  Website development & data structures:{" "}
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/adebayomuhamma2">
                    Muhammad Bashir
                  </a>{" "}
                </p>
                <p>
                  Creative direction & production:{" "}
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/lotusleafstyle">Julia Che</a>{" "}
                </p>
                <p>
                  A big thank you to{" "}
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/davedbase">David Di Biase</a> &
                  all our friends who provided feedback & support in the making
                  of this project!
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
