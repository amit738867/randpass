import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png';
import { Stack } from '@mui/material';


const NavBar = () => {
  return (
    <Stack direction='row'
    justifyContent='space-between'
    sx={
      {
        gap:{sm:'122px', xs:'40px'},
        mt:{sm:'32px', xs:'20px'},
        justifyContent:'none'
      }
    } px='20px' >
      <Link to='/'>
      <img src={Logo} alt="logo" className='h-[48px] w-[48px] mx-5 my-0 ' />
      </Link>
      <div className='flex text-xl font-sans font-bold items-end gap-10 mx-5 my-0'>
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </div >
    </Stack>
    
  )
}

export default NavBar