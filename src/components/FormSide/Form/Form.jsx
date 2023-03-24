import { Card, MenuItem, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import React from "react";

const Form = () => {
  return (
    <Box >
      <Card sx={{p: 2 }}>
        <Stack direction='row' justifyContent="space-between" spacing={1} sx={{p: 2 }}>
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Name" variant="outlined" />
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Email Address" variant="outlined" />
        </Stack>
        <Stack direction='row' justifyContent="space-between" spacing={1} sx={{p: 2 }}>
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Address" variant="outlined" />
        </Stack>

        <Stack direction='row' justifyContent="space-between" spacing={1} sx={{p: 2 }}>
            <FormControl sx={{ width: '50ch' }}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Country"
                
                >
                    <MenuItem value={1}>India</MenuItem>
                    <MenuItem value={2}>Pakistan</MenuItem>
                    <MenuItem value={3}>America</MenuItem>
                </Select>
        </FormControl>
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Address" variant="outlined" />
        </Stack>

        <Stack direction='row' justifyContent="space-between" spacing={1} sx={{p: 2 }}>
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="City" variant="outlined" />
            <TextField sx={{ width: '50ch' }} id="outlined-basic" label="Zip/Code" variant="outlined" />
        </Stack>
        <Stack sx={{p: 2 }}>
        <TextField
          id="outlined-multiline-static"
          label="About"
          multiline
          rows={3}
          defaultValue="Add Something!....."
        />
        </Stack>
        <Stack sx={{p: 2 }} direction="row" justifyContent="flex-end">
            <Button variant="contained" color="success">
                Save Changes
            </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default Form;
