import { ArrowBackIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ExpandMore } from '@material-ui/icons'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
import './FinancialUpdate.scss'

const FinancialUpdateDetail = () => {
  return (
    <div className="news detail">
      <div className="list-news">
        <div className="d-flex align-items-center">
        <Link to="/news/update"><ArrowBackIos /></Link>
        <h3 className="title m-2" style={{ fontWeight: "bold" }} >Rupiah Perkasa ke Rp.14.277 di Akhir Pekan</h3> 
        </div>
        <span className="published-at" style={{ marginLeft: "30px" }}>12 November 2021</span>
        <div className="image-wrapper my-3">
          <img src="/images/external-news/External News-Financial Update/Financial Update.jpeg" alt="" />
        </div>
        <div className="body" style={{ textAlign: "justify"}}>
          <p>
            <b>Jakarta, CNN Indonesia</b> -- Nilai tukar rupiah berada di level Rp14.219 per dolar AS pada Jumat (12/11) sore. Posisi ini menguat 58 poin atau 0,41 persen dari Rp14.277 per dolar AS.
                Sementara kurs referensi Bank Indonesia (BI), Jakarta Interbank Spot Dollar Rate (Jisdor) yang menempatkan rupiah di posisi Rp14.243 per dolar AS atau menguat dari Rp14.288 per dolar AS pada Selasa kemarin.          </p>
          <p>
            Sementara, mayroitas mata uang di Asia menguat terhadap dolar AS. Tercatat, won Korea Selatan menguat 0,12 persen, baht Thailand menguat 0,18 persen, yen Jepang menguat 0,03 persen, peso Filipina menguat 0,59 persen, dolar Singapura menguat 0,05 persen, dan ringgit Malaysia menguat 0,13 persen.
          </p>
          <p>
          Sementara, sebagian besar mata uang di negara maju yang melemah terhadap dolar AS. Dolar Kanada melemah 0,06 persen, euro Eropa melemah 0,03 persen, franc Swiss melemah 0,05 persen.
          </p>
          <p>
            Kemudian, dolar Australia menguat 0,12 persen, dan poundsterling Inggris menguat 0,16 persen
          </p>
          <p>
            Senior Analyst DC Futures Lukman Leong mengatakan rupiah terbilang cukup kokoh terhadap dolar AS setelah rilis data inflasi AS yang cukup tinggi.
          </p>
          <p>
          "Konsensus pasar terhadap neraca perdagangan yang akan dirilis Senin depan juga mengharapkan rekor surplus US$5,3 miliar," kata Lukman kepada CNNIndonesia.com.
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
                <img src="/images/external-news/External News-Financial Update/ECommerce.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  88,1% Pengguna Internet Belanja dengan E-Commerce
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/external-news/External News-Financial Update/loan.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Subsidi Kredit Perumahan Paling Banyak Dinikmati Milenial
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/external-news/External News-Financial Update/emas.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Harga Emas Antam Hari Ini 15 November, Mandek Rp955 Ribu per Gram
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

export default FinancialUpdateDetail
