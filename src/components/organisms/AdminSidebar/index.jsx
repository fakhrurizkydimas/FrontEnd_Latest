import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import { Link, NavLink } from "react-router-dom"
import './Sidebar.scss'

const AdminSidebar = () => {
  return (
    <>
      <MetisMenu>
        <li className="header-menu">News</li>
        <li className="menu-lists">
          <NavLink to="/news/regulation">Add</NavLink>
        </li>
        <li className="menu-lists">
          <NavLink to="/news/report">Edit</NavLink>
        </li>
        <li className="menu-lists">
          <NavLink to="/news/regulation">Delete</NavLink>
        </li>
        <li className="menu-lists">
          <NavLink to="/news/report">Download Report</NavLink>
        </li>
      </MetisMenu>
    </>
  )
}

export default AdminSidebar

