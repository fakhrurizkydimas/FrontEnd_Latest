import { Link } from "react-router-dom"
// import './ITGuidelines.scss'
import axios from 'axios'

const ITGuideLines = () => {
  const readCookie = (name) => {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  const InfographicsSave = async () => {
      let configRecord = {
          url: 'http://localhost:3031/infographics/detect',
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
          },

          data: JSON.stringify({ urlpath: window.location.pathname })
      }

      let InfoGraphicsRecord = await axios(configRecord).then(response => { console.log(response); return true}).catch(err => false)
      if ( !InfoGraphicsRecord ) return false
      if ( InfoGraphicsRecord ) return true
  }

  InfographicsSave()
  return (
    <div className="wrapper-page" style={{ backgroundColor : "#fff"}}>
      <div className="row justify-content-center">
        <div className="col-lg-3 mt-5">
          <Link to="/it/guidelines/book-6">
          <img src="/images/IT Guidelines/Book 6.png" alt="book" className="img-fluid" />
          </Link>
        </div>
        <div className="col-lg-3 mt-5">
          <Link to="/it/guidelines/book-1">
          <img src="/images/IT Guidelines/Book 1.png" alt="book" className="img-fluid" />
          </Link>
        </div>
        <div className="w-100"></div>
        <div className="col-lg-3">
          <Link to="/it/guidelines/book-5">
          <img src="/images/IT Guidelines/Book 5.png" alt="book" className="img-fluid" />
          </Link>
        </div>
        <div className="col-lg-3">
          <img src="/images/IT Guidelines/IT Guidelines Title.png" alt="book" className="img-fluid" />
        </div>
        <div className="col-lg-3">
          <Link to="/it/guidelines/book-2">
          <img src="/images/IT Guidelines/Book 2.png" alt="book" className="img-fluid" />
          </Link>
        </div>
        <div className="w-100"></div>
        <div className="col-lg-3 mb-5">
          <Link to="/it/guidelines/book-4">
          <img src="/images/IT Guidelines/Book 4.png" alt="book" className="img-fluid" />
          </Link>
        </div>
        <div className="col-lg-3 mb-5">
          <Link to="/it/guidelines/book-3">
          <img src="/images/IT Guidelines/Book 3.png" alt="book" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ITGuideLines
