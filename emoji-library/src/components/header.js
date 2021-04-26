import * as React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/font-awesome"
import { Link } from "gatsby"

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
    <h1 style={{ margin: 0, fontSize: `30px` }}>
      <Link
        to="/"
        style={{
          color: `#ffffff`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
