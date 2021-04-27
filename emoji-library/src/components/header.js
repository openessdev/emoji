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
      maxWidth: 1100,
      height: `70px`,
      display: `flex`,
      alignItems: `center`,
    }}
  >
    <Link
      to="/"
      style={{
        color: `#ffffff`,
        textDecoration: `none`,
        // fontSize: `90px`,
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
