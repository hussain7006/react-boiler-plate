import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function MyButton(props) {
    const { label, variant, onclick, loading, disabled, height, width, loaderSize, loaderColor, thickness } = props;
    return (
        <Box>
            <Button
                variant={variant}
                onClick={onclick}
                disabled={loading || disabled}
                sx={{ height: { height }, width: { width } }}
            >
                {loading ? <CircularProgress size={loaderSize} color={loaderColor} thickness={thickness} /> : label}
            </Button>
        </Box>
    )
}

export default MyButton