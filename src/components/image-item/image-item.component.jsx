import React from 'react';
import './image-item.styles.scss'

const ImageItem = ({ download_url, author, id }) => (
    <div className='image-item'>
        <img alt={id} src={download_url} />
        <div className='image-footer'>
            <span>{author}</span>
        </div>
    </div>
);

export default ImageItem;