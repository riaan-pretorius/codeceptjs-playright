import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const PageHeader = (props: Props) => {
  return (
    <Grid xs={12} lg={6} style={{ marginTop: "1rem" }}>
      <Typography variant="h4" data-testid="title">
        {props.title}
      </Typography>
    </Grid>
  );
};

export default PageHeader;
