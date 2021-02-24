import React,{useState} from 'react'
import "./Userdashboard.css"
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as GoIcons from 'react-icons/go';

function Userdashboard() {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [ctime,setCtime]=useState(time);
    const [tdate,setTdate]=useState(date);

    const UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
        date = new Date().toLocaleDateString();
        setTdate(date);
    }
    setInterval(UpdateTime,1000)
    return (
        <div className="maindiv">
      <div className="optionsdiv">
          <div className="welcomediv">
            <div className="welcomeicon"><AiIcons.AiOutlineUser /></div> 
            <div className="welcometext">Welcome User</div>
          </div>
          <hr className="separator"/>
          <div className="dashboarddiv">
            <div className="dashboardicon"><BsIcons.BsColumnsGap /></div> 
            <div className="dashboardtext">Dashboard</div>
          </div>
          <div className="list">
            
            
         
              <Link to="/projectmgmt" style={{ textDecoration: 'none' }} className="linkitem">
              <div className="listicons"><BiIcons.BiTask /></div><div>&emsp; View Projects </div></Link>
           
          
              <Link to="/querysubmit" style={{ textDecoration: 'none' }} className="linkitem">
              <div className="listicons"><GoIcons.GoReport /></div><div>&emsp; Submit Query</div></Link>

              <Link to="/support" style={{ textDecoration: 'none' }} className="linkitem">
              <div className="listicons"><MdIcons.MdContactPhone /></div><div>&emsp; Support</div></Link>
            
              <Link to="/about" style={{ textDecoration: 'none' }} className="linkitem">
              <div className="listicons"><BsIcons.BsFillInfoSquareFill/></div><div>&emsp; About</div></Link>
            
            
          </div>
      </div>
      <div className="bgdiv">
      <div className="clock">
                {ctime}
            </div>
            <div className="date">
                {tdate}
            </div>
            
            
      </div>
      
    
    </div>
    )
}

export default Userdashboard
