import { useEffect, useState } from 'react';
import { dummyFiles } from '../../../dummy-data/data-it';
import { TableForm } from '../../molecules';

// DUMMY ( NANTI FETCH DATA FROM API)
import './ITForm.scss';


const ITForm = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(dummyFiles)
  }, [data])
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
