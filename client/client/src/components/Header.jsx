import React from 'react'


function Header({ team }) {
  return (
    <header className="header">
      <img src={team?.strBadge} alt="Warriors Logo" className="logo" />
      <h1 className="title">Golden State Warriors Dashboard</h1>
    </header>
  )
}

export default Header
