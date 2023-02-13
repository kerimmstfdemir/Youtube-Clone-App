import { Routes, Route, Navigate } from "react-router-dom"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import Home from "../pages/Home"

const AppRouter = () => {
    return (
        <>
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter