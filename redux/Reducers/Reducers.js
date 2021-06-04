import { data } from "../../data"
const initialState = {
    allBlogs: data,
    singleBLogData: [],
    bookmarkBlogs: []
}

export const blogReducers = (state = initialState, action) => {
    
    switch(action.type) {
        case 'LOAD_SINGLE_BLOG_DATA': {
            return {
                ...state,
                singleBLogData: state.allBlogs.find(blog => blog.id === action.payload)
            }
        }
        case 'ADD_TO_BOOKMARK': {
            return {
                ...state,
                bookmarkBlogs: [action.payload, ...state.bookmarkBlogs]
            }
        }
        default: 
            return state
    }
}