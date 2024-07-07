import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';



const Exercises = ({exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisePerPage] = useState(9);
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirsttExercise =  indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirsttExercise, indexOfLastExercise);


  const paginate = (event, value) =>{
      setCurrentPage(value);
      window.scrollTo({top: 1800, behavior: 'smooth'});
  }

  useEffect(()=>{
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
      exercisesData = await fetchData
        ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }else{
         exercisesData = await fetchData
        (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData);
      }

    fetchExercisesData();
  }, [bodyPart])
  


  return (
    <Box id='exercises'
      sx={{ mt:{lg:'110px'} }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h6' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} 
      flexWrap='wrap' justifyContent='center'>
          {
            currentExercises.map((exercise, index) => (
               <ExerciseCard key={index} exercise={exercise} />
            )) 
          }
      </Stack>

      <Stack sx={{mt:{lg:'100px', xs:'50px'}}} alignItems='center'>
        {exercises.length > 9 &&(

          <Pagination 
          color='error'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisePerPage)}
          page={currentPage}
          onChange={paginate}
          
          />
          )}
      </Stack>
      
    </Box>
  )
}

export default Exercises