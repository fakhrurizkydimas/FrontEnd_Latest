import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../../components';
import { PortalFooter } from '../../components';
import './Portal.scss';

const AdminPortal = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="mb-3 col-lg-12"
        style={{ 
                paddingLeft : '100px',
              }}>
         <h2> 
           Administration Portal
         </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"
        style={{ 
                paddingRight : '50px',
                paddingLeft : '100px',
              }}>
        <div className="sidebar">
            <AdminSidebar />
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
      <div className="portalfooter">
          <PortalFooter />
      </div>
    </div>
  )
}

export default AdminPortal
