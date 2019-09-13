import React from 'react';

function MediaInfo({ imageData, loading }) {
    if (loading) return <p> Loading...</p>

    return (
        <div className="info_container">
            <h2>Title: {imageData.title}</h2>
            <h3>Date: {imageData.date}</h3>
            <h3>Copyright: {imageData.copyright ? imageData.copyright : 'Unknown'}</h3>
            <p>{imageData.explanation}</p>
        </div>
    )
}

export default MediaInfo;