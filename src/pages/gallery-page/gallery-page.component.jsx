import React from 'react';
import { fetchCurrentPageImages } from '../../api-utils/images-api.utils';
import { connect } from 'react-redux';
import { selectImages } from '../../redux/gallery/gallery.selector';
import { updateGallery } from "../../redux/gallery/gallery.actions"
import ImageItem from '../../components/image-item/image-item.component';
import './gallery-page.styles.scss';

class GalleryPage extends React.Component {

    componentDidMount() {
        const { updateGal } = this.props;
        fetchCurrentPageImages(2, 10).then(data => updateGal(data));
    }

    handleChange = (event) => {
        const { updateGal } = this.props;
        event.preventDefault();
        let value = event.target.value;
        value = value ? value : 10;
        console.log(value);
        fetchCurrentPageImages(2, value).then(data => updateGal(data));
    }

    render() {
        const { images } = this.props
        console.log('asli wala', images);
        return (
            <div className='gallery-page'>
                <div>Enter Image Count: <input type='number' onChange={this.handleChange} /></div>
                <div>default is 10</div>
                <div className='gallery-contents'>
                    {
                        images.map(image => <ImageItem key={image.id} {...image} />)
                    }
                </div >
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    images: selectImages(state)
})

const mapDispatchToProps = dispatch => ({
    updateGal: updatedData => dispatch(updateGallery(updatedData))
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);