import DatePicker from 'react-date-picker'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';

const AuditFindings = () => {
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
        <span className="title">Audit Findings Summary</span>

        <div className="mb-3 row" style={{marginLeft:"10px"}}>
          <label className="col-sm-2 col-form-label">Period</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="year"
            />
          </div>
          <div className="mt-3 mb-3 row" style={{marginLeft:"0px"}}>
          <label className="col-sm-2 col-form-label">Audit Type</label>
          <div className="col-sm-5">
            <select className="form-select input-custom">
              <option disabled>Choose Audit</option>
              <option value="1">Internal</option>
              <option value="2">External</option>
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
        <div className="lists">
          <div className="item-result d-flex">
            <div className="content" style={ searchOK ? { display: 'block' } : { display: 'none' }}>
              <img style={{marginLeft:"15px", marginBottom:"25px"}} src="/images/Dashboard/Audit Findings/Graphic.png" className="image" alt="" />
              <img style={{marginLeft:"15px"}} src="/images/Dashboard/Audit Findings/Bar.png" className="image" alt="" />
              <img style={{marginLeft:"70px"}} src="/images/Dashboard/Audit Findings/Pie Chart.png" className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditFindings