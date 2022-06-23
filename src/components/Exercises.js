import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography, Button} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import API from '../api/API';

const Exercises = ({exercises, setExercises, bodyPart}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    useEffect(() => {
        const fetchExerciseData = async () => {
            let exerciseData = [];

            if(bodyPart == 'all') {
                exerciseData = await fetchData(API.exercises, exerciseOptions);
            }
            else {
                exerciseData = await fetchData(API.bodyPart + bodyPart, exerciseOptions)
            }
            setExercises(exerciseData);
        }

        fetchExerciseData();
    
    },[bodyPart])

    const handlePagination = (e,value) => {
        setCurrentPage(value);
        window.scrollTo({top:"1800", behavior:"smooth"})
    }



    return (
       <Box id="exercises" sx={{mt:{lg:"110px"}}} mt="50px" p="20px">
            <Typography variant="h4" sx={{mb:"45px", ml:{xl:"60px",xs:"30px"}}}>Showing Results</Typography>
            <Stack direction="row" sx={{gap:{ lg: '100px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {exercises && currentExercises.map((exercise,idx) => 
                    <ExerciseCard key={exercise.id || idx} exercise={exercise}/>
                )}
            </Stack>

            <Stack mt="100px" alignItems="center">
                    {exercises.length > exercisesPerPage && (
                        <Pagination 
                        color="standard"
                        shape="rounded"
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={handlePagination}
                        />
                    )}
            </Stack>
           

        </Box>
    );
};

export default Exercises;