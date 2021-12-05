const ContactList = () => {
    return (
      <div className="form-wrapper">
          <div className="result-search">
              <div className="title"></div>
                  <div className="lists row">
                        <div className="item-result col-lg-6">
                          <div className="content">
                            <img style={{ marginLeft: "50px"}} src="/images/IT Information/Contact List Info.png" className="image" alt="" />
                          </div>
                        </div>
                        <div className="item-result mt-5 col-lg-6">
                          <div className="content">
                              <a href=
                                 "https://www.google.com/maps/search/pt+bank+bukopin/@-6.2436262,106.8488089,18z">
                                <img style={{ marginLeft: "20px"}} src="/images/IT Information/Contact List Map.png" className="image" alt="" />
                              </a>
                          </div>
                        </div>
                  </div>
          </div>
      </div>
    )
  }
  
  export default ContactList
  