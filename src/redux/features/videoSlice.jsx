import { createSlice } from "@reduxjs/toolkit"

const initialStates = {
    searchInput: "",
    videos: {}
}

const videoSlice = createSlice({
    name:"videoSlice",
    initialState: initialStates,
    reducers : {
        searchInputValue:(state, action) => {
            state.searchInput = action.payload
        },
        getVideos : (state, action) => {
            state.videos = action.payload
        }
    }
})

export const { searchInputValue, getVideos } = videoSlice.actions
export default videoSlice.reducer