import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetExercises,equipmentExercises}) => {
    return (
        <Box sx={{mt:{lg:"100px",xs:"20px"}}}>

            <Box sx={{mt:{lg:"60px",xs:"10px"}}}>
            <Typography variant="h4">Exercises that target the same muscle group</Typography>    
            <Stack direction="row" sx={{p:"20px", position:"relative"}}>
                {targetExercises.length ? <HorizontalScrollbar  data={targetExercises}/> : <Loader />}
            </Stack>
            </Box>

            <Box sx={{mt:{lg:"60px",xs:"10px"}}}>
            <Typography variant="h4">Exercises that target the same equipment</Typography>
            <Stack direction="row" sx={{p:"20px", position:"relative"}}>
                {targetExercises.length ? <HorizontalScrollbar  data={equipmentExercises}/> : <Loader />}
            </Stack>
            </Box>
        </Box>
    );
};

export default SimilarExercises;