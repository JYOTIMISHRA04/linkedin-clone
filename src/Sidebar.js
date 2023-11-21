import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <p><span className="sidebar__hash">#</span>
                {topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://media.licdn.com/dms/image/D4D16AQHsr8SmH1oQbw/profile-displaybackgroundimage-shrink_350_1400/0/1675368552944?e=1704931200&v=beta&t=y707xNvYVrhkpPjnGNG7p21Z8wkzoDE_meEARWQSz9E" alt="" />
                <Avatar src={user.profileUrl} className='sidebar__avatar'>
                    {user.displayName[0]}
                </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p >Who viewed your profile  </p>
                    <p className='sidebar__statNumber'>96</p>
                </div>
                <div className="sidebar__stat">
                    <p >Impression of your post  </p>
                    <p className='sidebar__statNumber'>480</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('javaScript')}
                {recentItem('Python Developer ')}
                {recentItem('SoftwareEngineering')}


            </div>

        </div>
    )
}

export default Sidebar;