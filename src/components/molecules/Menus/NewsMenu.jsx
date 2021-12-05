import { Link } from "react-router-dom"

function NewsMenu() {
  return (
    <div className="child-menu">
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="item">
        <span className="title">InternalNews</span>
        <Link to="/" className="item-link">News Update</Link>
        <Link to="/" className="item-link">Organizational Structure</Link>
        <Link to="/" className="item-link">Board of Director</Link>
        <Link to="/" className="item-link">Board of Commissioner</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <div className="title">ExternalNews</div>
        <Link to="/" className="item-link">Financial Update</Link>
        <Link to="/" className="item-link">National Update</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Regulation</span>
        <Link to="/" className="item-link">List of Regulation</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Report</span>
        <Link to="/" className="item-link">List of Report</Link>
      </div>
    </div>
  )
}

export default NewsMenu
