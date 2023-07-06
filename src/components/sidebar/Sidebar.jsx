import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import {DarkModeContext} from '../../context/darkModeContext'

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Admin Panel</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PermIdentityOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <StoreMallDirectoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                <LocalMallOutlinedIcon className="icon"/>
                <span>Orders</span>
                </li>
                <li>
                <AirportShuttleIcon className="icon"/>
                <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <BarChartIcon className="icon"/>
                <span>Stats</span>
                </li>
                <li>
                <NotificationsNoneIcon className="icon"/>
                <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                <span>System Health</span>
                </li>
                <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
                </li>
                <li>
                <SettingsApplicationsIcon className="icon"/>
                <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <AccountCircleIcon className="icon"/>
                <span>Profile</span>
                </li>
                <li>
                <ExitToAppIcon className="icon"/>
                <span>Logout</span>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar