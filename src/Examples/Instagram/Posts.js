import React, { useState } from 'react'
import img1 from '../../assets/image/02.jpg'
import img2 from '../../assets/image/walpaper.jpg'
import Post from './Post'

const posts = [
    {
        id: '1',
        username: 'Hossein',
        userimg: img1,
        img: img2,
        caption: 'SUBSICIBE AND DESTROY THE LIKE BUTTON for the yt alghoritm'
    },

    {
        id: '2',
        username: 'Reza',
        userimg: img1,
        img: img2,
        caption: 'SUBSICIBE AND DESTROY THE LIKE BUTTON for the yt alghoritm'
    },

    {
        id: '3',
        username: 'Farhad',
        userimg: img1,
        img: img2,
        caption: 'SUBSICIBE AND DESTROY THE LIKE BUTTON for the yt alghoritm'
    },
]

function Posts() {

    const [isShow, setIsShow] = useState(false)

    return (
        <div className="xl:w-7/12 lg:w-10/12 sm:w-11/12 md:w-10/12 ">
            {posts.map((post) => (
                <>
                    <div >
                        <Post
                            key={post.id}
                            post={post}
                        />
                    </div>

                </>
            ))}
        </div>
    )
}

export default Posts
