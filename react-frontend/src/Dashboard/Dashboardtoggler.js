import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route} from "react-router-dom";
import "./Dashboardtoggler.css"

export default function Dashboardtoggler() {
  return (
    
    <div className="maindiv">
      <div className="divcomp">
        <h1 className="mgmtsystem">
          EMPLOYEE MANAGEMENT TOOLS>>
        </h1>
        <div className="btnscomp">
            
            <Link to='addemp'>
                  <button className='addbtn'>Add Employee</button>
                </Link>
                
                
            <Link to='edit'>
                  <button className='editbtn'>Edit Employee</button>
                </Link>
               
               
            <Link to='view'>
                  <button className='viewbtn'>View Employee</button>
                </Link>
               
              
            <Link to='terminate'>
                  <button className='terminatebtn'>Terminate Employee</button>
                </Link>
               
          </div>
      </div>
      <div className="payrolldivcomp"> 
           <div className="payrollbtnscomp">
              <Link to='viewsalaries'>
                    <button className='viewpaybtn'>View Payroll</button>
                  </Link>
              <Link to='editsalaries'>
                    <button className='editpaybtn'>Edit Payroll</button>
                  </Link>
            </div>
            <h1 className="payrollcomp">
           PAYROLL MANAGEMENT TOOLS>>
          </h1>
      </div>
      <div className="predictiondivcomp"> 
           <div className="predictionbtnscomp">
              <Link to='analyzeperformance'>
                    <button className='analyzebtn'>Analyze Employee Performance</button>
                  </Link>
              <Link to='predictperformance'>
                    <button className='predictbtn'>Predict Employee Performance</button>
                  </Link>
            </div>
            <h1 className="predictioncomp">
           PERFORMANCE RELATED TOOLS>>
          </h1>
      </div>
      <div className="projectdivcomp"> 
           <div className="projectbtnscomp">
              <Link to='addproject'>
                    <button className='addprojectbtn'>Add Project</button>
                  </Link>
              {/* <Link to='editsalaries'>
                    <button className='editpaybtn'>Edit Payroll</button>
                  </Link> */}
            </div>
            <h1 className="projectcomp">
           PROJECT MANAGEMENT TOOLS>>
          </h1>
      </div>
      
    
    </div>
    
  )
}
