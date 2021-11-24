import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import './Portal.scss';

const Portal = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12"
        style={{ 
                paddingLeft : '100px',
              }}>
         <h2> news/dll/dd</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"
        style={{ 
                paddingRight : '50px',
                paddingLeft : '100px',
              }}>
        <div className="sidebar">
            <Sidebar />
        </div>
        </div>
        <div className="col-xs-1" 
        style={{ 
                width:'1px',
                backgroundColor: '#fc0',
                backgroundSize: '100% 100%',
              }}>
        <div className="line" > 
          
        </div>
        </div>
        <div className="col-lg-8"
        style={{ 
                paddingLeft : '50px',
              }}>
        <div className="content">
            <Outlet />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
