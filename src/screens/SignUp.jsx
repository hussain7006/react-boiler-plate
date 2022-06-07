import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../config/components/MyButton';
import MyInput from '../config/components/MyInput';
import { signUp, sendData } from '../config/firebase/firebaseMethods';

function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    let submitForm = () => {
        let { name, email, password } = formData;

        if (name === "" && email === "" && password === "") {
            return alert("Please enter requied fields !")
        } else if (name === "") {
            return alert("Please enter your Name !")
        } else if (email === "") {
            return alert("Please enter your Email !")
        } else if (password === "") {
            return alert("Please type your password !")
        } else if (password.length < 6) {
            return alert("Password must be 6 digit !")
        }

        setLoading(true);

        signUp(formData).then((res) => {
            setLoading(false);
            console.log(res)
            sendData(formData, 'users', res.user.uid).then((res) => {
                console.log("successfully login");
                navigate('/');
            }).catch((err) => {
                console.log(err);
            })


        }).catch((err) => {
            setLoading(false);
            console.log(err)
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
                            Sign Up
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '8%'
                        }}
                    >
                        <MyInput
                            label="Name"
                            required={true}
                            variant="standard"
                            state={formData}
                            setState={setFormData}
                            onchange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
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
                            label="Sign Up"
                            variant="contained"
                            onclick={submitForm}
                            loading={loading}
                            loaderSize={25}
                            loaderColor="primary"
                            height="40px"
                            width="95px"
                            thickness={7}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SignUp