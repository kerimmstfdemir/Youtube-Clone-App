import React from 'react'
import { useSelector } from 'react-redux'

const Videos = () => {
    const { videos } = useSelector((state) => state.videoSlice)
    console.log(videos)
    return (
        <div className='flex flex-row justify-center flex-wrap gap-4'>
            {videos?.items?.map((item) => {
                return (
                    <div>
                        <div className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Videos