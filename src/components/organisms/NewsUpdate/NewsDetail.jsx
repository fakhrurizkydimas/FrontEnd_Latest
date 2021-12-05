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
  let config = {
    url: 'http://localhost:3031/viewDetail',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
    }, 
    data: JSON.stringify({ "_id": params.id })
  }

  useEffect(async () => {
    let DataDetail = await axios(config).then(response => response.data.result).catch(err => false)
    console.log(DataDetail)
    if ( dataDetail === null ) {
      setDataDetail(DataDetail)
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
          <img src="/images/internal-news/Wokee+.png" alt="" />
        </div>
        <div className="body" style={{ textAlign: "justify"}}>
          <p>
            { dataDetail ? dataDetail.description : null }
          </p>
          <p>
          Nantinya nasabah dapat melakukan pembayaran secara non tunai di berbagai gerai merchant yang sudah memiliki kerjasama dengan KB Bukopin. 
          </p>
        </div>
      </div>
      {/* News Update */}
      <div className="list-news">
        <h3 className="header-list">News Update</h3>
        <div className="row">
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/Customer Gathering.png" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  KB Bukopin Gelar Serangkaian Customer Gathering Di 6 Kota
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex" style={{ justifyContent: "center"}}>
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/Rebranding.png" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Sosialisasi Rebranding KB Bukopin
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/RUPS.png" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Rapat Umum Pemegang Saham Luar Biasa PT Bank KB Bukopin Tbk
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
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
