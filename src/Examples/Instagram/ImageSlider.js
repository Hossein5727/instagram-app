import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

import './imageSlider.css'
import { Link } from 'react-router-dom'
import Posts from './Posts'

function ImageSlider() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestion = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: 1
        }))

        setSuggestions(suggestion)
        console.log(suggestion);
    }, [])

    return (
        <React.Fragment>
            <div className="flex flex-col justify-evenly m-2 sm:ml-32 select-none " >
                <div className="flex  space-x-2 p-6 bg-white mt-5 mb-8 border-gray-200 border: ;
         rounded-sm overflow-x-scroll overscroll-x-auto user-select-none 
         scrollbar-thin scrollbar-thumb-black
         scrollbar sm:w-11/12 md:w-10/12 lg:w-10/12
         xl:w-7/12
         ">
                    {suggestions.map((profile) => (
                        <div key={profile.phone} className="">
                            <Link to={{
                                pathname: `/info/${profile.name}`,
                                state: {
                                    name: profile.name,
                                    email: profile.email
                                }
                            }}>
                                <Story
                                    profile={profile}
                                />
                            </Link>
                        </div>
                    ))
                    }
                </div >
                <Posts />
            </div>
        </React.Fragment>
    )
}

export default ImageSlider
