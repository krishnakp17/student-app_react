import React from 'react'
import { Link } from 'react-router-dom'

const StudentNavBar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Delete student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewall">View all students</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default StudentNavBar