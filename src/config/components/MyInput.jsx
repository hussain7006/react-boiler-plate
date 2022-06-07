import { Box } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

function MyInput(props) {
    const { id, label, variant, type, required, onchange } = props;

    return (
        <Box>
            <TextField
                id={id}
                label={label}
                type={type}
                variant={variant}
                required={required}
                onChange={onchange}
            />

        </Box>
    )
}

export default MyInput