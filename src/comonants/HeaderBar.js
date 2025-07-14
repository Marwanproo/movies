import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const HeaderBar = () => {
  return (
      <div className="header">
          <Link className='Link' to='/' >Whatch List</Link>
          <Link className='Link' to="/Whatched_Movies">Whatched List</Link>
            <Link className='Link' to='/Add' >Add movie</Link>  
      </div>  )
}

export default HeaderBar