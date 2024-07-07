import React, { useContext, useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, Button} from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const myDivRef = useRef();
  
  function handleClickLeft() {
    myDivRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  }
  function handleClickRight() {
    myDivRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  }

  return(
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

    <img src={LeftArrowIcon} alt=""  onClick={handleClickRight} className=' h-10 w-10 cursor-pointer' />
        
        
        <div ref={myDivRef} style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }} >
          {data.map((item) => (
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
              >
            {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :
              <ExerciseCard exercise={item} />
            }

            </Box>
          ))}
        </div>
            <img src={RightArrowIcon} alt="" onClick={handleClickLeft}  className='cursor-pointer h-10 w-10 ' />
            
    </Box>

  );

    };

export default HorizontalScrollbar;