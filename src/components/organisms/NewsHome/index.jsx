import { ExpandMore } from '@material-ui/icons'
import './NewsHome.scss'
import axios from 'axios'
import { keys } from '@material-ui/core/styles/createBreakpoints';


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

const NewsHome = () => {
    let config = {
        url: 'http://localhost:3031/viewnews',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
        }, 
    }

    console.log(config.headers)


    return (
        <div className="news">
            <div className="news-update">
                <div className="header row">
                    <div className="image-wrapper1 col-sm-9">
                        <img src="/images/external-news/External News-Financial Update/Headline News with Glassmorphism.png" className="image" alt="" />
                    </div>
                    <div className="image-wrapper2 col-sm-3">
                        <a href="https://www.bukopin.co.id/" className="ads-link" target="_blank" rel="noopener noreferrer">
                            <img src="/images/external-news/External News-Financial Update/Promotion Image/Promotion 1.png" className="image" alt="" />
                        </a>
                        <a href="https://www.bukopin.co.id/" className="ads-link" target="_blank" rel="noopener noreferrer">
                            <img src="/images/external-news/External News-Financial Update/Promotion Image/Promotion 2.png" className="image" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            {/* KOLOM KIRI */}
            <div className="duo-content row">
                <div className="list-news col-md-6">
                    <h3 className="header-list">News Update</h3>
                    <div className="news-box row">
                        <div className="kb-card col-sm-6">
                            <div className="image-wrapper">
                                <img src="/images/external-news/External News-Financial Update/Ecommerce.jpeg" className="image" alt="" />
                            </div>
                        </div>
                        <div className="body col-sm-6">
                            <span className="title">
                            {/* {banner.data.result[0].title} */}
                            </span>
                            <span className="time-publised">12 November 2021</span>
                        </div>
                        <div className="border"></div>

                        <div className="kb-card col-sm-6">
                            <div className="image-wrapper">
                                <img src="/images/external-news/External News-Financial Update/loan.jpeg" className="image" alt="" />
                            </div>
                        </div>
                        <div className="body col-sm-6">
                            <span className="title">
                            Subsidi Kredit Perumahan Paling Banyak Dinikmati Milenial
                            </span>
                            <span className="time-publised">10 November 2021</span>
                        </div>
                        <div className="border"></div>

                        <div className="kb-card col-sm-6">
                            <div className="image-wrapper">
                                <img src="/images/external-news/External News-Financial Update/emas.jpeg" className="image" alt="" />
                            </div>
                        </div>
                        <div className="body col-sm-6">
                            <span className="title">
                            Harga Emas Antam Hari Ini 15 November, Mandek Rp.955 Ribu per Gram
                            </span>
                            <span className="time-publised">15 November 2021</span>
                        </div>
                        <div className="border"></div>
                    </div>
                    
                    <div className="more">
                        <span className="text">More</span>
                        <ExpandMore />
                    </div>
                </div>

                {/* KOLOM KANAN */}
                <div className="list-popular col-md-5">
                    <div className="video-wrapper mb-5 ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/YpyWJvIo7o8?rel=0" title="YouTube video" allowfullscreen></iframe>
                        {/* <a href="https://www.youtube.com/watch?v=YpyWJvIo7o8">
                        <img src="/images/external-news/External News-Financial Update/Promotion Image/Video.png" className="image" alt="" />
                        </ a> */}
                    </div>
                    <h3 className="header-list">Most Popular</h3>
                    <div className="article-popular row">
                        <div className="urut col-sm-2">
                            01
                        </div>
                        <div className="body col-sm-8">
                            <span className="title">
                            Rupiah Perkasa ke Rp14.277 di Akhir Pekan
                            </span>
                        </div>
                    </div>
                    <div className="article-popular row">
                        <div className="urut col-sm-2">
                            02
                        </div>
                        <div className="body col-sm-8">
                            <span className="title">
                            Pengguna Internet Belanja dengan E-Commerce
                            </span>
                        </div>
                    </div>
                    <div className="article-popular row">
                        <div className="urut col-sm-2">
                            03
                        </div>
                        <div className="body col-sm-8">
                            <span className="title">
                            Subsidi Kredit Perumahan Paling Banyak Dinikmati Milenial
                            </span>
                        </div>
                    </div>
                    <div className="article-popular row">
                        <div className="urut col-sm-2">
                            04
                        </div>
                        <div className="body col-sm-8">
                            <span className="title">
                            Harga Emas Antam Hari Ini 15 November Mandek Rp.955 Ribu per Gram
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default NewsHome
