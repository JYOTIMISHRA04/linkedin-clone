import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className='header'>
            <div className="header__left">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AZsgAXcYAWsUAV8QAY8fo8frv9vzd6PYAYcc8ftAAXMUObMqlwOb0+f0AYMZnl9hum9nC1e94otxdktaMr+DE1+8ZcMvl7vmyyepGhNIldM0teM57pNyDqd4AacnX5PVMh9O4zuzX5fWevOWivuYAUcJVjNSQs+LB8NeeAAAEpklEQVR4nO2dfXeaMBSHgRAVFdIK+Ia2na7rvv8nHHbHVggEz+bNJfB7ztk/M4pPTS6BXHI9DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4xWcX5c7Y/LH0VPAbpLw/7LM3j9ZRbzvNW6UaIQEVSSv+BlB8nIxUIsUlXnHrbVAr1UDNdVQl5nHH5ZaEitbuiwmzLIZiLyIrfhUjk1v22RWDN78KisPwzrgTt8NORwmrIiUPLfhfCeOCCNhVXPIKloqWOuhVMgr4v7ISbwnaQ+UYWNgRzu6eJKoGF8yJjH71goZ9m9mYyTUQZteCWK45eCal/xKOdyXY7KiU25IujVySt4Io3zlwgnp+m3J2UvJtuetBLN5SCU/5OWnbTCaHhuheGlAMx5pyxXQneCQ1z/kBThhrKuWnaPWV78I3TBqJnQsOs49tLoYp5oWjvwknKqeneaCjDbJ1cmq2fQsIfUu4JDQ+mLx5t3r4azgq6ESsPhIZLg2E0rzTd0ykuCQ0Nh5XLpNqW8GYHoaHhS4dvtbZnsitJRWjYfsKXP7TGXYH3nwlYDBcnrTHZFI/HUOirtcmCyFCwGDaN/uWgDJsiOFU05emlTXdPqH5DpnGoX5aSXS7zGAY7rfGJKtIw9VJ9smiepjtn6Iv6CXFNNqdhMvSj6kicUvnxGcrlreKU8L4jl6Ev1XdHPVHey2AzLMdiEV9WhrbxgfSuI6OhLwOhpBIB7c0oTkM7wBCGMOTHKUOpFiIUovy3uD/ZmMswWFT5bquqL3zdSC3PLYeX03mSJMnkfHo5iDv/gFwz71lSZXI964u3yv9fl+ik2PysTmUnP1/vuuBiMgzrl8DT67WFqCWi7z4/RRRNC53v6o5FHScMZdCSK5pk3RM+FwyDefujIrvOBGsHDIVxjfMcdSj23/DX0XyUWUdM7b1h3LmG25Fm3XvDdfdxnowRtfeGdzA1nheHYOi9mFaQB2Fo/BEHYeg9G0biMAzfDOF0GIamtA9nDCe748f+I42bU9MNCeWOGJ4/Lhe9UkaB+GhyNKxcuWH4+yYvLAr1pTnTkytOGObVQNKk6HYv1Sae2rs979Vpw9d6oFRPWpv2LAAHDGN9jAVJvZHThnP9XKenp7tsmDSESfW7fiyXDZsS3vTkbZcNdw0fE2mhxmXDpqc2YAjDRwHDW2AIQxjSAMNbYAhDGNIAw1tgODrDQV3jw/AvMKQBhrfAEIbthpRPqxuyXCwaUu721S5o05ByTwXDUe0ZSsp9MQx7m1g0pNzbxPDga1jP+k2+DOupFv9rSLk/jWGrCzmvI9teKZrev6y3aj8S5R5DpmwzWaf1lfve33qgiHLTveHv9dWP/dooN73uwdaXZeS6I436n5n0wpC0rMfg974cwf6lPRiI1DUSetBLaQX5u6nqeKTov+Hfz5u8rM7g92Qfwb76w6+NMIL6FiOoUTL8OjMjqBU0gnpPI6jZZb/uWmC77po3/Np53gjqH5bMjjZqWEYpVw3LT27qkD66EGkf6pD+ZbqO8/SzlqxUi4fUklWftWSf8/cVZbEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAH+MFo86DxACQAAAAASUVORK5CYII=" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />

                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title={'Messaging'} />
                <HeaderOption Icon={NotificationsIcon} title={'Notifications'} />
                <HeaderOption Icon={AppsIcon} title={'For Bussiness'} />
                <HeaderOption
                    avatar={true}
                    title="me"
                    onClick={logoutOfApp}
                />


            </div>
        </div>

    )
}

export default Header