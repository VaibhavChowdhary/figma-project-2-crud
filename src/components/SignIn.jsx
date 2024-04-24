import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import CustomTypo from "../CustomComponents/CustomTypo";
import CustomTextField from "../CustomComponents/CustomTextfield"
import CustomButton from "../CustomComponents/CustomButton"
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validate";
export default function SignIn() {

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const isEmailValid = validateEmail(event.target.value);
    if (!isEmailValid) {
      setEmailError(true)
    } else {
      emailRef.current.value = event.target.value;
      setEmailError(false)
    }
  }

  const handlePasswordChange = (event) => {
    const isPasswordValid = validatePassword(event.target.value);
    if (!isPasswordValid) {
      setPasswordError(true)
    } else {
      passwordRef.current.value = event.target.value;
      setPasswordError(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    navigate('/dashboard/home')
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "linear-gradient(to bottom,#FEAF00 40%, #FEAF00)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "475px",
            height: "550px",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #000000",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginTop: "44px" }}>
            <Box
              sx={{
                height: "39px",
                marginBottom: "43px",
                textAlign: "center"
              }}
            >

              <span style={{ fontWeight: "900", fontSize: "32px", borderLeft: "7px solid #F8D442", paddingLeft: "12.5px", textShadow: "1px 4px px lightgrey" }}>
                CRUD OPERATIONS
              </span>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, flexDirection: "column" }}>
              <Box>
                <CustomTypo fontWeight="bold" fontSize={22}>
                  SIGN IN
                </CustomTypo>
              </Box>
              <Box>
                <CustomTypo fontWeight="regular" fontSize={14} color="#6C6C6C">
                  Enter your credentials to access your account
                </CustomTypo>
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: 2, marginTop: "50px" }}>
                <Box >
                  <CustomTypo fontSize={14} color="#6C6C6C">Email</CustomTypo>
                  <CustomTextField ref={emailRef} onChange={handleEmailChange} placeholder="Enter your email" error={emailError} helperText={emailError && "Enter valid Email"} name="email" width='415px' height='44px' marginTop="10px" />
                </Box>
                <Box>
                  <CustomTypo fontSize={14} color="#6C6C6C">Password</CustomTypo>
                  <CustomTextField ref={passwordRef} onChange={handlePasswordChange} placeholder="Enter your password" error={passwordError} helperText={passwordError && "Password length should be in 5 to 10"} name="password" type="password" width='415px' height='44px' marginTop="10px" />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <CustomButton width="415px" backgroundColor="#FEAF00" type="submit">
                    <CustomTypo fontSize={14}>
                      SIGN IN
                    </CustomTypo>
                  </CustomButton>
                  <Box sx={{ marginTop: "27px", display: "flex", gap: 0.5, justifyContent: "center", alignItems: "center" }}>
                    <CustomTypo color="#6C6C6C">Forgot your password?</CustomTypo>
                    <Link to='/signup' style={{ textDecoration: "underline", color: "#FEAF00", fontSize: '14px', fontWeight: "500" }}>
                      Reset Password
                    </Link>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}
