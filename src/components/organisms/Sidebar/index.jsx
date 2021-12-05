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
            {/* <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">Financial Update</a></li>
            <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">National Update</a></li> */}
            <li><NavLink to="/news/financialupdate">Financial Update</NavLink></li>
            <li><NavLink to="/news/nationalupdate">National Update</NavLink></li>
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
            <li><NavLink to="/it/visionmission">Vision & Mission</NavLink></li>
            <li><NavLink to="/it/itorganizationalstructure">IT Organizational Structure</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <NavLink to="/it/itguidelines">IT Guidelines</NavLink>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Information</Link>
          <ul>
            <li><NavLink to="/it/incidentpriority">Incident Priority</NavLink></li>
            <li><NavLink to="/it/servicecatalog">Service Catalog</NavLink></li>
            <li><NavLink to="/it/contactlist">Contact List</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Document Support</Link>
          <ul>
            <li><NavLink to="/it/ola">OLA</NavLink></li>
            <li><NavLink to="/it/sla">SLA</NavLink></li>
            <li><NavLink to="/it/projectdocument">Project Document</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <Link to="#" className="has-arrow">Dashboard</Link>
          <ul>
            <li><NavLink to="/it/incidents">Incidents</NavLink></li>
            <li><NavLink to="/it/reportsdownload">Reports</NavLink></li>
            <li><NavLink to="/it/auditfindings">Audit Findings</NavLink></li>
            <li><NavLink to="/it/changemanagement">Change Management</NavLink></li>
            <li><NavLink to="/it/projectmanagement">Project Management</NavLink></li>
          </ul>
        </li>
        <li className="menu-lists">
          <NavLink to="/it/form">Form</NavLink>
        </li>
        
        <li className="header-menu">Infographic</li>
        <li className="menu-lists">
          <NavLink to="/infographic">Infographic</NavLink>
        </li>
      </MetisMenu>
    </>
  )
}

export default Sidebar

