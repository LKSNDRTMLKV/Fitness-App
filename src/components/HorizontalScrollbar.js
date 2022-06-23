import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';

import Icon from '../assets/icons/gym.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const HorizontalScrollbar = ({data,bodyPart, setBodyPart}) => {

    
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );

}

const RightArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};



    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data && data.map((item, idx) => {
                return (
                    <Box key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        <Stack
                            type="button"
                            alignItems="center"
                            justifyContent="center"
                            className="bodyPart-card"
                            sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
                            onClick={() => {
                                setBodyPart(item);
                                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
                            }}
                        >
                            <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
                            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
                        </Stack>
                    </Box>
                )
            })}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;