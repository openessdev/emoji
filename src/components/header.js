import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import { Link } from "gatsby"
import Logo from "../images/background/openess-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    className="header container"
    style={{
      margin: `0 auto`,
      maxWidth: `1100px`,
      height: `70px`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      paddingLeft: `27px`,
      paddingRight: `50px`,
    }}
  >
    <Link
      to="/"
      style={{
        color: `#ffffff`,
        textDecoration: `none`,
      }}
    >
      {/*{siteTitle}*/}
      <img
        src={Logo}
        alt=""
        style={{
          width: `230px`,
          height: `230px`,
        }}
      />
    </Link>
    <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/openessdev">
      <div
        className=" platform--image"
        style={{
          maxWidth: `100%`,
        }}
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </div>
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
