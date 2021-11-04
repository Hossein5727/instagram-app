import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function ReverseTimer() {

    const [timer, setTimer] = useState(5)
    const history = useHistory()

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000);

        if (timer === 0) {
            history.push("/welcomePage")
        }

        return () => clearInterval(interval)
    }, [timer])

    return (
        <div className="w-screen h-screen p-60 flex justify-center align-middle">
            <h1 className="text-5xl text-center flex justify-center align-middle">Timer: {timer}</h1>
        </div>
    )
}

export default ReverseTimer
