import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widget__article'>
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon />


                </div>


                <div className="widget__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div >
        )
    };

    return (
        <div className='widget'>
            <h2>linkedIn News</h2>
            <InfoIcon />
            <div className='widget__header'>


                {newsArticle("react app", "to news")}
                {newsArticle("react app", "to news")}
                {newsArticle("react app", "to news")}
                {newsArticle("react app", "to news")}

            </div>


        </div>
    );
}

export default Widget