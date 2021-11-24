import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import { Link, NavLink } from "react-router-dom"
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <>
      <MetisMenu>
        <li className="header-menu">News</li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Internal News</Link>
          <ul>
            <li><NavLink to="/news/update">News Update</NavLink></li>
            <li><NavLink to="/news/organizationalstructure">Organizational Structure</NavLink></li>
            <li><NavLink to="/news/bod">Board of Director</NavLink></li>
            <li><NavLink to="/news/boc">Board of Commissioner</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">External News</Link>
          <ul>
            <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">Financial Update</a></li>
            <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">National Update</a></li>
          </ul>
        </li>
        <li className="menu-lists">
          <NavLink to="/news/regulation">Regulation</NavLink>
        </li>
        <li className="menu-lists">
          <NavLink to="/news/report">Report</NavLink>
        </li>
        <li className="header-menu">IT Group</li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">About IT</Link>
          <ul>
            <li><NavLink to="/">External News</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </li>

        <li className="menu-lists">
          <Link to="#" className="has-arrow">IT Guidelines</Link>
          <ul>
            <li><NavLink to="/">External News</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Form</Link>
          <ul>
            <li><NavLink to="/">External News</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Document Support</Link>
          <ul>
            <li><NavLink to="/">External News</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Dashboard</Link>
          <ul>
            <li><NavLink to="/">External News</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </li>
        <li className="header-menu">Infographic</li>
        <li className="menu-lists">
          <NavLink to="/infographic"  className="has-arrow">Infographic</NavLink>
        </li>
      </MetisMenu>
    </>
  )
}

export default Sidebar

