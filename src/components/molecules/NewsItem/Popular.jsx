import { Link } from "react-router-dom"

const Popular = (props) => {
  const {title,number,link} = props;
  return (
    <Link to={link}>
      <div className="popular-item">
        <div className="num">{number}</div>
        <span className="title-pop">
          {title}
        </span>
      </div>
    </Link>

  )
}

export default Popular
