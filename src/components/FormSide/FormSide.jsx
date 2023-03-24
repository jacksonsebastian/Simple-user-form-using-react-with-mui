import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Profile from "./Profile/Profile";
import Form from "./Form/Form";

export default function BasicTextFields() {
  return (
    <Box>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Profile/>
      </Grid>
      <Grid item xs={8}>
        <Form/>
      </Grid>
    </Grid>
    </Box>

    // <Box>
    //   <Grid container rowSpacing={0} >
    //     <Grid item xs={6}>
    //       <TextField
    //         sx={{ mt: 2, width: "50ch" }}
    //         id="outlined-basic"
    //         label="Name"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch" }}
    //         id="outlined-basic"
    //         label="Phone Number"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch" }}
    //         id="outlined-basic"
    //         select
    //         label="Country"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch" }}
    //         id="outlined-basic"
    //         label="City"
    //         variant="outlined"
    //       />
    //     </Grid>
    //     <Grid item xs={6} >
    //       <TextField
    //         sx={{ mt: 2, width: "50ch",float: "right" }}
    //         id="outlined-basic"
    //         label="Email Address"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch", float: "right" }}
    //         id="outlined-basic"
    //         label="Address"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch", float: "right" }}
    //         id="outlined-basic"
    //         label="State/Region"
    //         variant="outlined"
    //       />
    //       <TextField
    //         sx={{ mt: 2, width: "50ch", float: "right" }}
    //         id="outlined-basic"
    //         label="Zip/Code"
    //         variant="outlined"
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <TextField
    //         fullWidth
    //         sx={{ mt: 2}}
    //         id="outlined-basic"
    //         label="About"
    //         variant="outlined"
    //       />
    //     </Grid>
    //   </Grid>
    //   <Button sx={{ background: "green", mt: 2,float: "right"}}variant="contained" >Contained</Button>
    // </Box>
  );
}
