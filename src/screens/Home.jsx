import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getData } from '../config/firebase/firebaseMethods'

function Home() {
    const [users, setUsers] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        if (params.id) {
            navigate(`/home/${params.id}`)
        } else {
            navigate('/login')
        }

        getData('todos').then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


    }, [])
    return (
        <Box>
            <Typography variant='h1'>Home Page</Typography>

            <Box>
                {/* {users.length > 0 ?
                    <Box>
                        {users.map((e, i) => <li>{e.name}</li>)}
                    </Box> :
                    <Box>
                        <Typography variant='h4'>Loading...</Typography>
                    </Box>
                } */}
            </Box>
        </Box>
    )
}

export default Home