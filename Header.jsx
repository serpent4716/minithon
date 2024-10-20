import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div>
        <header className="app-header">
    <div className="logo"><img src="https://cloud-1de12d.b-cdn.net/media/iW=168&iH=59&oX=0&oY=6&cW=168&cH=48/a6ada5eff91182af1265b09dfd76a69d.png" alt="" /></div>
    <nav>
      <ul className="nav-list">
        <li><a href="#">For clients</a></li>
        <li><a href="#">For lawyers</a></li>
        <li><a href="#">For law firms</a></li>
        <li><a href="#">For recruiters</a></li>
        <li><a href="#">Social Network</a></li>
        <li className='signin'><a href="#">Sign in</a></li>
      </ul>
    </nav>
    <button className="get-started-button">GET STARTED</button>
    </header>
</div>
  )
}

export default Header