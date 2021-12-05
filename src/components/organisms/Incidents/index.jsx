import DatePicker from 'react-date-picker'
import { useState } from 'react'
const Incidents = () => {
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
        <span className="title">Incidents Summary</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Period</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
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
                        <img style={{ marginLeft: "200px"}} src="/images/Dashboard/Incidents/Graphic.png" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Incidents