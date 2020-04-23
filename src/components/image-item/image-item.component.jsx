import React from 'react';
import './image-item.styles.scss'

const ImageItem = ({ download_url }) => (
    <div className='image-item'>
        <img src={download_url} />
    </div>
);

export default ImageItem;