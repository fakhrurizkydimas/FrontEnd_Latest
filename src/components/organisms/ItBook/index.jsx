import { ArrowDownward, Search } from "@material-ui/icons";
// import { FileDownloadIcon } from '@mui/icons-material/FileDownload';
import { useParams } from "react-router"

const ItBook = () => {
  const params = useParams()
  const bookId = params.id;
  const BookList = () => {
    // GET DATA DARI BACKEND JIKA MAU D BUAT STATIS TINGAL TAMBAH BookID nya lalu return komponen
    if(bookId === 'book-1'){
      return (
        <>
        <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>IT Governance</h3>
        {/* POLICY - BOOK-1*/}
        <div className="wrapper-page table-wrapper mb-3">
          <h3 className="title">Policy</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-sm">
              <thead>
                <tr>
                  <th className="text-center num">
                    <div className="th-cell">#</div>
                  </th>
                  <th className="text-center action">
                    <div className="th-cell">Number</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">1</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>101/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Tata Kelola Teknologi Informasi</div>
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
                    <div className="td-sell action" style={{ justifyContent: "center"}}>102/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Komite Pengarah Teknologi Informasi</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">3</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>103/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Komite Support Teknologi Informasi</div>
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
                    <div className="td-sell">4</div>
                  </td>
                  <td>
                    <div className="td-sell action" style={{ justifyContent: "center"}}>104/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Klasifikasi Informasi</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">5</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>105/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Pengendalian Dokumen dan Rekaman</div>
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
                    <div className="td-sell">6</div>
                  </td>
                  <td>
                    <div className="td-sell action" style={{ justifyContent: "center"}}>106/K-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Penyelenggaraan TI untuk Layanan Perbankan Elektronik dan Digital</div>
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
              </tbody>
            </table>
          </div>
        </div>
        {/* PROCEDURE - BOOK-1*/}
        <div className="wrapper-page table-wrapper mb-3">
          <h3 className="title">Procedure</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-sm">
              <thead>
                <tr>
                  <th className="text-center num">
                    <div className="th-cell">#</div>
                  </th>
                  <th className="text-center action">
                    <div className="th-cell">Number</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">1</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>101-A/P-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Verifikasi Kontrol Internal</div>
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
                    <div className="td-sell action" style={{ justifyContent: "center"}}>102-A/P-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Tindakan Perbaikan & Pencegahan</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">3</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>103-A/P-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Pengendalian Dokumen</div>
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
                    <div className="td-sell">4</div>
                  </td>
                  <td>
                    <div className="td-sell action" style={{ justifyContent: "center"}}>104-A/P-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Pengendalian Rekaman</div>
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
              </tbody>
            </table>
          </div>
        </div>
        {/* STANDARD - BOOK-1*/}
        <div className="wrapper-page table-wrapper mb-3">
          <h3 className="title">Standard</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-sm">
              <thead>
                <tr>
                  <th className="text-center num">
                    <div className="th-cell">#</div>
                  </th>
                  <th className="text-center action">
                    <div className="th-cell">Number</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">1</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>105-A/S-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Penulisan Dokumen GTI</div>
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
                    <div className="td-sell action" style={{ justifyContent: "center"}}>105-B/S-ITGV/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Retensi Dokumen, Rekaman, dan Data GTI</div>
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
              </tbody>
            </table>
          </div>
        </div>
        </>
      )
    }
    if(bookId === 'book-2'){
      return (
        <>
        {/* POLICY - BOOK-2*/}
        <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>IT Strategic Plan</h3>
        <div className="wrapper-page table-wrapper mb-3">
          <h3 className="title">Policy</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-sm">
              <thead>
                <tr>
                  <th className="text-center num">
                    <div className="th-cell">#</div>
                  </th>
                  <th className="text-center action">
                    <div className="th-cell">Number</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">1</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>201/K-ITSP/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">IT Strategic Plan 2022-2024</div>
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
              </tbody>
            </table>
          </div>
        </div>
        {/* STANDARD - BOOK-2*/}
        <div className="wrapper-page table-wrapper mb-3">
          <h3 className="title">Standard</h3>
          <div className="table-responsive">
            <table className="table table-borderless table-sm">
              <thead>
                <tr>
                  <th className="text-center num">
                    <div className="th-cell">#</div>
                  </th>
                  <th className="text-center action">
                    <div className="th-cell">Number</div>
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
                <tr>
                  <td className="num">
                    <div className="td-sell">1</div>
                  </td>
                  <td>
                    <div className="td-sell" style={{ justifyContent: "center"}}>201-A/S-ITSP/GTI</div>
                  </td>
                  <td>
                    <div className="td-sell">Arsitektur TI Delivery Channel</div>
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
              </tbody>
            </table>
          </div>
        </div>
        </>
      )
    }
    if(bookId === 'book-3'){
        return (
          <>
          <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>IT Service Management</h3>
          {/* POLICY - BOOK-3*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Policy</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301/K-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Layanan Teknologi Informasi</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>302/K-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Kebijakan Penyediaan Jasa TI oleh Bank</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* PROCEDURE - BOOK-3 */}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Procedure</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-A/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Permintaan Layanan / Laporan Insiden Melalui Layanan & Dukungan TI</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-B/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Permintaan Layanan Melalui Aliansi Bisnis & Analisa Sistem</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">3</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-C/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penanganan Insiden Management oleh Tier 1</div>
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
                      <div className="td-sell">4</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-D/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penanganan Insiden Management oleh Tier 2</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">5</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-E/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penanganan Insiden Management oleh Tier 3</div>
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
                      <div className="td-sell">6</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-F/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penanganan Insiden Management Klasifikasi Proioritas Utama atau Prioritas 1</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">7</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-G/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengelolaan Problem (Problem Management)</div>
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
                      <div className="td-sell">8</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-H/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengelolaan Perubahan (Change Management)</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">9</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-I/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengelolaan Rilis (Release Management)</div>
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
                      <div className="td-sell">10</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-J/P-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Perancanaan Pengelolaan Konfigurasi</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* STANDARD - BOOK-3*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Standard</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-A/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Layanan Teknologi Informasi</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-B/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pemetaan Peran & Fungsi Organisasi ITSM</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">3</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-C/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Katalog Layanan Teknologi Informasi</div>
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
                      <div className="td-sell">4</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-D/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Formulir Manajemen Layanan Teknologi Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">5</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-E/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Versi Aplikasi / Layanan Teknologi Informasi</div>
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
                      <div className="td-sell">6</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>301-F/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Metode Pengembangan Aplikasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">7</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>301-H/S-ITSM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pejabat Struktural TI</div>
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
                </tbody>
              </table>
            </div>
          </div>
          </>
        )
    }
    if(bookId === 'book-4'){
        return (
          <>
          <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>Information Security Management System</h3>
          {/* POLICY - BOOK-4 */}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Policy</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401/K-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Sistem Manajemen Keamanan Informasi</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>402/K-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Risiko Teknologi Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">3</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>403/K-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penggunaan Aset Teknologi Informasi, Internet & Email</div>
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
                      <div className="td-sell">4</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>404/K-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengamanan & Penghancuran Media Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">5</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>405/K-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Key Manajemen</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* PROCEDURE - BOOK-4*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Procedure</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-A/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Awareness Keamanan Informasi</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-B/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengelolaan Akses User (User Access Management)</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">3</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-C/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Teleworking</div>
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
                      <div className="td-sell">4</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-D/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengelolaan Insiden Keamanan Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">5</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-E/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Penggunaan Lisensi Software & Hak Kekayaan Intelektual</div>
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
                      <div className="td-sell">6</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-F/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Akses Data Center</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">7</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-G/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Removable Media</div>
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
                      <div className="td-sell">8</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-H/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengendalian Source Code</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">9</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-I/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Firewall</div>
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
                      <div className="td-sell">10</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>402-A/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Risiko Teknologi Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">11</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>404-A/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pelabelan & Penanganan Informasi</div>
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
                      <div className="td-sell">12</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>405-A/P-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Key Manajemen</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* STANDARD - BOOK-4*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Standard</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-A/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pemetaan Tugas & Tanggung Jawa Organisasi Pengelola ISMS</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-B/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pengukuran Manajemen Risiko Teknologi Informasi</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">3</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-C/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Software Desktop - Laptop</div>
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
                      <div className="td-sell">4</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-D/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Statement of Applicability Manajemen Keamanan Informasi ISO/IEC 27001:2013</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">5</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-E/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Konfigurasi Keamanan Sistem Operasi Windows 2003 Server</div>
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
                      <div className="td-sell">6</div>
                    </td>
                    <td>
                      <div className="td-sell action" style={{ justifyContent: "center"}}>401-F/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Konfigurasi Keamanan Sistem Operasi Windows XP (Desktop, Laptop)</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">7</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>401-G/S-ISMS/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Konfigurasi Keamanan Sistem Operasi Unix</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* REKAMAN - BOOK-4 */}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Rekaman</h3>
            <div className="table-responsive">
                <table className="table table-borderless table-sm">
                <thead>
                    <tr>
                    <th className="text-center num">
                        <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                        <div className="th-cell">Number</div>
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
                    <tr>
                    <td className="num">
                        <div className="td-sell">1</div>
                    </td>
                    <td>
                        <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                    </td>
                    <td>
                        <div className="td-sell">Pengaktifan Fungsi Enkripsi dan Antivirus</div>
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
                </tbody>
                </table>
            </div>
            </div>
          </>
        )
    }

    if(bookId === 'book-5'){
        return (
          <>
          {/* POLICY - BOOK-5*/}
          <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>IT Service Continuity Management</h3>
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Policy</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>501/K-ITSCM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Kelangsungan Layanan Teknologi Informasi</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* PROCEDURE - BOOK-5*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Procedure</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>501-A/P-ITSCM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Kelangsungan Layanan Teknologi Informasi</div>
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
                </tbody>
              </table>
            </div>
          </div>
            {/* STANDARD - BOOK-5 */}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Standard</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>501-A/S-ITSCM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Pemetaan Peran & Fungsi Organisasi ITSCM</div>
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
                      <div className="td-sell action" style={{ justifyContent: "center"}}>501-B/S-ITSCM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Formulir Business Impact Analysis</div>
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
                </tbody>
              </table>
            </div>
          </div>
        {/* REKAMAN - BOOK-5 */}
        <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Rekaman</h3>
            <div className="table-responsive">
                <table className="table table-borderless table-sm">
                <thead>
                    <tr>
                    <th className="text-center num">
                        <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                        <div className="th-cell">Number</div>
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
                    <tr>
                        <td className="num">
                            <div className="td-sell">1</div>
                        </td>
                        <td>
                            <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                        </td>
                        <td>
                            <div className="td-sell">Business Impact Analysis</div>
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
                    <tr>
                        <td className="num">
                            <div className="td-sell">2</div>
                        </td>
                        <td>
                            <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                        </td>
                        <td>
                            <div className="td-sell">Minimum Operating Requirement (Contingency Plan)</div>
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
                    <tr>
                        <td className="num">
                            <div className="td-sell">3</div>
                        </td>
                        <td>
                            <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                        </td>
                        <td>
                            <div className="td-sell">Kritikalitas Layanan GTI</div>
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
                    <tr>
                        <td className="num">
                            <div className="td-sell">4</div>
                        </td>
                        <td>
                            <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                        </td>
                        <td>
                            <div className="td-sell">Contact List ITSCM</div>
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
                    <tr>
                        <td className="num">
                            <div className="td-sell">5</div>
                        </td>
                        <td>
                            <div className="td-sell" style={{ justifyContent: "center"}}>-</div>
                        </td>
                        <td>
                            <div className="td-sell">Daftar Vendor Supplier Pendukung</div>
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
                </tbody>
                </table>
            </div>
            </div>
          </>
        )
    }
    if(bookId === 'book-6'){
        return (
          <>
          {/* POLICY - BOOK-6*/}
          <h3 style={{ fontSize:"30px", fontWeight: "bold", color: "#7a7267" }}>IT Project Management</h3>
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Policy</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>601/K-ITPM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Proyek Teknologi Informasi</div>
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
                </tbody>
              </table>
            </div>
          </div>
          {/* PROCEDURE - BOOK-6*/}
          <div className="wrapper-page table-wrapper mb-3">
            <h3 className="title">Procedure</h3>
            <div className="table-responsive">
              <table className="table table-borderless table-sm">
                <thead>
                  <tr>
                    <th className="text-center num">
                      <div className="th-cell">#</div>
                    </th>
                    <th className="text-center action">
                      <div className="th-cell">Number</div>
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
                  <tr>
                    <td className="num">
                      <div className="td-sell">1</div>
                    </td>
                    <td>
                      <div className="td-sell" style={{ justifyContent: "center"}}>601/P-ITPM/GTI</div>
                    </td>
                    <td>
                      <div className="td-sell">Manajemen Proyek Teknologi Informasi</div>
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
                </tbody>
              </table>
            </div>
          </div>
          </>
        )
    }
 
    // DIPAKE HARUSNYA BUAT NGELOOPING
//     return (
//       <>
//       <div className="wrapper-page table-wrapper mb-3">
//         <h3 className="title">Policy</h3>
//         <div className="table-responsive">
//           <table className="table table-borderless table-sm">
//             <thead>
//               <tr>
//                 <th className="text-center num">
//                   <div className="th-cell">#</div>
//                 </th>
//                 <th className="text-center action">
//                   <div className="th-cell">Number</div>
//                 </th>
//                 <th className="text-center title">
//                   <div className="th-cell">Title</div>
//                 </th>
//                 <th className="text-center action">
//                   <div className="th-cell">Action</div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="num">
//                   <div className="td-sell">1</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">TEST</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">
//                     <button className="btn-table-action">
//                       <Search style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="btn-table-action">
//                       <ArrowDownward style={{ fontSize: "16px" }} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//               <tr className="light">
//                 <td className="num">
//                   <div className="td-sell">2</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">101/K-ITGV/GTI</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">
//                     <button className="btn-table-action">
//                       <Search style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="btn-table-action">
//                       <ArrowDownward style={{ fontSize: "16px" }} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="wrapper-page table-wrapper mb-3">
//         <h3 className="title">Procedure</h3>
//         <div className="table-responsive">
//           <table className="table table-borderless table-sm">
//             <thead>
//               <tr>
//                 <th className="text-center num">
//                   <div className="th-cell">#</div>
//                 </th>
//                 <th className="text-center action">
//                   <div className="th-cell">Number</div>
//                 </th>
//                 <th className="text-center title">
//                   <div className="th-cell">Title</div>
//                 </th>
//                 <th className="text-center action">
//                   <div className="th-cell">Action</div>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="num">
//                   <div className="td-sell">1</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">101/K-ITGV/GTI</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">
//                     <button className="btn-table-action">
//                       <Search style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="btn-table-action">
//                       <ArrowDownward style={{ fontSize: "16px" }} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//               <tr className="light">
//                 <td className="num">
//                   <div className="td-sell">2</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">101/K-ITGV/GTI</div>
//                 </td>
//                 <td>
//                   <div className="td-sell">Formulir Permohonan Layanan Site-To-Site VPN</div>
//                 </td>
//                 <td>
//                   <div className="td-sell action">
//                     <button className="btn-table-action">
//                       <Search style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="btn-table-action">
//                       <ArrowDownward style={{ fontSize: "16px" }} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       </>
//     )
   }
  return (
    <>
      {/* <h3 className="title">List of Form</h3> */}
      <BookList />
    </>
  )
}

export default ItBook
