import React, { useEffect } from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import img1 from '../../assets/image/02.jpg'
import { Link } from 'react-router-dom'

function ProfileInstagram({ history }) {

    useEffect(() => {
        console.log(history.location.state);
    }, [])

    const {name} = history.location.state

    return (
        <div className="flex justify-center align-middle p-5">
            <Card sx={{ maxWidth: 400 }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={img1}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/">
                        <Button size="small">Back Home</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProfileInstagram
