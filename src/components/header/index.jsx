import '../../styles/header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
      <nav>
        <NavLink
          id="dashBoard_logo"
          className="menuLink logo"
          to="/admin/dashboard"
        ></NavLink>
        <div className="dropdown">
          <div className="menuLink">
            <NavLink className="selected" to="/admin/dashboard">
              Planning
            </NavLink>
          </div>
          <div className="dropdown-content">
            <NavLink className="dropdown" to="/admin/calendar">
              Vue mensuelle
            </NavLink>
          </div>
        </div>
        <div className="menuLink">
          <NavLink className="" to="/admin/programs">
            Programmations
          </NavLink>
        </div>
        <div className="menuLink">
          <NavLink className="" to="/admin/storefront">
            Page de marque
          </NavLink>
        </div>
        <div className="menuLink">
          <NavLink className="" to="/admin/coupons">
            Coupons
          </NavLink>
        </div>
        <div className="dropdown">
          <div className="menuLink">
            <NavLink className="" to="/admin/clients">
              Clients
            </NavLink>
          </div>
          <div className="dropdown-content">
            <NavLink className="dropdown" to="/admin/feedback">
              Feedback athlète
            </NavLink>
            <NavLink className="dropdown" to="/admin/surveys">
              Sondage athlète
            </NavLink>
          </div>
        </div>
        <div className="menuLink">
          <NavLink className="" to="/admin/reports">
            Rapports
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
