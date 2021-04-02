import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      background: `#ffdd67`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        textAlign: `center`,
        padding: `5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <p
        style={{
          color: `#000`,
        }}
      >
        A set of open-source custom themed emojis.
      </p>
      <div className="social--links">
        <a href="https://github.com/openessdev/emoji">
          <button className="">
            <span style={{ color: `yellow`, fontSize: `14px` }}>
              <FontAwesomeIcon icon={"star"} />
            </span>{" "}
            Github
          </button>
        </a>
        <a href="https://twitter.com/openessdev">
          <button className="">
            <span style={{ color: `blue`, fontSize: `14px` }}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>{" "}
            Tweet
          </button>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
