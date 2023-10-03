"use client";

import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { useContext } from "react";
import { convertToDataTableData } from "../helpers/dataGridHelper";
import { UserContext } from "..";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  const viewUserDetails = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  return (
    <Container>
      <Grid spacing={2}>
        <PageHeader title="People" />
        <DataTable
          data={convertToDataTableData(users, viewUserDetails)}
          testid="users-grid"
        />
      </Grid>
    </Container>
  );
};

export default Users;
