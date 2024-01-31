// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const {headerDetails} = props
  console.log(headerDetails)

  return (
    <div className="header-bg-container">
      <div className="header-container1">
        <img
          className="header-img1"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <p className="header-p2">Wave</p>
      </div>
      <ul className="header-container2">
        <li className="list">
          <Link className="header-p2" to="/">
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/about">
            <h1 className="header-p1">About</h1>
          </Link>
        </li>
        <li className="list">
          <Link className="header-p2" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
