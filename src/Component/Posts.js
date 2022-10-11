import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Posts() {
    return (
        <div className='cards' >

        <Card className='card'  >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://thumbs.dreamstime.com/b/lonely-elephant-against-sunset-beautiful-sun-clouds-savannah-serengeti-national-park-africa-tanzania-artistic-imag-image-106950644.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h4" >Today News</Typography>
                    <Typography variant="body2" >it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea className='btn' >
                <Button size='small'  color='primary' >Share</Button>
                <Button size='small'  color='primary' >Learn More</Button>
            </CardActionArea>
        </Card>
                    </div>
    )
}

export default Posts
