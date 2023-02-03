/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import Videos from "../components/Videos"
import youtubeApi from "../api/youtubeApi"
import { getVideos } from "../redux/features/videoSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()
    const { searchInput } = useSelector((state) => state.videoSlice)

    const getYoutubeVideos = async () => {
        try{
            const {data} = await youtubeApi.get(`/videos?chart=mostPopular`)
            console.log(data)
            dispatch(getVideos(data))
        }catch(error){
            console.log(error.message)
        }
    }

    const getSearchedVideos = async () => {
        try{
            const { data } = await youtubeApi.get(`/search?q=${searchInput}`)
            console.log(data);
            dispatch(getVideos(data))
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {

        if(searchInput !== ""){
            getSearchedVideos()
        }else{
            getYoutubeVideos()
        }
    }, [searchInput])

    return (
        <div>
            <Videos />
        </div>
    )
}

export default Home