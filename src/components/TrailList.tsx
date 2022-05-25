import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import useFetch from '../hooks/useFetch';
import { TrailType } from '../types/trail';
import Spinner from './Loading';
import TrailBox from './TrailBox';

export default function TrailList() {
  const { data, loading } = useFetch({ path: '/trail/', method: 'GET' });

  const trails = data as TrailType[];

  return (
    <>
      <Spinner open={loading} />
      <Box sx={{ p: 3, width: '100%' }}>
        <Typography variant="h4" sx={{ pb: 2 }}>
          Browse trails
        </Typography>
        <Grid container spacing={3}>
          {trails &&
            trails.map((trail: TrailType) => (
              <Grid item xs={4}>
                <TrailBox trail={trail} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
