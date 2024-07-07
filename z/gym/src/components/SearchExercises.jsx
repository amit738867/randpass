import React,{useState, useEffect} from  'react'
import {Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [searchTxt, setSearchTxt] = useState("")
  const [bodyParts, setBodyParts] = useState([])
  
  const handleSearch = async() =>{
    if(searchTxt){
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=100', exerciseOptions)
      
      const searchedExercises = exercisesData.filter(
      (exercise)=> exercise.name.toLowerCase().includes(searchTxt)
      || exercise.target.toLowerCase().includes(searchTxt)
      || exercise.equipment.toLowerCase().includes(searchTxt)
      || exercise.bodyPart.toLowerCase().includes(searchTxt)
      );
      setSearchTxt('');
      setExercises(searchedExercises);

    }
  }


  useEffect(() => {
  const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
  }, [])
  




  return (
  <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
    <Typography fontWeight={700} mb='50px' textAlign='center'
    sx={{fontSize:{lg:'44px', xs:'30px'}}} >
    Awesome Exercises You <br /> Should Know
    </Typography>

    <Box position='relative' mb='72px'>
      <TextField
      sx={{
          input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px',
          },
          width:{lg:'800px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
          
      }}
      height='76px'
      color='error'
      value={searchTxt}
      onChange={(e)=> setSearchTxt(e.target.value.toLowerCase())}
      placeholder='Search Exercises'
      type='text'
      />

      <Button className='search-btn'
      sx={{
        bgcolor:'#FF2625',
        color:'#fff',
        textTransform:'none',
        width:{lg:'175px', xs:'80px'},
        fontSize:{lg:'20px', xs:'14px'},
        height:'56px',
        position:'absolute',
        right:'0px',
        top:'0px'

      }}
      onClick={handleSearch}
      >
      Search
      </Button>
     
    </Box>
    <Box sx={{position:'relative', width:'100%', p:'20px'}} >
        <HorizontalScrollbar data={bodyParts} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        isBodyParts
        />
    </Box>
      
  </Stack>
  )
}

export default SearchExercises