import { Link } from "react-router-dom"

function AdminMenu() {
  return (
    <div className="child-menu">
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Add</span>
        <Link to="/" className="item-link">List of Regulation</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Edit</span>
        <Link to="/" className="item-link">List of Report</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Delete</span>
        <Link to="/" className="item-link">List of Regulation</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Download Report</span>
        <Link to="/" className="item-link">List of Regulation</Link>
      </div>
    </div>
  )
}

export default AdminMenu
