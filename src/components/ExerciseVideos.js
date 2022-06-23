import React from 'react';
import { Typography, Stack, Button,Box,Link } from '@mui/material';
import API from '../api/API';
import Loader from './Loader';

const ExerciseVideos = ({exerciseVideos, name}) => {
    return (
        <Box sx={{mt:{lg:"120px",xs:"30px"},p:"20px"}}>
            <Typography  variant="h4">Watch <span style={{color:"#ff2625", textTransform:"capitalize",mb:"40px"}}>{name}</span> exercise videos</Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
            sx={{flexDirection:{lg:"row"}, gap:{lg:"60px", xs:"10px"}}}>



                {exerciseVideos.length > 0 ? 
                exerciseVideos.slice(0,6).map((item,idx) => (
                    <a key={idx} className="exercise-video" href={API.youtubeWatch + item.video.videoId} target="_blanc" rel="noreferrer">
                        <img style={{ borderTopLeftRadius: '20px', maxHeight:"180px" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} fontWeight={600} color="#000">{item.video.title}</Typography>
                        <Typography fontSize="14px" color="#000">{item.video.channelName}</Typography>
                    </a>
                )): (<Loader />)}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;