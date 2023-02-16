import React from "react";
import { Link } from 'react-router-dom';
// import moon from './moon-phases.svg'
// import PropTypes from 'prop-types'


export default function Navbar({title,aboutUs,mode,toggleMode}) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {aboutUs}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Conact Us
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
          
          <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  {/* <button onClick={toggleMode}><img src={moon} style={{width: '20px',height: '20px'}} alt="" /></button> */}
</div>
        </div>
      </div>
    </nav>
    </>
  );
}

// Navbar.prototype = {
//     title: PropTypes.string.isRequired,
//     aboutUs: PropTypes.string
// }

// Navbar.defaultProps ={
//     title: 'Plz enter title',
//     AboutUs: 'plz enter'
// }