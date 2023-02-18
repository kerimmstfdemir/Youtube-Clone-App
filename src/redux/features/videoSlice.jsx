import { createSlice } from "@reduxjs/toolkit"

const initialStates = {
    currentQuery:"",
    searchInput: "",
    videos: {}
}

const videoSlice = createSlice({
    name:"videoSlice",
    initialState: initialStates,
    reducers : {
        currentQueryValue:(state, action) => {
            state.currentQuery = action.payload
        },
        searchInputValue:(state, action) => {
            state.searchInput = action.payload
        },
        getVideos : (state, action) => {
            state.videos = action.payload
        }
    }
})

export const { currentQueryValue, searchInputValue, getVideos } = videoSlice.actions
export default videoSlice.reducer