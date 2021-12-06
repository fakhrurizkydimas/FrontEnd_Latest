import DatePicker from 'react-date-picker'
import { useState } from 'react'
import axios from 'axios'

const Infographic = () => {
  const [fromDate, onFromDate] = useState(new Date());
  const [endDate, onEndDate] = useState(new Date());

  const OnClickSearch = async (e) => {
    if ( e._reactName === 'onClick' ) {
      console.log(e)
    } else if ( e._reactName === 'onKeyDown' ) {
      if ( e.key === 'Enter' ) {
        let NewFormData = new FormData()
        NewFormData.append('username', document.querySelector('#data-username').value)
        NewFormData.append('division', document.querySelector('#data-division').value)
        NewFormData.append('from', fromDate)
        NewFormData.append('end', endDate)
        let config = {
          url: 'http://localhost:3031/infographics/detect/params',
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
          },
          data: NewFormData
        }
        
        await axios(config).then(response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })
        
      }
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
          <label className="col-sm-2 col-form-label">username</label>
          <div className="col-sm-6">
            <input onKeyDown={ OnClickSearch } type="text" id="data-username" className="form-control input-custom" placeholder="username" />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">division</label>
          <div className="col-sm-6">
            <input onKeyDown={ OnClickSearch } type="text" id="data-division" className="form-control input-custom" placeholder="division" />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Periode Start</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onFromDate}
              value={fromDate}
              maxDetail="month"
            />
          </div>
          <label className="col-sm-1 col-form-label" style={{marginLeft: "40px"}}>Until</label>
          <div className="col-sm-2">
            <DatePicker
              className="custom-input-date"
              onChange={onEndDate}
              value={endDate}
              maxDetail="month"
            />
          </div>
          <div className="col-sm-2 text-end">
            <button onClick={ OnClickSearch } 
            className="btn btn-warning">Search</button>
          </div>
        </div>
    </div>

    <div className="result-search">
        <div className="title">Result</div>
            <div className="lists">
                <div className="item-result d-flex">
                  {/* <div className="content" style={ searchOK ? { display: 'block' } : { display: 'none' }}>
                    <img style={{marginLeft: "200px"}} src="/images/Infographic/Graphic.png" className="image" alt="" />
                    <img style={{marginLeft: "350px",marginTop: "50px"}}src="/images/Infographic/Chart.png" className="image" alt="" />
                  </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infographic
