import * as React from 'react';
import Box from '@mui/material/Box';

import "./ItemCount.css"


const ItemCount = () => {

    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div className='counter'>

            </div>
        </Box>
    );
}

export default ItemCount
