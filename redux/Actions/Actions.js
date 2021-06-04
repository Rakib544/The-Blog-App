export const loadSingleBlogData = (payload) => {
    return {
        type: 'LOAD_SINGLE_BLOG_DATA',
        payload
    }
}

export const addToBookMark = (payload) => {
    return {
        type: 'ADD_TO_BOOKMARK',
        payload
    }
}