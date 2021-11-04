import { IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { BiDotsHorizontal } from 'react-icons/all'
import { AiOutlineHeart, FaRegComment, IoPaperPlaneOutline, BsBookmark, HiOutlineEmojiHappy } from 'react-icons/all'
import ShowMiniProfile from './ShowMiniProfile'
import { AiOutlineClose } from 'react-icons/all'


function Post({ post }) {

    const [isShow, setIsShow] = useState(false)
    const [valueComment, setValueComment] = useState('')
    const [finalValue, setFinalValue] = useState([])
    const [open, setOpen] = useState(false)


    const submitHandler = (value) => {
        setOpen(true)
        const data = {
            id: Math.floor(Math.random() * 100),
            name: value
        }

        setFinalValue([...finalValue, data])
        setValueComment('')

        console.log(finalValue);
    }


    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //   return;
        // }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <AiOutlineClose fontSize="big" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <div className="bg-white my-7 border rounded-sm h-full relative" >

            {/* Header */}
            <div className="flex items-center p-5">
                <img
                    src={post.userimg}
                    alt=""
                    className="rounded-full h-12 w-12 object-contain 
                    border-2 p-0.5 border-red-600 mr-3 cursor-pointer "
                    onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}
                />
                <p className="flex-1 font-bold">{post.username}</p>
                <BiDotsHorizontal className="h-5 cursor-pointer" />
            </div>

            {/* Image */}
            <img src={post.img} className="object-cover w-full h-full" />


            {/* Button */}
            <div className="p-2 flex justify-between">
                <div className="flex align-middle">
                    <AiOutlineHeart
                        className="w-5 h-5 md:w-7 h-7  m-1 transform hover:scale-110 transition-all cursor-pointer"
                    />
                    <FaRegComment
                        className="w-5 h-5 md:w-7 h-7  m-1 transform hover:scale-110 transition-all cursor-pointer"
                    />
                    <IoPaperPlaneOutline
                        className="w-5 h-5 md:w-7 h-7  m-1 transform hover:scale-110 transition-all cursor-pointer"
                    />
                </div>
                <BsBookmark className="w-5 h-5 md:w-7 h-7  m-1 transform hover:scale-110 transition-all cursor-pointer" />
            </div>

            {/* Caption */}
            <div className="p-5 truncate">
                <span className="font-bold mr-1">{post.username} </span>
                {post.caption}
            </div>

            {/* Comment */}
            {finalValue && finalValue.length > 0 && (
                <div className="h-32 overflow-y-scroll mb-5 scrollbar-none bg-gray-50 p-2">
                    <h1 className="text-2xl text-blue-500">Comments</h1>
                    {finalValue.map((item) => (
                        <div key={item.id} className="border  border-gray-300 rounded-sm p-2 m-2">
                            <h1 className="text-xl ">{item.name}</h1>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}

            <div className="flex justify-between border-t ">
                <HiOutlineEmojiHappy className="w-9 h-9 mr-3" />
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full  outline-none "
                    value={valueComment}
                    onChange={(e) => setValueComment(e.target.value)}
                />
                <button onClick={() => submitHandler(valueComment)} type="button" className="p-1 text-blue-600" style={{ opacity: valueComment.length > 0 ? '1' : '0.5' }} disabled={valueComment.length == 0 && true}>post</button>
            </div>

            {isShow && (
                <div onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)} className="absolute top-14 w-auto left-12 p-4 border-2 bg-gray-50 border-gray-300 rounded-md">
                    <ShowMiniProfile
                        detail={post}
                        isShow={isShow}
                        setIsShow={setIsShow}
                    />
                </div>
            )}

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="comment added"
                action={action}
                color="primary"
            />
        </div>
    )
}

export default Post
