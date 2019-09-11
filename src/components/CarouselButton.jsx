import React from 'react';

function CarouselButton(props) {
    let className = ('carousel_button ' + props.className);
    return (
        <button className={className}>{props.displayValue}</button>
    )
}

export default CarouselButton;