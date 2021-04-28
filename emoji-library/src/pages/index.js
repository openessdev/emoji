import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import EmojiCard from "../components/emojiCard"
import Logo from "../images/background/openess-logo.svg"
import Cover from "../images/background/BgCover.png"
import Omg from "../images/background/TwitterCover.png"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const IndexPage = props => {
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

  // const domain = "https://openess-test.netlify.app"
  return (
    <Layout>
      <SEO
        title="Openess Emoji for Devs"
        image={Omg}
        // url={props.data.site.siteMetadata.siteUrl}
      />

      <div
        className="container emoji-collage mb-4"
        style={{
          maxWidth: 1100,
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
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col">
            <div className=" row" style={{ position: `sticky`, top: `50px` }}>
              <div className="col-xl-12 col">
                <OutboundLink href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AABtT-dwyt0jj0d7xdq7Qhgsa?dl=0 ">
                  <div className=" platform--image m-md-2 tooltips">
                    <span className="tooltiptext">Download all</span>
                    <FontAwesomeIcon icon={"download"} />
                  </div>
                </OutboundLink>
              </div>
              <div className="col-xl-12 col">
                <OutboundLink href="https://github.com/openessdev/emoji">
                  <div className=" platform--image m-md-2 tooltips">
                    <span className="tooltiptext">Github</span>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </div>
                </OutboundLink>
              </div>
              <div className="col-xl-12 col">
                <OutboundLink href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AADUK_nMqIlk64Knd6FFFdnua/discord-emojis?dl=0&subfolder_nav_tracking=1 ">
                  <div className=" platform--image m-md-2 tooltips">
                    <span className="tooltiptext">Discord</span>
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </div>
                </OutboundLink>
              </div>
              <div className="col-xl-12 col">
                <OutboundLink href=" https://www.dropbox.com/sh/cmxl0agdg08o4cn/AAB8CvdBvWBLXezDvAr9Pig2a/slack-emojis?dl=0&subfolder_nav_tracking=1">
                  <div className=" platform--image m-md-2 tooltips">
                    <span className="tooltiptext">Slack</span>
                    <FontAwesomeIcon icon={["fab", "slack"]} />
                  </div>
                </OutboundLink>
              </div>
              <div className="col-xl-12 col">
                <OutboundLink href="https://www.dropbox.com/sh/cmxl0agdg08o4cn/AACaafCIjeKSqbxl7oa-gx_da/email-emojis?dl=0&subfolder_nav_tracking=1 ">
                  <div className=" platform--image m-md-2 tooltips">
                    <span className="tooltiptext">Mail</span>
                    <FontAwesomeIcon icon={"envelope"} />
                  </div>
                </OutboundLink>
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
                  <a href=" https://dribbble.com/skim">Sarah Kim</a>{" "}
                </p>
                <p>
                  Website development & data structures:{" "}
                  <a href="https://twitter.com/adebayomuhamma2">
                    Muhammad Bashir
                  </a>{" "}
                </p>
                <p>
                  Creative direction & production:{" "}
                  <a href="https://twitter.com/lotusleafstyle">Julia Che</a>{" "}
                </p>
                <p>
                  A big thank you to{" "}
                  <a href="https://twitter.com/davedbase">David Di Biase</a> &
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
