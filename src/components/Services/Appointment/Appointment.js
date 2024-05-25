import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import useAuth from "../../../Hooks/useAuth";
import { db } from "../../Login/Firebase/Firebase.config"; // Adjust the path as necessary

const Appointment = () => {
  const { user } = useAuth();
  const [value, setValue] = React.useState(new Date());
  const [docName, setDocName] = React.useState("");
  const [problemType, setProblemType] = React.useState("");

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  const handleProblemTypeChange = (event) => {
    setProblemType(event.target.value);
  };

  const handleAppointmentSubmit = async () => {
    try {
      await addDoc(collection(db, "appointments"), {
        doctorName: docName,
        userName: user.displayName,
        userEmail: user.email,
        appointmentDate: value,
        problemType: problemType,
        createdAt: new Date(),
      });
      swal("Your Appointment is Done You will Receive a mail ASAP.", {
        button: false,
        icon: "success",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      swal("Failed to book appointment. Please try again.", {
        button: true,
        icon: "error",
      });
    }
  };

  return (
    <Box
      id="appointment"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Container style={{ justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              mb: 5,
            }}
          >
            Select your time and data for Appointment
          </Typography>
        </Container>
        {/* set doctor name */}
        <FormControl sx={{ mb: 5, minWidth: "50%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Doctor Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleChange}
            autoWidth
            label="Select Doctor Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Dr. Lorem Ipsum.">Dr. Lorem Ipsum.</MenuItem>
            {/* Add more doctor names as needed */}
          </Select>
        </FormControl>
        <TextField
          sx={{ mb: 2 }}
          value={user.displayName}
          fullWidth
          label="Your Name"
          id="fullWidth"
        />
        <TextField
          sx={{ mb: 2 }}
          value={user.email}
          fullWidth
          label="Your Mail"
          id="fullWidth"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              label="Appointment Date"
              onError={console.log}
              minDate={new Date("2024-05-18T00:00")}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="____/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          label="Problem type"
          id="fullWidth"
          value={problemType}
          onChange={handleProblemTypeChange}
        />

        <Button
          sx={{ p: 1, mt: 2, mb: 5 }}
          onClick={handleAppointmentSubmit}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>
      </Container>
    </Box>
  );
};

export default Appointment;
