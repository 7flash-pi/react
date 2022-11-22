import React from 'react';
import '../styles/sidebar.css'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';   
import SearchIcon from '@mui/icons-material/Search'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar-twitterIcon'/>
        <SidebarOption active Icon={ HomeIcon } text='Home' />
        <SidebarOption Icon={ SearchIcon } text='Explore'/>
        <SidebarOption Icon={ NotificationsNoneIcon } text='Notifications' />  
        <SidebarOption Icon={ MailOutlinedIcon  } text='Messages' />  
        <SidebarOption Icon={ BookmarkBorderOutlinedIcon} text='BookMarks'/>
        <SidebarOption Icon={ ListAltIcon } text='Lists'/>
        <SidebarOption Icon={ PermIdentityIcon } text='Profile'/>
        <SidebarOption Icon={ MoreHorizIcon } text='More'/>
        
        <Button variant="outlined" className='sidebar-tweet' fullWidth>Tweet</Button>

      
    </div>
  )
}

export default Sidebar
