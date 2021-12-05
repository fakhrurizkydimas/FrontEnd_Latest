import { Link } from "react-router-dom"
// import './ITGuidelines.scss'

const ITGuideLines = () => {
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
