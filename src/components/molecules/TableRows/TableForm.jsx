import Search from "@material-ui/icons/Search"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import { Link } from "react-router-dom"


const TableForm = ({ data, light, num }) => {
  return (
    <tr className={`${light && 'light'}`}>
      <td className="num">
        <div className="td-sell">{num}</div>
      </td>
      <td>
        <div className="td-sell">{data.name}</div>
      </td>
      <td>
        <div className="td-sell action">
          {/* BASEURL + FILES LOCATION + NAME FILE */}
          <a href="http://localhost:3000/files/dummy.pdf" target="_blank" rel="noopener noreferrer" className="btn-table-action">
            <Search style={{ fontSize: "16px" }} />
          </a>
          <a href={data.fileUrl} className="btn-table-action" download>
            <ArrowDownward style={{ fontSize: "16px" }} />
          </a>
        </div>
      </td>
    </tr>
  )
}

export default TableForm
