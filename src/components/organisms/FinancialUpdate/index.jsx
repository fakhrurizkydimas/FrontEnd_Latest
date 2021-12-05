import { ExpandMore } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
import './FinancialUpdate.scss'
const FinancialUpdate = () => {
  return (
    <div className="news">
      <div className="headline">
        <div className="row">
          <div className="col-lg-9">
            <div className="head-news">
                <Link to="/news/financialupdate/financial-update-detail">
              <div className="image-wrapper">
                <img src="/images/external-news/External News-Financial Update/Headline News with Glassmorphism.png" alt="" className="head-image" />
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
                link="/news/update/news-detail"
                title="88,1% Pengguna Internet Belanja dengan E-Commerce"
                publishedAt="12 November 2021"
                thumbnail="/images/external-news/External News-Financial Update/Ecommerce.jpeg"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/update/news-detail"
                title="Subsidi Kredit Perumahan Paling Banyak Dinikmati Milenial"
                publishedAt="10 November 2020"
                thumbnail="/images/external-news/External News-Financial Update/loan.jpeg"
              />
              <Line width="100%" height="2px" bg="#DDD" m="20px 0"  />
              <NewsItem
                link="/news/update/news-detail"
                title="Harga Emas Antam Hari Ini 15 November, Mandek Rp955 Ribu per Gram"
                publishedAt="15 November 2021"
                thumbnail="/images/external-news/External News-Financial Update/emas.jpeg"
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
              <div className="popular-header mb-5">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/YpyWJvIo7o8?rel=0" title="YouTube video" allowFullScreen></iframe>
                </div>
              </div>
              <h4 className="header-list mb-5" style={{ fontWeight: "bold"}}>Most Popular</h4>
              <NewsPopular
                title="Rupiah Perkasa ke Rp.14.277 di Akhir Pekan"
                number="01"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="88,1% Pengguna Internet Belanja dengan E-Commerce"
                number="02"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="Subsidi Kredit Perumahan Paling Banyak Dinikmati Milenial"
                number="03"
                link="/news/update/slug-atau-judul-unik"
              />
              <NewsPopular
                title="Harga Emas Antam Hari Ini 15 November, Mandek Rp955 Ribu per Gram"
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

export default FinancialUpdate
