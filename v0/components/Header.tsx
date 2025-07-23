import type React from "react"

const ChevronDown = () => (
  <svg className="chevron-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>
)

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">
          Jad<span className="logo-accent">oo</span>
        </h1>
      </div>

      <nav className="nav">
        <a href="#" className="nav-link">
          Destinations
        </a>
        <a href="#" className="nav-link">
          Hotels
        </a>
        <a href="#" className="nav-link">
          Flights
        </a>
        <a href="#" className="nav-link">
          Bookings
        </a>
      </nav>

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
        <div className="language-selector">
          <span>EN</span>
          <ChevronDown />
        </div>
      </div>
    </header>
  )
}

export default Header
