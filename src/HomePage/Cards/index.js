import React from "react";
import { Grid } from "@material-ui/core";
import MainCard from "./Card";
export default function Cards() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <MainCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainCard />
        </Grid>
      </Grid>
    </>
  );
}
