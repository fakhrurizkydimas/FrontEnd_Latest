import DatePicker from 'react-date-picker'
import { useState } from 'react'
import axios from 'axios'

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
