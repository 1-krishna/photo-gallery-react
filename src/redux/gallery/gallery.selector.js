import { createSelector } from 'reselect';

const selectGallery = (state) => (state.gallery)

export const selectImages = createSelector(
    [selectGallery],
    gallery => gallery.images
)

