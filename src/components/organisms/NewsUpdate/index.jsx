import { ExpandMore } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
import './NewsUpdate.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

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

const NewsUpdate = () => {
  const [data, setData] = useState(null)
  let config = {
      url: 'http://localhost:3031/viewnews/search/params?page=1&maxData=6',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
      }, 
  }

  useEffect( async () => {
    let DataServer = await axios(config).then(response => response.data).catch(err => false)
    console.log(DataServer)
    if ( data === null ) {
      setData(DataServer)
    }
  })

   
  return (
    <div className="news">
      <div className="headline">
        <div className="row">
          <div className="col-lg-9">
            <div className="head-news">
              <div className="image-wrapper">
                <img src={ data ? `http://localhost:3031/${data.result[0].images}` : '' } alt={ data ? data.result[0].title : '' } className="head-image" />
              </div>
              <Link to="/news/update/news-detail">
                <div className="text-wrapper">
                  <h2 className="title">
                    { data ? data.result[0].title : null }
                  </h2>
                  <span className="published-at">{ data ? Date(data.result[0].date).substring(0, 15) : null }</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="ads-wrapper" style={{ marginLeft: "10px" }}>
              <a href="https://www.bukopin.co.id/" className="ads-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/Promotion Image/Promotion 1.png" alt="" className="add-banner img-fluid" />
              </a>
              <a href="https://www.bukopin.co.id/" className="ads-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/Promotion Image/Promotion 2.png" alt="" className="add-banner img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="list-news">
              <h4 className="header-list" style={{ fontWeight: "bold"}}>News Update</h4>
              {
                data ? 
                data.result.map((res, i) => {
                  if ( i > 0 ) {
                    return(
                      <NewsItem
                        link={ `/news/update/${ res._id }`}
                        title={ res.title }
                        publishedAt={ Date(res.date).substring(0, 15) }
                        thumbnail={ `http://localhost:3031/${res.images}`}
                      />
                    )
                  }
                }) : null
              }
              {/* <NewsItem
                link="/news/update/news-detail"
                title="KB Bukopin Gelar Serangkaian Customer Gathering di 6 Kota"
                publishedAt="30 Maret 2021"
                thumbnail="/images/internal-news/Customer Gathering.png"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/update/news-detail"
                title="Sosialisasi Rebranding KB Bukopin"
                publishedAt="23 Februari 2021"
                thumbnail="/images/internal-news/Rebranding.png"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/update/news-detail"
                title="Rapat Umum Pemegang Saham Luar Biasa PT Bank KB Bukopin Tbk"
                publishedAt="22 Desember 2020"
                thumbnail="/images/internal-news/RUPS.png"
              /> */}
              <div className="text-center">
                <div className="d-flex flex-column align-items-center more">
                  More
                  <ExpandMore />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="list-news">
              <div className="popular-header mb-3">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/YpyWJvIo7o8?rel=0" title="YouTube video" allowFullScreen></iframe>
                </div>
              </div>
              <h4 className="header-list" style={{ fontWeight: "bold"}}>Most Popular</h4>
              <NewsPopular
                title="Wokee+ KB Bukopin Adopsi Sistem Pembayaran Dengan Sistem Scan Barcode"
                number="01"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="KB Bukopin Gelar 
                Serangkaian Customer 
                Gathering Di 6 Kota"
                number="02"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="Sosialisasi Rebranding
                KB Bukopin"
                number="03"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="Rapat Umum Pemegang 
                Saham Luar Biasa 
                PT Bank KB Bukopin Tbk"
                number="04"
                link="/news/update/slug-atau-judul-unik"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsUpdate
