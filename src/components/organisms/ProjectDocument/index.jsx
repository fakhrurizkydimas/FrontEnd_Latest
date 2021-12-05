import DatePicker from 'react-date-picker'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';
const ProjectDocument = () => {
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
        <span className="title">Project Document</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Document</label>
          <div className="col-sm-6">
            <select className="form-select input-custom">
              <option disabled>Choose Regulation</option>
              <option value="1">SPK</option>
              <option value="2">PKS</option>
              <option value="3">Adendum</option>
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
          <label className="col-sm-2 col-form-label">Vendor</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Vendor Name" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Document Title" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Number</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Document Number" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6 text-end">
            <button onClick={OnClickSearch} className="btn btn-warning">Search</button>
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
             Perjanjian Pemeliharaan Aplikasi Swift Aliance pada Server Production, Server Backup dan Server Disaster Recovery.PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDocument
