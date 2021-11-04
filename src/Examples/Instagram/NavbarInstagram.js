import React from 'react'
import { AiOutlineHome } from 'react-icons/all'
import { IoPaperPlaneOutline } from 'react-icons/all'
import { CgAddR } from 'react-icons/all'
import { MdOutlineExplore } from 'react-icons/all'
import { FiHeart } from 'react-icons/all'
import { BsSearch } from 'react-icons/all'
import { Badge } from '@mui/material'
import img1 from '../../assets/image/02.jpg'
import { Link } from 'react-router-dom'

function NavbarInstagram() {
    return (
        <div className="flex justify-around  bg-white p-3 mb-0  border-b-2 border-solid divide-gray-100">
            <div>
                <Link to="/">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt="iconInstagram"
                        className="mt-4  w-24 sm:w-28"
                    />
                </Link>
            </div>

            <div className="relative rounded-md  hidden md:block">
                <div className="absolute mt-1 inset-y-0 pl-3 flex items-center pointer-events-none">
                    <BsSearch className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    className="mt-4 py-0.5 px-3 block pl-10 bg-gray-100 border rounded-md p-2 outline-none"
                    type="text"
                    placeholder="Searach"
                />
            </div>

            <div className="flex p-2 justify-center align-middle cursor-pointer">
                <Link to="/">
                    < AiOutlineHome className="m-2 w-6 h-6 transform hover:scale-110 transition-all " />
                </Link>
                <Badge badgeContent={4} color="error" className="m-2  transform hover:scale-110 transition-all">
                    < IoPaperPlaneOutline className="w-6 h-6" />
                </Badge>
                < CgAddR className="m-2 w-6 h-6 transform hover:scale-110 transition-all" />
                < MdOutlineExplore className="m-2 w-6 h-6 transform hover:scale-110 transition-all" />
                < FiHeart className="m-2 w-6 h-6 transform hover:scale-110 transition-all" />
                <Link to="/profilehossein">
                    <img
                        src={img1}
                        className="m-2 w-7 h-7 object-cover rounded-full border border-solid 
                    p-0.5 border-red-500 transform hover:scale-110 transition-all"
                    />
                </Link>
            </div>

        </div>
    )
}

export default NavbarInstagram
