import React from 'react';
import { Typography, Stack, Button,Box,Link } from '@mui/material';
import API from '../api/API';
import Loader from './Loader';

const ExerciseVideos = ({exerciseVideos, name}) => {
    return (
        <Box sx={{mt:{lg:"120px",xs:"30px"},p:"20px"}}>
            <Typography  variant="h3">Watch <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exercise videos</Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
            sx={{flexDirection:{lg:"row"}, gap:{lg:"100px", xs:"10px"}}}>



                {exerciseVideos.length ? 
                exerciseVideos.slice(0,6).map((item,idx) => (
                    <a key={idx} className="exercise-video" href={API.youtubeWatch + item.video.videoId} target="_blanc" rel="noreferrer">
                        <img src={item.video.thumbnail[idx].url} alt={item.video.title} />
                        <Typography variant="h5" >{item.video.title}</Typography>
                        <Typography variant="h6" >{item.video.channelName}</Typography>
                    </a>
                )): (<Loader />)}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;