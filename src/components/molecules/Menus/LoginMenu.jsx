import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import './LoginMenu.scss'

function LoginMenu(props) {
  const [usernameData, setUsernameData] = useState(null)
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    console.log(props)
    let cookie = readCookie('dataUser')
    if ( cookie !== null ) {
      console.log(JSON.parse(cookie).result.username)
      setLoginStatus(true)
      setUsernameData(JSON.parse(cookie).result.username)
    } else {
      setLoginStatus(false)
    }
  })

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

  // refference: https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
  const deleteAllCookies = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const handleSignout = () => {
    setLoginStatus(false)
    setUsernameData({})    
    deleteAllCookies()
    window.location.href = "/home";
  }

  return (
    <div className="child-menu" >
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="item">
        <div className="title-view row" >
          <div className="title">PT. Bank KB Bukopin</div>
        </div>
        <div className="info row">
          <div className="prof-view col-lg-6">
            <img src="../Profpictlarge.png" alt="" className="img-auth" />
          </div>
          <div className="login-info col-lg-6">
            <span className="item-link">{usernameData}</span>
            <span className="item-link">email@bukopin.co.id</span>
            <span className="item-link">Divisi</span>
          </div>
        </div>
        
        <div>
          <button className="btn-signout" onClick={handleSignout}>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default LoginMenu