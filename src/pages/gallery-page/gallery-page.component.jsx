import React from 'react';
import { fetchCurrentPageImages } from '../../api-utils/images-api.utils';
import { connect } from 'react-redux';
import { selectImages } from '../../redux/gallery/gallery.selector';
import { updateGallery } from "../../redux/gallery/gallery.actions"
import ImageItem from '../../components/image-item/image-item.component';

class GalleryPage extends React.Component {
    componentDidMount() {
        const { updateGal } = this.props;
        fetchCurrentPageImages(2, 10).then(data => updateGal(data));
    }

    render() {
        const { images } = this.props
        console.log('asli wala', images);
        return (
            <div>
                {
                    images.map(image => <ImageItem key={image.id} {...image} />)
                }
            </div >
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