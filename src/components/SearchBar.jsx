import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { searchInputValue } from "../redux/features/videoSlice"
import youtubeIcon from "../assets/youtube-icon.png"
import { getVideos } from "../redux/features/videoSlice"
import youtubeApi from "../api/youtubeApi"

const SearchBar = () => {
  const { searchInput } = useSelector((state) => state.videoSlice)
  const dispatch = useDispatch()

  const getSearchedVideos = async (e) => {
    e.preventDefault()
    try {
      const { data } = await youtubeApi.get(`/search?q=${searchInput}`)
      console.log(data);
      dispatch(getVideos(data))
    } catch (error) {
      console.log(error.message)
    }
  }

  console.log(searchInput)
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center gap-4 m-4">
        <img className="w-20" src={youtubeIcon} alt="youtube-icon" />
        <p className="text-2xl"> <b>YouTube</b> Clone</p>
      </div>
      <form className="m-2 ml-20 mr-20 w-[30rem] md:w-[40rem] ">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required
            onChange={(e) => dispatch(searchInputValue(e.target.value))}
          />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={getSearchedVideos}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar