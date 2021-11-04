import React, { useEffect, useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/all'

function ShowMiniProfile({ detail, isShow, setIsShow }) {

    const [info, setInfo] = useState(detail)

    useEffect(() => {
        setInfo(detail)
    }, [detail, info])

    return (
        <div className="flex justify-between flex-col" >
            <div className="flex justify-start">
                <img
                    src={info.userimg}
                    className="w-16 h-16 rounded-full"
                />
                <h1 className="text-3xl text-blue-500 p-2 ml-12">Name:{info.username}</h1>
            </div>

            <div className="mt-10">
                <h1 className="text-xl text-red-900 flex justify-start align-middle mb-8">and recently post<BsArrowDownCircle className="mt-2 ml-4" /></h1>
                <div >
                    <img
                        src={detail.img}
                        className="w-40 h-40 object-cover h-40 rounded-lg border-3 "
                    />
                </div>
            </div>
        </div>
    )
}

export default ShowMiniProfile
