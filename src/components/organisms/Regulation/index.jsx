import DatePicker from 'react-date-picker'
import './Regulation.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { PictureAsPdf } from '@material-ui/icons';

const Regulation = () => {
  const [value, onChange] = useState(new Date());
  const [searchOK, setsearchOK] = useState(false)

  const OnClickSearch = () => {
    if ( searchOK === '' ) {
      setsearchOK(true)
    } else {
      setsearchOK('Error')
    }
  }

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

  const InfographicsSave = async () => {
    let configRecord = {
      url: 'http://localhost:3031/infographics/detect',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
      },

      data: JSON.stringify({ urlpath: window.location.pathname })
    }

    let InfoGraphicsRecord = await axios(configRecord).then(response => { console.log(response); return true}).catch(err => false)
    if ( !InfoGraphicsRecord ) return false
    if ( InfoGraphicsRecord ) return true
  }

  InfographicsSave()

  return (
    <div className="form-wrapper">
      <div className="image-wrapper">
        <img src="/images/internal-news/Header Banner.png" className="image" alt="" />
      </div>

      <div className="form-search">
        <span className="title">Regulation Search</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Regulation</label>
          <div className="col-sm-6">
            <select className="form-select input-custom">
              <option disabled>Choose Regulation</option>
              <option value="1">Undang-undang</option>
              <option value="2">Peraturan OJK</option>
              <option value="3">Surat Edaran OJK</option>
              <option value="4">Peraturan Bank Indonesia</option>
              <option value="5">Surat Bank Indonesia</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Year</label>
          <div className="col-sm-6">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="decade"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Title" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Number</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Regulation Number" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6 text-end">
            <button onClick={ OnClickSearch } className="btn btn-warning">Search</button>
          </div>
        </div>
      </div>
      <div className="result-search">
        <div className="title">Result</div>
        <div className="lists" style={ searchOK ? { display: 'block' } : { display: 'none' }}>
          <div className="item-result d-flex">
            <div className="icons-file me-3">
              <PictureAsPdf />
            </div>
            <div className="content">
              <a href="https://www.ojk.go.id/id/regulasi/Documents/Pages/Bank-Umum/POJK%2012%20-%2003%20-2021.pdf" className="file-name" target="_blank" rel="noopener noreferrer">
              POJK 12-03-2021.PDF
              </a>
              <p>
              Peraturan Otoritas Jasa Keuangan Nomor 12/POJK.03/2021 tentang Bank Umum
              </p>
              <div className="d-flex">
                <div className="note">Notes : </div>
                Peraturan Otoritas Jasa Keuangan ini mulai berlaku setelah  3 (tiga) bulan terhitung sejak tanggal diundangkan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regulation
