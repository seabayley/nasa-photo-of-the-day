import React, { useState } from 'react';
import MediaBox from './MediaBox';
import MediaInfoBox from './MediaInfoBox';

function DisplayWrapper(props) {
    return (
        <div className="media_wrapper">
            <div className="media_box">
                <MediaBox media={props} />
            </div>
            <div className="media_box--info">
                <MediaInfoBox media={props} />
            </div>
        </div>
    )
}

export default DisplayWrapper;
