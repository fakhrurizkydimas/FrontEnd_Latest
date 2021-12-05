import { ExpandMore } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
import './NationalUpdate.scss'
const NationalUpdate = () => {
  return (
    <div className="news">
      <div className="headline">
        <div className="row">
          <div className="col-lg-9">
            <div className="head-news">
                <Link to="/news/nationalupdate/national-update-detail">
              <div className="image-wrapper">
                <img src="/images/external-news/External News-National Update/Headline News with Glassmorphism.png" alt="" className="head-image" />
              </div>
              {/* <Link to="/news/update/news-detail">
                <div className="text-wrapper" style={{ textAlign: "justify"}}>
                  <h2 className="title" >
                    Rupiah Perkasa ke Rp.14.277 di Akhir Pekan
                  </h2>
                  <span className="published-at">12 Mei 2021</span>
                </div> */}
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
              <NewsItem
                link="/news/nationalupdate/national-update-detail"
                title="Kemenkes Imbau Ortu Lengkapi Imunisasi Sebelum Beri Anak  Vaksin Covid"
                publishedAt="16 November 2021"
                thumbnail="/images/external-news/External News-National Update/Penerbangan.jpeg"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/nationalupdate/national-update-detail"
                title="Tren Pasien Covid Rawat Inap di Wisma Atlet Jakarta Alami Kenaikan"
                publishedAt="17 November 2021"
                thumbnail="/images/external-news/External News-National Update/Vaksin Anak.jpeg"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/nationalupdate/national-update-detail"
                title="Sebulan Banjir Sintang :  25 Ribu Orang Mengungsi, Listrik Padam"
                publishedAt="16 November 2021"
                thumbnail="/images/external-news/External News-National Update/Banjir.jpeg"
              />
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
              <h4 className="header-list mb-2" style={{ fontWeight: "bold"}}>Most Popular</h4>
              <NewsPopular
                title="Pakar : Jarigen 5G di Indonesia Tidak Akan Ganggu Penerbangan"
                number="01"
                link="/news/nationalupdate/national-update-detail"
              />
              <NewsPopular
                title="Kemenkes Imbau Ortu Lengkapi Imunisasi Sebelum Beri Anak  Vaksin Covid"
                number="02"
                link="/news/nationalupdate/national-update-detail"
              />
              <NewsPopular
                title="Tren Pasien Covid Rawat Inap di Wisma Atlet Jakarta Alami Kenaikan"
                number="03"
                link="/news/nationalupdate/national-update-detail"
              />
              <NewsPopular
                title="Sebulan Banjir Sintang :  25 Ribu Orang Mengungsi, Listrik Padam"
                number="04"
                link="/news/nationalupdate/national-update-detail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NationalUpdate
