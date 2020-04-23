export const fetchCurrentPageImages = async (pageNumber, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
        .then(response => response.json());
} 