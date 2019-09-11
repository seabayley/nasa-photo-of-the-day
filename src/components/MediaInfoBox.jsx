import React, { useState } from 'react';

function MediaInfoBox(props) {
    return (
        <div className="media_info">
            <h2>{props.media.data[4].title}</h2>
            <h3>Date: {props.media.data[4].date}</h3>
            <h3>Copyright: {props.media.data[4].copyright}</h3>
            <p>{props.media.data[4].explanation}</p>
        </div>
    )
}

export default MediaInfoBox;