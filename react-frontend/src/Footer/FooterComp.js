import React from 'react'
import './FooterComp.css'

 function FooterComp() {
    return (
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">This HRMS software developed by KANN Group is in the early phase of it's deployment lifecycle.Please contact our support department if you encounter any bugs or errors.<br/>Support Tel:01-4567382<br/>Support Email:kannhrms@nepal.com</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Developer Profiles</h6>
            <ul className="footer-links">
              <li><a href="https://github.com/KushalRaut" target="blank">Kushal Raut</a></li>
              <li><a href="https://github.com/Apurva55-alex" target="blank">Apurwa Dhakal</a></li>
              <li><a href="https://github.com/Nirajan995" target="blank">Nirajan Kunwor</a></li>
              <li><a href="https://github.com/nishanrana" target="blank">Nishan Rana</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Used Languages</h6>
            <ul className="footer-links">
              <li>Spring Tool Suite</li>
              <li>React</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by KANN Group.
            </p>
          </div>

         
        </div>
      </div>
</footer>
      
      
    )
}
export default FooterComp;