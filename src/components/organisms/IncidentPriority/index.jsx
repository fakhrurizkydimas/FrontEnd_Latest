import axios from 'axios'

const IncidentPriority = () => {
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
          <div className="result-search">
              <div className="title"></div>
                  <div className="lists">
                      <div className="item-result d-flex">
                          <div className="content">
                              <img style={{ marginLeft: "100px"}} src="/images/IT Information/Incident Priority.png" className="image" alt="" />
                          </div>
                      </div>
                  </div>
          </div>
      </div>
    )
  }
  
  export default IncidentPriority
  