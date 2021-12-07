import { ArrowBackIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ExpandMore } from '@material-ui/icons'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState} from 'react'

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

const NewsDetail = (props) => {
  const params = useParams()
  const [dataDetail, setDataDetail] = useState(null)
  const [newsUpdate, setNewsUpdate] = useState(null)

  let config = {
    url: `http://localhost:3031/news/detail?id=${ params.id }`,
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
    }, 
    data: JSON.stringify({ "_id": params.id })
  }

  let configNewsUpdate = {
    url: 'http://localhost:3031/viewnews/search/params?page=1&maxData=3',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
    }, 
  }

  useEffect(async () => {
    let DataDetail = await axios(config).then(response => response.data.result).catch(err => false)
    console.log(DataDetail)
    if ( dataDetail === null ) {
      setDataDetail(DataDetail)
    }

    let NewsUpdate = await axios(configNewsUpdate).then(response => response.data.result).catch(err => false)
    if ( newsUpdate === null ) {
      setNewsUpdate(NewsUpdate)
    }
  })

  return (
    <div className="news detail">
      <div className="list-news">
        <div className="d-flex align-items-center">
        <Link to="/news/update"><ArrowBackIos /></Link>
        <h3 className="title m-2" style={{ fontWeight: "bold" }} >
          {
            dataDetail ? dataDetail.title : null
          }  
        </h3> 
        </div>
        <span className="published-at" style={{ marginLeft: "30px" }}>
          {
            dataDetail ? Date(dataDetail.date).substring(0, 15) : null
          }
        </span>
        <div className="image-wrapper my-3">
          <img src={ dataDetail ? `http://localhost:3031/${ dataDetail.images }` : null } alt="" />
        </div>
        <div className="body" style={{ textAlign: "justify"}}>
          <p>
            { dataDetail ? dataDetail.description : null }
          </p>
        </div>
      </div>
      {/* News Update */}
      <div className="list-news">
        <h3 className="header-list">News Update</h3>
        <div className="row">
          {
            newsUpdate ? 
              newsUpdate.map((data,i) => {
                return(
                  <div className="col-lg-4 d-flex" key={ i }>
                    <a href={ `/news/update/${ data._id }` }>
                      <div className="kb-card">
                        <div className="image-wrapper">
                          <img src={ `http://localhost:3031/${ data.images }` } className="image img-fluid" alt={ data.title } />
                        </div>
                        <div className="body">
                          <span className="title">
                            { data.title }
                          </span>
                          <span className="time-publised">{ Date(data.date).substring(0, 15) }</span>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              }) : null
          }
        </div>
        <div className="more">
          <span className="text">More</span>
          <ExpandMore />
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
