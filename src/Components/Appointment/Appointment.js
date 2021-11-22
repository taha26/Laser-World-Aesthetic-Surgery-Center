import React, { useState, useEffect } from "react";
import './Appointment.css'

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// import { useInput } from '@mui/core';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import { A700, orange } from '@mui/material/colors';
// import "../Login/Login.css";
// import "./Register.css";
import { Link } from "react-router-dom";
import { ListItemText } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { db } from "../../Configuration/Firebase";
import { ref, set, push, child } from "firebase/database";
import { UpdateDisabledTwoTone } from "@mui/icons-material";
// import {
//     // getDatabase
//     set, ref, child, update, remove
// } from "firebase/app";

export const Appointment = () => {

    // const [disable, setDisable] = useState(true);
    const [gender, setGender] = useState("");
    const [services, setServices] = useState("");
    const [dob, setDob] = useState(new Date());
    // const [checked, setChecked] = useState(false);
    // const [data, setData] = useState([])
    const [values, setValues] = useState({
        email: "",
        // password: "",
        phone: "",
        name: "",
        // showPassword: false,
    });
    const [dateTime, setDateTime] = useState(new Date('2018-01-01T00:00:00.000Z'));
    const [message, setMessage] = useState();
    console.log("DTTTTT--->>>>", dateTime)
    console.log("Message--->>>>", message)
    // const SignUp = () => {
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, values.email, values.password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             // ...
    //             setDoc(doc(db, "userData", user.uid), {
    //                 email: values.email,
    //                 phone: values.phone,
    //                 fullname: values.fullname,
    //                 Gender: gender,
    //                 date: dob.toLocaleDateString(),
    //             })
    //             setData(user)
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             alert(errorMessage)
    //         });
    // };
    // console.log(data.uid)
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChangeServices = (event) => {
        setServices(event.target.value);
    };

    // const handleChangeChecked = (event) => {
    //     setChecked(event.target.checked);
    //     setDisable(false);
    // };
    console.log("gender", gender)
    console.log("services", services)
    console.log("dob", dob.toLocaleDateString(),)
    console.log("values", values)



    // const [uid, setKey] = useState()
    // console.log("KEY--->>>", uid)
    const submit = () => {

        // setKey(push(child(ref(db), 'appointment/user/')).key);

        // fire.database().ref('/').child("user/").set(values)
        var uid;
        set(ref(db, `appointment/user/${uid = push(child(ref(db), 'appointment/user/')).key}`), {
            name: values.name,
            email: values.email,
            phone: values.phone,
            gender: gender,
            dob: dob.toLocaleDateString(),
            service: services,
            appointmentDate: dateTime.toLocaleDateString(),
            appointmentTime: dateTime.toLocaleTimeString(),
            message: message,
            uid: uid,
        }).then(() => {
            // dispatch({type:"SETUSER",payload:data_user})
            console.log("data send")

        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            console.log(errorMessage)
            console.log(error)
        });



    }
    return (
        <div className="divLog">
            <div className="divHead">
                <h1>Book Your Appointment</h1>
            </div>
            <div className="divForm">
                <Box>
                    <Grid className="grid" container spacing={0} columns={12}>
                        <Grid className="inputGrid" item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& .MuiTextField-root": { m: 1, width: "30ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="standard-textarea"
                                        label="Please enter your Email"
                                        variant="standard"
                                        onChange={handleChange("email")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        variant="standard"
                                        onChange={handleChange("phone")}
                                    />
                                </div>
                            </Box>
                            <Box>
                                <br />
                                <div className="datePick">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            views={["day", "month", "year"]}
                                            label="Birthday"
                                            value={dob}
                                            onChange={(newValue) => {
                                                setDob(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} helperText={null} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="Gender">
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={gender}
                                            onChange={handleChangeGender}
                                            label="Gender"
                                        >
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Box>
                        </Grid>
                        <Grid className="btnGrid" item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& .MuiTextField-root": { m: 1, width: "30ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className="emailGrid-Div">
                                    <TextField
                                        className="emailGridDiv"
                                        id="standard-textarea"
                                        label="Please enter first and last name"
                                        variant="standard"
                                        onChange={handleChange("name")}
                                    />
                                </div>
                                <div
                                    className="emailGrid-Div"
                                >
                                    <FormControl variant="standard" sx={{ m: 1, width: "30ch" }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Services
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={services}
                                            onChange={handleChangeServices}
                                            label="Services"
                                        >
                                            <MenuItem value={"Microneedling"}>Microneedling</MenuItem>
                                            <MenuItem value={"Hydrofacial"}>Hydrofacial</MenuItem>
                                            <MenuItem value={"Face & Scalp"}>Face & Scalp</MenuItem>
                                            <MenuItem value={"Chemical Peels"}>Chemical Peels</MenuItem>
                                            <MenuItem value={"Whitening Injections"}>Whitening Injections</MenuItem>
                                            <MenuItem value={"Acne Treatment"}>Acne Treatment</MenuItem>
                                            <MenuItem value={"Filler"}>Filler</MenuItem>
                                            <MenuItem value={"Botox"}>Botox</MenuItem>
                                            <MenuItem value={"Electro"}>Electro</MenuItem>
                                            <MenuItem value={"Absorbtion"}>Absorbtion</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3} style={{ marginTop: "2%" }}>
                                        <DateTimePicker
                                            label="Select Date & Time As Per Your Availibility"
                                            renderInput={(params) => <TextField {...params} />}
                                            value={dateTime}
                                            onChange={(newValue) => {
                                                setDateTime(newValue);
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <div className="emailGrid-Div-text">
                                    <p>Message</p>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        // placeholder="Minimum 3 rows"
                                        style={{ width: "50%", background: "#f8f4f4" }}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </Box>

                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="contained"
                                    // disabled={disable}
                                    className="btnLog"
                                    onClick={() => submit()}
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
