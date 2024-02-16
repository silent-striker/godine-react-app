import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function NotFound() {
  return (
    <div style={{margin:"1cm"}}>
        <h1>404, Page Not found</h1>
        <Link className="btn btn-primary" to="/signup">Go back</Link>
    </div>
  )
}

export default NotFound;