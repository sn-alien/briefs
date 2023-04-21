import Grid from "@mui/material/Unstable_Grid2";

import { FormCard } from "@components/FormCard";
import { Sidebar } from "@components/Sidebar";

const Home = () => {
  return (
    <Grid container direction="row">
      <Sidebar></Sidebar>
      <Grid spacing={6} container direction="row">
        <Grid>
          <FormCard></FormCard>
        </Grid>
        <Grid>
          <FormCard></FormCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
