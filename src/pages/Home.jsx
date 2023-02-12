/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import Videos from "../components/Videos"
import youtubeApi from "../api/youtubeApi"
import { getVideos } from "../redux/features/videoSlice"
import { useDispatch } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()

    const getYoutubeVideos = async () => {
        try{
            const {data} = await youtubeApi.get(`/videos?chart=mostPopular`)
            dispatch(getVideos(data))
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        getYoutubeVideos()
    }, [])

    return (
        <div>
            <Videos />
        </div>
    )
}

export default Home