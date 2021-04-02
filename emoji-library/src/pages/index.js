import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import EmojiCard from "../components/emojiCard"
const IndexPage = () => {
  const [column, setColumn] = React.useState(false)

  const handleLayoutChange = () => {
    setColumn(!column)
    // setSize(!size)
  }

  const data = useStaticQuery(graphql`
    query {
      allEmojiDataJson {
        nodes {
          emoji
          id
          name
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

      <div className="container emoji-list-wrapper">
        <div className="row text-center g-4">
          <div
            className="col-xs-2"
            style={{ color: `#ff5a79`, fontSize: `24px`, cursor: `pointer` }}
          >
            {column === true ? (
              <FontAwesomeIcon onClick={handleLayoutChange} icon={"th"} />
            ) : (
              <FontAwesomeIcon onClick={handleLayoutChange} icon={"th-list"} />
            )}
          </div>
          <div className="col-xs-10 d-flex align-items-center">
            <input
              className="form-control form-control-lg form-control__modified mr-2"
              type="text"
              placeholder="Search your emoji.."
              aria-label=".form-control-lg example"
              style={{
                backgroundColor: `#2b2b2b`,
                color: `white`,
                border: `white`,
                height: `55px`,
              }}
            />
          </div>
          {data.allEmojiDataJson.nodes.map(item => (
            <EmojiCard key={item.id} item={item} column={column} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
