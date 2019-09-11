import React, { useState } from 'react';
import CarouselButton from './CarouselButton';

function MediaBox(props) {
    const [media, setMedia] = useState(props.media.data);
    const [currentMedia, setCurrentMedia] = useState(0);
    if (!props.media.data) return <h3>Loading...</h3>;
    return (
        <div className='media'>
            <CarouselButton className={'carousel_button--left'} displayValue={'<'} />
            <img src={media[4].url} />
            <CarouselButton className={'carousel_button--right'} displayValue={'>'} />
        </div>
    );
}

export default MediaBox;