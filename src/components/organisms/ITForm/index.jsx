import { useEffect, useState } from 'react';
import { dummyFiles } from '../../../dummy-data/data-it';
import { TableForm } from '../../molecules';
import axios from 'axios'

// DUMMY ( NANTI FETCH DATA FROM API)
import './ITForm.scss';


const ITForm = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(dummyFiles)
  }, [data])

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
    <div className="wrapper-page table-wrapper">
      <h3 className="title">List of Form</h3>
      <div className="table-responsive">
        <table className="table table-borderless table-sm">
          <thead>
            <tr>
              <th className="text-center num">
                <div className="th-cell">#</div>
              </th>
              <th className="text-center title">
                <div className="th-cell">Title</div>
              </th>
              <th className="text-center action">
                <div className="th-cell">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>(
                <TableForm
                key={item.id}
                data={item}
                num={index + 1}
                light={index % 2 === 0 ? true : false }
                />
              ))
            }
            {/* <tr>
              <td className="num">
                <div className="td-sell">1</div>
              </td>
              <td>
                <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
              </td>
              <td>
                <div className="td-sell action">
                  <button className="btn-table-action">
                    <Search style={{ fontSize: "16px" }} />
                  </button>
                  <button className="btn-table-action">
                    <ArrowDownward style={{ fontSize: "16px" }} />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="light">
              <td className="num">
                <div className="td-sell">2</div>
              </td>
              <td>
                <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
              </td>
              <td>
                <div className="td-sell action">
                  <button className="btn-table-action">
                    <Search style={{ fontSize: "16px" }} />
                  </button>
                  <button className="btn-table-action">
                    <ArrowDownward style={{ fontSize: "16px" }} />
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ITForm
