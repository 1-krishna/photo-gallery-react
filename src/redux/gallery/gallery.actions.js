import { GalleryTypes } from "./gallery.types"


export const updateGallery = (data) => {
    return {
        payload: data,
        type: GalleryTypes.UPDATE_GALLERY
    }
}