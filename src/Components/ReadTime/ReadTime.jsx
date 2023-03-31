import React from 'react';
import './ReadTime.css';

const ReadTime = (props) => {
    //console.log(props)

    const store = props.store;

    const bistItems = store.map((alogInfo) =>
        <p>{alogInfo.read_time}</p>
    );

    return (
        <div>
            <h3>hello</h3>
            <p>{bistItems}</p>
        </div>
    );
};

export default ReadTime;