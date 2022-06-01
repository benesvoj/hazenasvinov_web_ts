import React from 'react';
import {Box} from '@chakra-ui/react';


function Logo() {
    const logoProps = {
        imgUrl: '/../../assets/images/logo.png',
        imgAlt: 'Logo oddilu',
    }

    return (
        <>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <img src={logoProps.imgUrl} alt={logoProps.imgAlt}/>
            </Box>
        </>
    );
}

export default Logo;