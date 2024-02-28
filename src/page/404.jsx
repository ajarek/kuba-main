import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return <>
    <div>
      error 404
    </div>
    <Link to="/">Home</Link>
  </>
}

export default NotFound;