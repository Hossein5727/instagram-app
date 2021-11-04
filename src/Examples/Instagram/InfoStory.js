import React, { useEffect } from 'react'

function InfoStory({ history }) {

    const { name } = history.location.state
    const { email } = history.location.state

    return (
        <>
            <div className="bg-gray-200 p-10 shadow-md w-screen">
                <h1 className="text-blue-700 text-xl sm:text-2xl md:text-3xl">Name:{name}</h1>
                <br />
                <h1 className="text-blue-700 text-xl sm:text-2xl md:text-3xl">Email:{email}</h1>
            </div>
        </>
    )
}

export default InfoStory
