import DatePicker from 'react-date-picker'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';

const ReportsDownload = () => {
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
        <span className="title">Reports Download</span>

        <div className="mb-3 row" style={{marginLeft:"10px"}}>
          <label className="col-sm-2 col-form-label">Period</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="month"
            />
          </div>
          <div className="mt-3 mb-3 row" style={{marginLeft:"0px"}}>
          <label className="col-sm-2 col-form-label">Report Type</label>
          <div className="col-sm-5">
            <select className="form-select input-custom">
              <option disabled>Choose Reports</option>
              <option value="1">Service Reporting</option>
              <option value="2">DOTI's Monthly Report</option>
              <option value="3">DSTA's Monthly Report</option>
              <option value="4">DPTI's Monthly Report</option>
            </select>
          </div>
        </div>

          <div className="col-sm-2 text-end" style={{marginLeft:"450px"}}>
            <button onClick={OnClickSearch} 
            className="btn btn-warning">Search</button>
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
                <div className="content" >
                <a href="http://" className="file-name" target="_blank" rel="noopener noreferrer">
                    Monthly Report.PDF
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReportsDownload