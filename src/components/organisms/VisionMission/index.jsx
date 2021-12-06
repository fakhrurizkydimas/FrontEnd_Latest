import './VisionMission.scss'
import axios from 'axios'

const VisionMission = () => {
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
        <div className="view">
            <div className="visionmission-view">
                <h2 className="header">IT Group Vision</h2>
                <span className="text">
                Menjadi mitra strategis dan bersinergi dengan seluruh stakeholder yang menginspirasi kemajuan bank melalui inovasi tanpa henti
                </span>
                <h2 className="header">IT Group Mission</h2>
                <span className="text">
                Memberikan solusi dan menawarkan kapabilitas baru dalam rangka peningkatan kinerja bank melalui penerapan TI yang berkualitas
                </span>
            </div>
        </div>
    )
}

export default VisionMission