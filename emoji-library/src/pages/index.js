import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import EmojiCard from "../components/emojiCard"

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

  return (
    <Layout>
      <SEO title="Home" />
      {/*<div className="container emoji-collage">IMAGE COLLAGE</div>*/}

      <div className="container mt-4">
        <div className="row g-4">
          <div className="col">
            <div
              className=" row text-center"
              style={{ position: `sticky`, top: `0` }}
            >
              <div className="col-xl-12 col">
                <div
                  className=" platform--image"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Tooltip on right"
                >
                  <FontAwesomeIcon icon={"download"} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={["fab", "discord"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={["fab", "slack"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={"envelope"} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </div>
              </div>
              <div className="col-xl-12 col">
                <div className=" platform--image">
                  <FontAwesomeIcon icon={"paper-plane"} />
                </div>
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
                      these emoji packs by clicking on the icons to the left or
                      below. Available on WhatsApp, iMessage & Telegram by
                      searching "Openess" in the Top Stickers app. Please note,
                      these emojis may not be used in commercial work, they are
                      for personal use only.
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
            </div>
          </div>
        </div>
      </div>
      {/*<div className="my-4 credits">
        <p>Illustrations & graphic design: Sarah Kim</p>
        <p>Website development & data structures: Muhammad Bashir</p>
        <p>Creative direction & production: Julia Che</p>
        <p>
          A big thank you to David Di Biase & all our friends who provided
          feedback & support in the making of this project!
        </p>
      </div>*/}
    </Layout>
  )
}

export default IndexPage
