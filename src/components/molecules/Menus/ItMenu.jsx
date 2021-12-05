import { Link } from "react-router-dom";

export default function ItMenu() {
  return (
    <div className="child-menu">
      <div className="row">
        <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
        <div className="item">
          <span className="title">About IT</span>
          <div className="item-link">
            <Link to="/">Vision & Mission IT Group</Link>
          </div>
          <div className="item-link">
            <Link to="/" className="item-link">Organizational Structure IT Group</Link>
          </div>
        </div>
        <div className="line vertical"></div>
        <div className="item">
          <span className="title">IT Guidelines</span>
          <Link to="/">List of IT Guidelines Book</Link>
        </div>
        <div className="line vertical"></div>
        <div className="item">
          <span className="title">Information</span>
          <div className="item-link">
            <Link to="/">Incident Priority</Link>
          </div>
          <div className="item-link">
            <Link to="/" className="item-link">Service Catalog</Link>
          </div>
          <div className="item-link">
            <Link to="/" className="item-link">Contact List</Link>
          </div>
        </div>
        
        <div className="border"></div>
        <div className="item">
          <span className="title">Document Support</span>
          <div className="item-link">
            <Link to="/">OLA</Link>
          </div>
          <div className="item-link">
            <Link to="/" className="item-link">SLA</Link>
          </div>
          <div className="item-link">
            <Link to="/" className="item-link">Project Document</Link>
          </div>
        </div>
        <div className="line vertical"></div>
        <div className="item">
            <span className="title">Dashboard</span>
            <Link to="/">Incidents</Link>
            <Link to="/">Reports</Link>
            <Link to="/">Audit Findings</Link>
            <Link to="/">Change Management</Link>
            <Link to="/">Project Management</Link>
          </div>
          <div className="line vertical"></div>
          <div className="item">
            <span className="title">Form</span>
            <Link to="/">List of Form</Link>
          </div>
      </div>
    </div>
  )
}
