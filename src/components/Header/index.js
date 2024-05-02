import {withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="response">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </div>
  </div>
)

export default withRouter(Header)
