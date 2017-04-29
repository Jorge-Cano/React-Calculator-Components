import React, { Component } from 'react'
import './Keys.css'

class Header extends Component {
    render () {
      return (
        <div>
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d" />
          </div>
        </div>
    )
  }
}

export default Header;
