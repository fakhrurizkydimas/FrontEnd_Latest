import DatePicker from 'react-date-picker'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';
const Report = () => {
  const [value, onChange] = useState(new Date());
  const [searchOK, setsearchOK] = useState(false)

  const OnClickSearch = () => {
    if ( searchOK === '' ) {
      setsearchOK(true)
    } else {
      setsearchOK('Error')
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-search">
        <span className="title">Report Search</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Report</label>
          <div className="col-sm-6">
            <select className="form-select input-custom">
              <option disabled>Choose Report</option>
              <option value="1">Performance</option>
              <option value="2">Management</option>
              <option value="3">Cost</option>
              <option value="4">Financial</option>
              <option value="5">ALCO</option>
              <option value="6">Asset Quality</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Period</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="year"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Report Title" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6 text-end">
            <button onClick={ OnClickSearch }  className="btn btn-warning">Search</button>
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
              <a href="http://" className="file-name" target="_blank" rel="noopener noreferrer">
              SAMPEL.PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
