import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboardtoggler.css";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

export default function Dashboardtoggler() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const [ctime, setCtime] = useState(time);
  const [tdate, setTdate] = useState(date);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
    date = new Date().toLocaleDateString();
    setTdate(date);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div className="maindiv1">
      <div className="optionsdiv1">
        <div className="welcomediv1">
          <div className="welcomeicon1">
            <BsIcons.BsPersonBoundingBox />
          </div>
          <div className="welcometext1">Welcome Admin</div>
        </div>
        <hr className="separator1" />
        <div className="dashboarddiv1">
          <div className="dashboardicon1">
            <BsIcons.BsColumnsGap />
          </div>
          <div className="dashboardtext1">Dashboard</div>
        </div>
        <div className="list1">
          <Link
            to="/employees"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <BsIcons.BsPeopleFill />
            </div>
            <div>&emsp; Employee Management</div>
          </Link>

          <Link
            to="/payrolls"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <RiIcons.RiMoneyDollarBoxLine />
            </div>
            <div>&emsp; Payroll Management</div>
          </Link>

          <Link
            to="/predictionpost"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <FaIcons.FaChartLine />
            </div>
            <div>&emsp; Performance Prediction</div>
          </Link>

          <Link
            to="/projects"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <BiIcons.BiTask />
            </div>
            <div>&emsp; Project Management</div>
          </Link>

          <Link
            to="/support"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <MdIcons.MdContactPhone />
            </div>
            <div>&emsp; Support</div>
          </Link>

          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="linkitem1"
          >
            <div>
              <BsIcons.BsFillInfoSquareFill />
            </div>
            <div>&emsp; About</div>
          </Link>
        </div>
      </div>
      <div className="bgdiv1">
        <div className="clock1">{ctime}</div>
        <div className="date1">{tdate}</div>
      </div>
    </div>
  );
}
