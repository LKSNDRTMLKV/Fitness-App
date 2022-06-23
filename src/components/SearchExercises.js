import { Stack, TextField, Typography, Box, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import API from '../api/API';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({exercises, setExercises,bodyPart,setBodyPart}) => {

    const [search, setSearch] = useState("");
    
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData(API.bodyParts, exerciseOptions)
            setBodyParts(bodyPartsData);
        }

        fetchExerciseData();
    },[])

    const handleExercises = (e) => {
        setSearch(e.target.value.toLowerCase());
        console.log(search)
    }

    const handleSearch = async () => {
        if(search) {
            const exerciseData = await fetchData(API.exercises, exerciseOptions)
            console.log(exerciseData)
            const searchedExercises = exerciseData.filter((exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) 
            )
            setSearch("");
            setExercises(searchedExercises);
            console.log(exercises)
        }
    }

    return (
        <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="70px">
                <TextField
                    sx={{
                        input: {fontSize:{lg:"20px", sm:"14px"}, fontWeight: "700", border: "none", borderRadius: "4px", height:"30px" },
                        width: { lg: "900px", md:"575px", xs: "250px" },
                        
                    }}
                    
                    value={search}
                    onChange={handleExercises}
                    placeholder="Search Exercises"
                />
                <Button onClick={handleSearch} className="search-btn"
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "160px", xs: "80px" },
                        fontSize:{lg:"20px", xs:"14px",
                        height:"62px",
                        }
                    }}
                    
                >Search</Button>
            </Box>

            <Box sx={{position:"relative", width:"100%", p:"20px"}}>
            <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>

        </Stack>
    );
};

export default SearchExercises;