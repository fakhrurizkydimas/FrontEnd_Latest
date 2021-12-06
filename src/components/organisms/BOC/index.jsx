import { Row,Col } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const BOC = () => {
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
    <div className="news">
      <div className="news-update row">
        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Bo Youl Oh.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Bo Youl Oh</h2>
          <span className="title-jabatan">Komisaris Utama Independent</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Komisaris Independen - PT Bank Bukopin Tbk</p>
          <p>- Senior Executive Vice President - KB Bukopin</p>
          <p>- Senior Managing Director - KB Kookmin Bank</p>
          <p>- Head of Credit Analyst Division - KB Kookmin Bank</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Sapto Amal Damandari.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Sapto Amal Damandari</h2>
          <span className="title-jabatan">Wakil Komisaris Utama Independent</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Ketua Komte Audit - Universitas Gadjah mada</p>
          <p>- Komisaris Independen = PT Bank Bukopin</p>
          <p>- Direktur Utama - SAO Advisory</p>
          <p>- Komisaris Utama = PT Jasa Marga (Persero)</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Nam Hoon Cho.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Nam Hoon Cho**</h2>
          <span className="title-jabatan">Komisaris</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Head of Global Business Group/Senior Managing Director - KB Kookmin Bank</p>
          <p>- Chief Global Strategy Officer - KB Financial Group</p>
          <p>- Managing Director - KB Securities</p>
          <p>- Managing Director - KB Investment & Securities</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Nanang Supriyanto.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Nanang Supriyanto*</h2>
          <span className="title-jabatan">Komisaris</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Direktur Utama - PT. Satu Gen Indonesia</p>
          <p>- Direktur - PT. Bosowa Corporindo</p>
          <p>- Direktur - PT. Bosowa Beton Indonesia</p>
          <p>- RCR Manager - PT. Bank Mandiri (Persero) Tbk</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Susiwijono.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Susiwijono***</h2>
          <span className="title-jabatan">Komisaris</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Sekretaris Kementrian Koordinator Bidang Perekonomian</p>
          <p>- Staf Ahli Menteri - Kementrian Keuangan</p>
          <p>- Direktur Penerimaan dan Peraturan Kepabeanan dan Cukai</p>
          <p>   Ditjen Bea dan Cukai - Kementrian Keuangan</p>
          <p>- Kepala Subdirektorat Otomasi Sistem dan Prosedur</p>
          <p>   Ditjen Bea dan Cukai - Kementrian Keuangan</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Stephen Liestyo.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Stephen Liestyo</h2>
          <span className="title-jabatan">Komisaris</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Presiden Komisaris - PT. Sol Mitra Fintec</p>
          <p>- Presiden Komisaris - PT. Prismalink International</p>
          <p>- Direktur Konsumer Banking - PT. Bank Maybank Indonesia</p>
          <p>- Komisaris - PT. BCA Finance</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Hae Wang Lee.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Hae Wang Lee**</h2>
          <span className="title-jabatan">Komisaris Independen</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Member Board of Directors in Korean Association of Indonesia</p>
          <p>- Presiden Director - LEENOH Consulting Indonesia</p>
          <p>- Foreign Lawyer of MRS&Partners Law Firm Jakarta</p>
          <p>- Lawyer of APEX LLC, Head of Jakarta Apex Office</p>
        </div>
        <div className="border"></div>

        <div md="6" className="image-wrapper col-sm-4">
          <img src="/images/internal-news/Board of Commisioner/Tippy Joesoef.png" className="image" alt="" />
        </div>
        <div md="6" className="header mt-5 col-sm-8">
          <h2 className="name">Tippy Joesoef</h2>
          <span className="title-jabatan">Komisaris Independen</span>
          <p></p>
          <span className="title">Pengalaman :</span>
          <p></p>
          <p>- Chief Governance, Risk and Compliance (GRC) Office - Fazz Finance Group/Payfazz</p>
          <p>- Independent Audit Commitee - AIA Financial</p>
          <p>- Executive Director, Country Risk Management Head - PT Bank UOB Indonesia</p>
          <p>- Senior Vice President, Global Consumer Group - Citibank, N.A</p>
        </div>
      </div>

      <div className="list-news">
        <p className="title">* Efektif setelah mendapat persetujuan OJK</p>
        <p className="title">** Efektif sejak ditetapkan oleh Perseroan setelah memenuhi semua persyaratan yang diatur dalam POJK No.27/POJK.03/2016; POJK No.37/POJK.03/2017 dan/atau Peraturan Perundang-undangan lainnya yang berlaku</p>
      </div>
    </div>
  )
}

export default BOC