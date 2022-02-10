import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/layout.css'

function Header() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Amazon</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Add to Cart</a>
        </li>
        
      
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header