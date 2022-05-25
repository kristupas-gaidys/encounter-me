import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { DirectionsWalk } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const navigateBrowse = () => navigate('/trails');
  // eslint-disable-next-line no-console
  const navigateStatistics = () => console.log('navigates to statistics');
  // eslint-disable-next-line no-console
  const navigateCreate = () => console.log('navigates to trail creation');

  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Grid container sx={{ py: 2, px: 3, flexDirection: 'row' }}>
        <Grid item xs={6}>
          <Typography variant="h4">
            <DirectionsWalk sx={{ pr: 1 }} />
            EncounterMe
          </Typography>
        </Grid>
        <Grid item container spacing={3} xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Grid item>
            <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateBrowse}>
              <Typography variant="h6">
                Browse
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateCreate}>
              <Typography variant="h6">
                Upload trail
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateStatistics}>
              <Typography variant="h6">
                Calculate statistics
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
