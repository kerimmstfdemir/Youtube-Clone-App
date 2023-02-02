import { Routes, Route } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import Home from "../pages/Home"

const AppRouter = () => {
    return (
        <>
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default AppRouter