import React,{useState} from 'react'
import "./User.css"
import { Link } from 'react-router-dom';

function User() {
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
      <div className="mainpage">
          
              <span className="welcome">Welcome to KANN HRMS</span>
          
      </div>
      
      )

}

export default User
