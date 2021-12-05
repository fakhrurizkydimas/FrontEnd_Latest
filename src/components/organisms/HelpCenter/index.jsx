import './HelpCenter.scss'
import ICChat from '../../../assets/ic_chat.png'
import HelpBG from '../../../assets/Background Help New.png'
import { CloseRounded, Visibility, VisibilityOff } from '@material-ui/icons'
import { useState } from 'react'


const HelpCenter = () => {
  const [openFrom, setOpenForm] = useState(false)
  const [inputType, setInputType] = useState('password');

  const togglePassword = () => {
    inputType === 'text' && setInputType('password')
    inputType === 'password' && setInputType('text')
  }

  return (
    <div className="container help-center">
      <div className="helpOpen" onClick={() => setOpenForm(!openFrom)}>
        <img className="ic_chat" src={ICChat} alt="" />
        <span className="text">Need help?</span>
      </div>
      {
        openFrom && <div className="helpForm">
          <img className="bg-form" src={HelpBG} alt="" />
          <div className="form">
              <span className="close" style={{marginLeft:'400px'}} onClick={() => setOpenForm(!openFrom)} >
                <CloseRounded />
              </span>
            <div className="header">
              <img src="/logo.png" alt="" className="logoHelp" />

            </div>
            <div className="body">
              <h5 className="title">Let Us to Know Your Problem</h5>
              <div className="form-group">
                <span className="label">NIP</span>
                <div className="input-wrapper">
                  <input type="text" placeholder="213901267" />
                </div>
              </div>
              <div className="form-group">
                <span className="label">Email</span>
                <div className="input-wrapper">
                  <input type="text" placeholder="nama@kbbukopin.com" />
                  {/* <span className="togglePassword" onClick={togglePassword}>
                    {
                      inputType === 'password' ? <VisibilityOff /> : <Visibility />
                    }
                  </span> */}
                </div>
              </div>
              <div className="form-group">
                <span className="label">Message</span>
                <div className="input-wrapper">
                  <textarea className="message" placeholder="type your message here" rows={4}></textarea>
                </div>
              </div>
              <button onClick={() => setOpenForm(!openFrom)} className="submit-message">Send Message</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default HelpCenter
