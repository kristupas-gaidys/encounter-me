import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { TrailType } from '../types/trail';
import Spinner from './Loading';

export default function Trail() {
  const { id } = useParams();
  const { data, loading } = useFetch({ path: `/trail/${id}`, method: 'GET' });
  const navigate = useNavigate();

  const trail = data && (data as TrailType);
  const [disabled, setDisabled] = useState(false);

  const handleRating = async (num: number) => {
    trail.rating = num;
    setDisabled(true);
    await axios.put('https://localhost:5001/trail/', trail);
  };

  if (!data && loading) {
    return <Spinner open={!data && loading} />;
  }

  return (
    trail && (
      <Box sx={{ width: '100%' }}>
        <Grid container sx={{ m: 3 }}>
          <Grid item container xs={12} sx={{ px: 4 }} spacing={3}>
            <Grid item container xs={12} justifyContent="space-between">
              <Grid item>
                <Typography variant="h4">{trail.name}</Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Button disabled={disabled} variant="contained" onClick={() => handleRating(trail.rating - 1)}>
                  -
                </Button>
                <Typography sx={{ mx: 1 }}>{trail.rating}</Typography>
                <Button disabled={disabled} variant="contained" onClick={() => handleRating(trail.rating + 1)}>
                  +
                </Button>
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '20px' }} variant="body1">
                  Start location: {trail.startLocation}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: '20px' }} variant="body1">
                  End location: {trail.endLocation}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: '20px' }} variant="body1">
                Length: {trail.length}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Button sx={{ m: '48px' }} variant="outlined" onClick={() => navigate('/trails/')}>
          Back
        </Button>
      </Box>
    )
  );
}
