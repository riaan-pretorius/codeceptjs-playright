import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "..";
import { Box, Container, Grid, TextField } from "@mui/material";

const UserDetail = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const currentUser = users.find((u) => u.id === parseInt(id ?? "0"));
  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid>
          <TextField
            id="user-firstname"
            label="Firstname"
            variant="standard"
            value={currentUser?.firstname}
          />
          <TextField
            id="user-lastname"
            label="Lastname"
            variant="standard"
            value={currentUser?.lastname}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default UserDetail;
