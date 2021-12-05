import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Footer.scss'
const PortalFooter = () => {
  return (
    <div className="main-footer">
      <div className="row justify-content-between">
        <div className="col-lg-3">
          <Link to="/home" >
            <img src="/logo.png" alt="" className="img-logo-footer" />
          </Link>
        </div>
        <div className="col-lg-2 col">
          <h5 className="title">News</h5>
          <div className="footer-menu">
            <a href="/#" className="menu-link">Internal News</a>
            <a href="/#" className="menu-link">External News</a>
          </div>
        </div>
        <div className="col-lg-2 col">
          <h5 className="title">Department Site</h5>
          <div className="footer-menu">
            <a href="http://rmg/" className="menu-link">RMG</a>
            <a href="http://dops/" className="menu-link">DOPS</a>
            <a href="http://igrc/" className="menu-link">IGRC</a>
          </div>
          </div>
        <div className="col-lg-2 col">
          <h5 className="title">Internal Site</h5>
          <div className="footer-menu">
            <a href="http://bukiweb.bukopin.co.id/" className="menu-link">Bukiweb</a>
            <a href="http://boc/" className="menu-link">BOC</a>
            <a href="http://kkb/" className="menu-link">KKBJ</a>
          </div>
        </div>
        <div className="col-lg-2">
          <h5 className="title soc">Social Media</h5>
          <div className="menu-social">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer" style={{fontSize: '10px', marginTop:'50px'}}>
        © KB Bukopin 2021. All Right Reserved
      </div>
    </div>
  )
}

export default PortalFooter
