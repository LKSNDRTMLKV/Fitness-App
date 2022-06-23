import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import API from '../api/API';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = (props) => {
    const {id} = useParams();
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetExercises, setTargetExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"});

        const fetchExerciseData = async () => {
            const exerciseDetailData = await fetchData(API.exercise + id, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(API.youtubeExercises + exerciseDetailData.name + 'exercise', youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            console.log(exerciseVideosData)

            const targetExercisesData = await fetchData(API.targetExercises + exerciseDetailData.target, exerciseOptions);
            setTargetExercises(targetExercisesData);
            
            const equipmentExercisesData = await fetchData(API.equipmentExercises + exerciseDetailData.equipment, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);

            // console.log(exerciseVideosData.contents)
            // console.log(exerciseDetail);
            // console.log(targetExercises);
            // console.log(equipmentExercises);
        }
        fetchExerciseData();

    },[id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetExercises={targetExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciseDetail;