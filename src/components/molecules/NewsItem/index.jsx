import { Link } from "react-router-dom"

const NewsItem = (props) => {
  const {title,publishedAt,thumbnail,link} = props;
  return (
    <Link to={link}>
      <div className="list-item">
        <div className="img-box">
          <img src={thumbnail} alt="" className="image-item" />
        </div>
        <div className="text">
          <h4 className="title">{title}</h4>
          <span className="publihed-at">{publishedAt}</span>
        </div>
      </div>
    </Link>
  )
}

export default NewsItem