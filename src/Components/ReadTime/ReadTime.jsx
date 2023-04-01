import React from 'react';
import './ReadTime.css';

const ReadTime = ({ store }) => {
    // console.log({store})

    let total = 0;
    for (const time of store) {
        total = total + time.read_time;
    }

    return (
        <div className='spent-time'>
            <h3>Spent time on read : {total}</h3>
        </div>
    );
};

export default ReadTime;