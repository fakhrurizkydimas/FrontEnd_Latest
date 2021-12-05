import { ArrowBackIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ExpandMore } from '@material-ui/icons'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'
const NationalUpdateDetail = () => {
  return (
    <div className="news detail">
      <div className="list-news">
        <div className="d-flex align-items-center">
        <Link to="/news/nationalupdate/"><ArrowBackIos /></Link>
        <h3 className="title m-2" style={{ fontWeight: "bold" }} >Wokee+ KB Bukopin Adopsi Sistem Pembayaran Dengan Sistem Scan Barcode</h3> 
        </div>
        <span className="published-at" style={{ marginLeft: "30px" }}>12 Mei 2021</span>
        <div className="image-wrapper my-3">
          <img src="/images/external-news/External News-National Update/Penerbangan.jpeg" alt="" />
        </div>
        <div className="body" style={{ textAlign: "justify"}}>
          <p>
            <b>Jakarta, 22 Desember 2020</b> – KB Bukopin secara resmi memperkenalkan sistem pembayaran berbasis scan barcode (QRISS) pada aplikasi tabungan digital Wokee+. Setelah serangkaian uji coba, kini nasabah dapat menikmati kemudahan transaksi pembayaran menggunakan scan barcode pada aplikasi Wokee+.
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
                <img src="/images/external-news/External News-National Update/Penerbangan.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                Kemenkes Imbau Ortu Lengkapi Imunisasi Sebelum Beri Anak Vaksin Covid
                </span>
                <span className="time-publised">16 November 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex" style={{ justifyContent: "center"}}>
            <div className="kb-card" >
              <div className="image-wrapper">
                <img src="/images/external-news/External News-National Update/Vaksin Anak.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                    Tren Pasien Covid Rawat Inap di Wisma Atlet Jakarta Alami Kenaikan
                </span>
                <span className="time-publised">17 November 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/external-news/External News-National Update/Wisma.jpeg" className="image img-fluid" alt="" />
              </div>
              <div className="body">
                <span className="title">
                    Sebulan Banjir Sintang :  25 Ribu Orang Mengungsi, Listrik Padam
                </span>
                <span className="time-publised">16 November 2021</span>
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

export default NationalUpdateDetail
