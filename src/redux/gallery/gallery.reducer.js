import { GalleryTypes } from "./gallery.types";

const INITIAL_STATE = {
    images: []
}

const galleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GalleryTypes.UPDATE_GALLERY:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state;
    }
}

export default galleryReducer;