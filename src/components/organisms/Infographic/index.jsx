import DatePicker from 'react-date-picker'
import { useState } from 'react'
const Infographic = () => {
  const [value, onChange] = useState(new Date());
  const [values, onChanges] = useState(new Date());
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
        <span className="title">Visitor Infographic</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Periode Start</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="month"
            />
          </div>
          <label className="col-sm-1 col-form-label" style={{marginLeft: "40px"}}>Until</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChanges}
              value={values}
              maxDetail="month"
            />
          </div>
          <div className="col-sm-2 text-end">
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
                    <img style={{marginLeft: "200px"}} src="/images/Infographic/Graphic.png" className="image" alt="" />
                    <img style={{marginLeft: "350px",marginTop: "50px"}}src="/images/Infographic/Chart.png" className="image" alt="" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infographic
