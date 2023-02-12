/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { useSelector } from 'react-redux'

const Videos = () => {
    const { searchInput, videos } = useSelector((state) => state.videoSlice)
    return (
        <div className='flex flex-row justify-center flex-wrap gap-4 mt-6'>
            {videos?.items?.map((item) => {
                const { id, snippet:{title, description} } = item
                return (
                    <>
                        <div className="flex justify-center">
                            <div className="flex flex-col rounded-lg shadow-lg bg-white max-w-sm">
                                
                                <iframe height="250" src={`https://www.youtube.com/embed/${searchInput ? id?.videoId : id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                                    <p className="text-gray-700 text-base text-justify overflow-hidden mb-4">
                                        {description.slice(0,150)}...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Videos