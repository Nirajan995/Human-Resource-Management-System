import React from 'react'
import './FooterComp.css'

 function FooterComp() {
    return (
        <footer class="site-footer">
          <div class="container">
           <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Contact Us</h6>
              <p class="text-justify">This HRMS software developed by KANN Group is in the early phase of it's deployment lifecycle.Please contact our support department if you encounter any bugs or errors. </p>
              <p>Support Tel:01-4567382</p>
              <p>Support Email:kannhrms@nepal.com</p>
            </div>
           </div>
          </div>
          <hr  style={{
                        color: 'rgb(244 236 236)',
                        backgroundColor: 'rgb(244 236 236)',
                        height: .5,
                        borderColor : 'rgb(244 236 236)'
                    }}/>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved
               </p>
              </div>
            </div>
          </div>
      </footer>
    )
}
export default FooterComp;