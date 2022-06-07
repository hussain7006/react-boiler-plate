import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getData } from '../config/firebase/firebaseMethods'

function Home() {
    const [users, setUsers] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
        if(params.id){
            navigate(`/home/:${params.id}`)
        }else{
            navigate('/login')
        }
        async function collecUserData() {
            let userData = await getData('users', params.id);
            return userData;
    
        }

        collecUserData().then((res) => {
            console.log('====================================');
            console.log(res);
            console.log('====================================');
            setUsers(res)
        }).catch((err) => console.log(err));

    }, [])
    return (
        <Box>
            <Typography variant='h1'>Home Page</Typography>

            <Box>
                {users.length > 0 ?
                    <Box>
                        {users.map((e, i) => <li>{e.name}</li>)}
                    </Box> :
                    <Box>
                        <Typography variant='h4'>Loading...</Typography>
                    </Box>}
            </Box>
        </Box>
    )
}

export default Home