import { Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
const Profile = () => {
  const [checked, setChecked] = useState(false);
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };

  const [selectedRadio, setSelectedRadio] = useState(false);
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <Box>
      <Card>
        <Stack alignItems="center" sx={{ mt: 5 }}>
          <Box sx={{ mb: 3 }}>
            {checked && (
              <img
                style={{ borderRadius: "50%" }}
                width={250}
                height={250}
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=740&t=st=1679559621~exp=1679560221~hmac=e84f0c4ca476b71e68d5abfe8c4120c4113bb5275607cebf4096c9807239ad24"
                alt="avatar"
              />
            )}
          </Box>
          <Typography
            variant="p"
            style={{ width: "50%", color: "gray", textAlign: "Center" }}
          >
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
          </Typography>
          <Box sx={{ mb: 3, mt: 3 }}>
            <Stack direction={"row"} alignItems="center" spacing={1}>
              <Typography variant="p" component="h4">
                Public Picture
              </Typography>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked}
                    onChange={handleSwitchChange}
                  />
                }
              />
            </Stack>
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={selectedRadio}
                onChange={handleRadioChange}
              >
                <Stack direction="row">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>
          {selectedRadio === "male" && (
            <Paper
              elevation={3}
              sx={{ width: "70%", textAlign: "center", p: 2 }}
            >
              <Typography variant="subtitle1" component="h4">
                Name: Jackson
              </Typography>
              <Typography variant="subtitle1" component="h4">
                Emp Code: TF011
              </Typography>
              <Typography variant="subtitle1" component="h4">
                DOB: 13/09/1999
              </Typography>
            </Paper>
          )}

          {selectedRadio === "female" && (
            <Paper
              elevation={3}
              sx={{ width: "70%", textAlign: "center", p: 2 }}
            >
              <Typography variant="subtitle1" component="h4">
                Name: Female
              </Typography>
              <Typography variant="subtitle1" component="h4">
                Emp Code: TF012
              </Typography>
              <Typography variant="subtitle1" component="h4">
                DOB: 13/09/1998
              </Typography>
            </Paper>
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default Profile;
