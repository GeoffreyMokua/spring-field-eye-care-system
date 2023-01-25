import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../Context/patient-context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
function Register({ handleClose }) {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateofBirth] = useState("");
  // const { onSubmit} = useContext(PatientContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, phoneNumber, dateOfBirth);
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          // localStorage.clear();
          // localStorage.setItem("patientToken", data[1].token);
          // localStorage.setItem("patient", data[0].id);
          // localStorage.setItem("patient_data", JSON.stringify(data));
          // handleNotification();
        });
      } else {
        res.json().then((error) => alert(error.errors));
      }
    });
    navigate("/login");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Phone Number"
        variant="filled"
        type="Phone Number"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        label="Date of Birth"
        variant="filled"
        type="Date of Birth"
        required
        value={dateOfBirth}
        onChange={(e) => setDateofBirth(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
}

export default Register;
