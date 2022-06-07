import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyButton from '../config/components/MyButton';
import MyInput from '../config/components/MyInput';
import { logIn } from '../config/firebase/firebaseMethods';

function LogIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    let submitForm = () => {
        let { email, password } = formData;

        if (email === "" && password === "") {
            return alert("Please enter requied fields !")
        } else if (email === "") {
            return alert("Please enter your Email !")
        } else if (password === "") {
            return alert("Please type your password !")
        } else if (password.length < 6) {
            return alert("Password must be 6 digit !")
        }

        setLoading(true);
        logIn(formData).then((res) => {
            setLoading(false);
            console.log(res)
            navigate(`/home/${res.user.uid}`)
        }).catch((error) => {
            setLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message

            alert(errorCode)
        })
    }
    return (
        <Box>
            <Box sx={{
                // border: '2px solid',
                height: '99vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>

                <Box sx={{
                    // border: '2px solid',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 4px 0.2px',
                    height: '70vh',
                    width: '60vh',
                }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                marginTop: '8%'
                            }}

                        >
                            Log In
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '8%'
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            marginTop: '10%'
                        }}
                    >
                        <MyInput
                            label="Email"
                            type="email"
                            required={true}
                            variant="standard"
                            onchange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: '10%'
                        }}
                    >
                        <MyInput
                            label="Password"
                            type="password"
                            required={true}
                            variant="standard"
                            onchange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </Box>
                    <Box
                        sx={{
                            marginTop: '10%'
                        }}
                    >
                        <MyButton
                            label="Log In"
                            variant="contained"
                            onclick={submitForm}
                            loading={loading}
                            height="40px"
                            width="95px"
                            loaderSize={25}
                            thickness={7}
                            loaderColor="primary"
                        />
                    </Box>
                    <Box
                        sx={{
                            
                            height: "22%",
                            display: "flex",
                            alignItems: "end",
                            paddingLeft: "20px"
                        }
                        }
                    >
                        <Link to={'/signup'}>Create New User</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LogIn;