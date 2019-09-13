import React from 'react';

function MediaContainer({ imageData, loading }) {
    if (loading) return <p> Loading...</p>

    return (
        <div className="media_container">
            <img src={imageData.url} alt='Nasa APOD' />
        </div>
    )
}

export default MediaContainer;