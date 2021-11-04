import React from 'react'

function Story({ profile }) {
    return (
        <div >
            <img
                className="w-14 h-14 rounded-full p-0.5 border-red-400 border-2 
            object-contain cursor-pointer transform scale-95 hover:scale-110 transition-all 0.1s "
                src={profile.avatar}
                alt={profile.email}
            />
            <p className="text-xs w-14 truncate">{profile.username}</p>
        </div>
    )
}

export default Story
