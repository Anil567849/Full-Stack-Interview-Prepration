import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';





function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQG2ibZQ5psKcw/profile-displayphoto-shrink_800_800/0/1631722013320?e=1642032000&v=beta&t=D4nHxExPskLX5XrExbAL_1NGyD59r9jjknGAXUK-a_g"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreIcon/>
                    </IconButton>
                </div>

                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined/>
                        <input type="text" placeholder="Search or start new" name="" id="" />
                    </div>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        </div>
    )
}

export default Sidebar
