import React from 'react'
import PropTypes from 'prop-types'
import { Link } from  "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} to="/">{ props.title }</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} to="/about">{ props.aboutText }</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className={`form-check-label ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} for="flexSwitchCheckDefault"  >Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

// Props Validation
Navbar.prototype = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

// Default Props
Navbar.defaultProps = {
    title : "SET TITLE",
    aboutText : "SET ABOUT TITLE"
}